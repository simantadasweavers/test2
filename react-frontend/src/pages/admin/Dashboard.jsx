import { useState } from "react"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../../components/admin/Sidebar"
import axios from "../../Auth/Axios";



export const Dashboard = () => {

    const [app_details, setAppDetails] = useState({});

    useEffect(() => {

        axios({
            method: 'POST',
            url: '/user/apps',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                setAppDetails(res.data.result);
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])


    return (
        <>
            <title>Dashboard</title>

            <div class="container-fluid">
                <div class="row">

                    <Sidebar />

                    <div class="col-md-10 p-4">
                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <h2>Dashboard <span class="text-success">Welcome back! Manage your apps and track testing progress.</span></h2>
                            <button class="btn btn-custom">Buy Credits</button>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-3 card card-custom text-center p-3">
                                <h5>Total Apps</h5>
                                <h3>{app_details.length}</h3>
                                <p>{app_details.length} apps submitted</p>
                            </div>
                            <div class="col-md-3 card card-custom text-center p-3">
                                <h5>In Testing</h5>
                                <h3>0</h3>
                                <p>0 apps in testing</p>
                            </div>
                            <div class="col-md-3 card card-custom text-center p-3">
                                <h5>Completed</h5>
                                <h3>0</h3>
                                <p>0 apps completed</p>
                            </div>
                            <div class="col-md-3 card card-custom text-center p-3">
                                <h5>Available Credits</h5>
                                <h3>0</h3>
                                <p>0 credits remaining</p>
                            </div>
                        </div>
                        <div class="highlight mb-4">
                            <p>Production Access Guarantee <span class="text-success">We guarantee Google Play production access after 14 days of testing with our professional testers.</span></p>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <h3>Your Apps</h3>
                                <div class="input-group mb-3">

                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Logo</th>
                                                <th scope="col">App Name</th>
                                                <th scope="col">Google Play URL</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {app_details.length ? app_details.map((key, i) => {
                                                let app_obj = {app_id: key._id};
                                                return (
                                                    <tr key={key.i}>
                                                        <th scope="row">
                                                            <img src={import.meta.env.VITE_BACKEND_URL + "/" + key.apk_image} alt="" height="50" width="50" />
                                                        </th>
                                                        <td>{key.app_name}</td>
                                                        <td>{key.google_play_url}</td>
                                                        <td>
                                                            <span class="badge text-bg-warning">Waiting for approval </span>
                                                        </td>
                                                        <td>
                                                            <Link class="btn btn-success" to="/admin/edit-app" state={app_obj} >Edit</Link>
                                                        </td>
                                                    </tr>)
                                            }) : ''}


                                        </tbody>
                                    </table>

                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
