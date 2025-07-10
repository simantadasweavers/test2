import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Logout } from "../pages/Logout"
import { ErrorPage } from "../pages/ErrorPage"
import { Dashboard } from "../pages/admin/Dashboard"
import { SubmitApp } from "../pages/admin/SubmitApp"
import { EditApp } from "../pages/admin/EditApp"
import { AppDetails } from "../pages/admin/AppDetails"
import { FinalApp } from "../pages/admin/FinalApp"
import { AppSupport } from "../pages/admin/AppSupport"


export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/admin/support" element={<AppSupport />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/edit-app" element={<EditApp />} />
            <Route path="/admin/submit-app" element={<SubmitApp />} />
            <Route path="/admin/app-details" element={<AppDetails />} />
            <Route path="/admin/final-app" element={<FinalApp />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}
