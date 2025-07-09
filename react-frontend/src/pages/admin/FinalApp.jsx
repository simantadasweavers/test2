import { useEffect } from "react"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/admin/Sidebar";
import axios from "../../Auth/Axios";
import { currentDate } from "../../Helpers/Date";


export const FinalApp = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const receiveData = location.state;
    const { app_name, play_url, icon, apk, addi_info } = receiveData;

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formdata = new FormData();
        formdata.append("apk_file", apk);
        formdata.append("apk_icon", icon);
        formdata.append("app_name", app_name);
        formdata.append("google_play_url", play_url);
        formdata.append("additional_info", addi_info);
        formdata.append("date", currentDate());

        axios({
            method: 'POST',
            url: '/app/submit_app',
            data: formdata,
            headers: { "Content-Type": "multipart/form-data" },
        }).then((res) => {
            Swal.fire({
                title: res.data.result,
                icon: "success"
            });
            navigate("/admin/dashboard");
        }).catch((err) => {
            Swal.fire({
                title: err.response.data.result,
                icon: "error"
            });
        });

    }

    return (
        <>

            <title>Checkout App Details</title>

            <div class="container-fluid">
                <div class="row">
                    <Sidebar />

                    <div class="col-md-10 p-4">
                        <h1>Submit Your App <span class="text-success">Get your app tested by 25 professional testers in 14 days</span></h1>
                        <div class="d-flex align-items-center mb-4">
                            <div class="step-card d-flex align-items-center">
                                <div class="step bg-success"><span class="text-white">✔</span></div>
                                <span>100% Production Access Guarantee</span>
                            </div>
                            <div class="step-card d-flex align-items-center">
                                <div class="step bg-success"><span class="text-white">✔</span></div>
                                <span>Setup Guide <small>Step 1</small></span>
                            </div>
                            <div class="step-card d-flex align-items-center">
                                <div class="step bg-success"><span class="text-white">✔</span></div>
                                <span>App Details <small>Step 2</small></span>
                            </div>
                            <div class="step-card d-flex align-items-center">
                                <div class="step bg-success"><span class="text-white">✔</span></div>
                                <span>Review & Submit <small>Step 3</small></span>
                            </div>
                        </div>
                        <div class="step-card">
                            <h3>Review & Submit</h3>
                            <p>Review your app details and verify your credits before submitting.</p>

                            <form onSubmit={handleSubmit}>
                                <div class="mb-3">
                                    <p><span class="highlight">✔</span> App Name</p>
                                    <p>{app_name}</p>
                                </div>
                                <div class="mb-3">
                                    <p><span class="highlight">✔</span> Testing URL</p>
                                    <p>{play_url}</p>
                                </div>
                                <div class="mb-3">
                                    <p><span class="highlight">✔</span> App Icon</p>
                                    <img src={URL.createObjectURL(icon)} alt="App Icon" class="img-thumbnail" height="100" width="100" />
                                </div>
                                <div class="mb-3">
                                    <p><span class="highlight">✔</span> .Apk File</p>
                                    <p>{apk.name}</p>
                                </div>
                                <div class="mb-3">
                                    <p><span class="highlight">✔</span> Additional Information</p>
                                    <p>{addi_info}</p>
                                </div>

                                {/* <div class="warning-box">
                                <p><span class="highlight">⚠</span> Credits Required</p>
                                <p>You have 0 credits - Need credit to submit</p>
                            </div>
                            <div class="info-box">
                                <p><span class="highlight">🔒</span> Get 1 Credit to Submit Your App</p>
                                <p>Purchase credits to unlock 25 professional testers for 14 days with production access guarantee.</p>
                                <button class="btn btn-custom mt-3">Buy Credits</button>
                                <p class="mt-2">opens in new tab - Returns here after purchase</p>
                            </div> */}

                                <button type="submit" class="btn btn-custom mt-3">Submit App</button>

                            </form>

                            <br /><br /><br />
                            <div class="d-flex justify-content-between">
                                <button type="button" class="btn btn-secondary">Change/Go Back</button>
                            </div>


                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
