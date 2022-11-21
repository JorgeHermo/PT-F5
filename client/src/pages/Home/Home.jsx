import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Home = () => {

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>

                    <h1>App Galerie!</h1>
                    <hr />
                    <p>Galeria para tus imagenes favoritas</p>
                    <Link>
                        <Button variant="dark">Galeria</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Home