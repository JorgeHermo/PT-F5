import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth.context"
import imageService from "../../services/image.services"
import ImagesList from "../../components/ImagesList"

const ImageListPAge = () => {

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
                <ImagesList images={images} />
                <ImageForm loadImages={loadImages} />
            </Container>
        </>
    )
}