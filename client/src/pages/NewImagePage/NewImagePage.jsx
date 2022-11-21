import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import ImageForm from "../../components/ImageForm/ImageForm"
const NewImagePage = () => {

    const navigate = useNavigate()

    return (
        <Container>
            <h1>Nueva Imagen</h1>

            <hr />

            <ImageForm loadImage={() => navigate("galeria")} />
        </Container>
    )
}

export default NewImagePage