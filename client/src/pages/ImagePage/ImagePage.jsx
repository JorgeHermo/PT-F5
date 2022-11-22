import { Container, Row, Col } from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth.context"
import imageService from "../../services/image.services"
import ImagesList from "../../components/ImagesList/ImagesList"
import ImageForm from "../../components/ImageForm/ImageForm"

const ImageListPage = () => {

    const [images, setImages] = useState([])

    const { user } = useContext(AuthContext)

    useEffect(() => {
        loadImages()
    }, [])

    const loadImages = () => {
        imageService
            .getImages()
            .then(({ data }) => {
                setImages(data)
            })
            .catch(err => console.error(err))
    }

    return (
        <>
            <Container>
                <h1>Galeria</h1>
                <hr />
                <Row>
                    <Col md={3}>
                        <ImageForm loadImages={loadImages} />
                    </Col>
                </Row>
                <hr />
                <ImagesList images={images} />
            </Container>
        </>
    )
}

export default ImageListPage