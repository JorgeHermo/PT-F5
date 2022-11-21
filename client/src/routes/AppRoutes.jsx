import { Routes, Route } from "react-router-dom"
import Home from "./../pages/Home/Home"
import SignupPage from "./../pages/SignupPage/SignupPage"
import LoginPage from "./../pages/LoginPage/LoginPage"
import ImagePage from "./../pages/ImagePage/ImagePage"
import NewImagePage from "../pages/NewImagePage/NewImagePage"
import ImageDetailPage from "../pages/ImageDetailPage/ImageDetailPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galeria" element={<ImagePage />} />
            <Route path="/create" element={<NewImagePage />} />
            <Route path="/details/:image_id" element={<ImageDetailPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    )
}

export default AppRoutes