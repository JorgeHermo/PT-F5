import { Container, Col, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import imageService from "../../services/image.services"



const ImageDetailPage = () => {

    const [image, setImage] = useState()

    const { image_id } = useParams()

    useEffect(() => {
        imageService
            .getOneImage(image_id)
            .then(({ data }) => setImage(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <Container>
            <h1>Detalles de {image.title}</h1>
            <hr />

            <Row>
                <Col md={{ span: 6 }}>
                    <h3>Descripción</h3>
                    <img src={image.imageUrl} style={{ width: '100%' }} />
                    <p>{image.description}</p>
                    <Link to="/galeria">
                        <Button as="div" variant="dark">Volver a la galería</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default ImageDetailPage