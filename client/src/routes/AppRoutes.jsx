import { Routes, Route } from "react-router-dom"
import Home from "./../pages/Home/Home"
import SignupPage from "./../pages/SignupPage/SignupPage"
import LoginPage from "./../pages/LoginPage/LoginPage"
const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galeria" />
            <Route path="/crear" />
            <Route path="/details/:image_id" />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/iniciar-sesion" element={<LoginPage />} />
        </Routes>
    )
}

export default AppRoutes