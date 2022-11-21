import { Col, Row } from "react-bootstrap"
import ImageCard from "../ImageCard/ImageCard"

const ImagesList = ({ images }) => {

    return (
        <Row>
            {
                images.map(image => {
                    return (
                        <Col md={3} key={image._id}>
                            <ImageCard {...image} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default ImagesList