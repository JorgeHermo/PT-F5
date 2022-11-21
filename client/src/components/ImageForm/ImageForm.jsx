import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import imageServices from "./../../services/image.services"

const ImageForm = (loadImages) => {

    const [imageData, setImageData] = useState({
        title: "",
        description: "",
        imageUrl: "",
    })

    const handleChange = e => {
        const { value, name } = e.target
        setImageData({ ...imageData, [name]: value })
    }

    const handleSubmit = e => {
        imageServices
            .createImage(imageData)
            .then(() => {
                loadImages()
            })
            .catch(err => console.error(err))
    }

    const { title, description, imageUrl } = imageData

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={title} onChange={handleChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" value={description} onChange={handleChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Imagen (URL)</Form.Label>
                <Form.Control type="text" value={imageUrl} onChange={handleChange} name="imageUrl" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit" >Guardar</Button>
            </div>
        </Form>
    )
}

export default ImageForm