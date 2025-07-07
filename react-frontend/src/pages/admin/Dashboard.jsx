import { Sidebar } from "../../components/admin/Sidebar"

export const Dashboard = () => {
    return (
        <>
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
                                <h3>0</h3>
                                <p>0 apps submitted</p>
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
                                    <input type="text" class="form-control" placeholder="Search by app name, developer name or package name..." />
                                </div>
                                <div class="d-flex justify-content-between">
                                    <select class="form-select w-auto">
                                        <option>All Apps</option>
                                        <option>Newest First</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
