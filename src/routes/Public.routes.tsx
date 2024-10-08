import { useAuth } from "@/context/AuthContext"
import LoginPage from "@/pages/Auth/Login.pages"
import SignUpPage from "@/pages/Auth/SignUp.pages"
import LandingPage from "@/pages/Landing.pages"
import { Route, Routes } from "react-router-dom"

const PublicRoutes = () => {
    const { user } = useAuth();
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            {
                !user && (
                    <>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                    </>
                )
            }
        </Routes>
    )
}

export default PublicRoutes