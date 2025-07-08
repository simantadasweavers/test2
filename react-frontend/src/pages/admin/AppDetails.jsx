import { Sidebar } from "../../components/admin/Sidebar"

export const AppDetails = () => {
    return (
        <>

            <title>Enter App Details</title>

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
                                <div class="step"><span>✔</span></div>
                                <span>Review & Submit <small>Step 3</small></span>
                            </div>
                        </div>
                        <div class="step-card">
                            <h3>App Details</h3>
                            <p>Provide the basic information about your app.</p>
                            <form>
                                <div class="mb-3">
                                    <label class="form-label">App Name <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control bg-dark text-white" placeholder="Enter your app name" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Testing URL <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control bg-dark text-white" placeholder="Enter Google Play testing URL" />
                                    <small class="text-muted">Example: https://play.google.com/apps/testingcom.example.app</small>
                                </div>
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">Enter your .apk file <span class="text-danger">*</span></label>
                                    <input class="form-control bg-dark text-white" type="file" id="formFile" />
                                </div>
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">Enter app icon <span class="text-danger">*</span></label>
                                    <input class="form-control bg-dark text-white" type="file" id="formFile" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Additional Instructions (Optional)</label>
                                    <textarea class="form-control bg-dark text-white" rows="3" placeholder="Enter any specific testing instructions or requirements"></textarea>
                                    <small class="text-muted">Help testers understand what to focus on</small>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <button type="button" class="btn btn-secondary">Back</button>
                                    <button type="submit" class="btn btn-custom">Continue <span class="text-success">&gt;</span></button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
