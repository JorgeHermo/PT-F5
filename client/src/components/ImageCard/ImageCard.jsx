import "./ImageCard.css"
import { Card, Button, ButtonGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"
import imageServices from "../../services/image.services"

const ImageCard = ({ imageUrl, title, _id, owner, loadImages }) => {

    const { user } = useContext(AuthContext)

    const editHandler = () => {
        Navigate(`/edit/${_id}`)
    }

    const deleteHandler = () => {
        imageServices
            .deleteImage(_id)
            .then(() => {
                loadImages()
            })
            .catch(err => console.error(err))
    }

    return (
        <Card className="ImageCard mb-4">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <hr />
                <div className="d-grid">

                    {
                        owner === user?._id
                            ?
                            <ButtonGroup>
                                <Link to={`/details/${_id}`}>
                                    <Button size="sm" variant="dark">Ver detalles</Button>
                                </Link>
                                <Button size="sm" variant="warning" onClick={editHandler}>Editar</Button>
                                <Button size="sm" variant="danger" onClick={deleteHandler}>Editar</Button>
                            </ButtonGroup>
                            :
                            <Link to={`/details/${_id}`}>
                                <Button variant="dark" size="sm" as="div">Ver detalles</Button>
                            </Link>
                    }

                </div>
            </Card.Body>
        </Card>
    )
}

export default ImageCard