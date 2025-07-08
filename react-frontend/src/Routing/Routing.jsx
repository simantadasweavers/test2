import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Dashboard } from "../pages/admin/Dashboard"
import { SubmitApp } from "../pages/admin/SubmitApp"
import { AppDetails } from "../pages/admin/AppDetails"


export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/submit-app" element={<SubmitApp />} />
            <Route path="/admin/app-details" element={<AppDetails />} />
        </Routes>
    )
}
