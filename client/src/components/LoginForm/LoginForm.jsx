import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import authService from "./../../services/auth.services.js"
import { AuthContext } from "./../../contexts/auth.context"

const LoginForm = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const { storeToken, authenticateUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                console.log("login data ---->>>", data)
                storeToken(data.authToken)
                authenticateUser()
            })
            .catch(err => console.log(err))
    }

    const { password, email } = loginData

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Acceder</Button>
            </div>

        </Form>
    )
}

export default LoginForm