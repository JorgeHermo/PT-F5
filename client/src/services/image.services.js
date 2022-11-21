import axios from "axios"

class ImageService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/favImg`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getImages() {
        return this.api.get("/getAllImages")
    }

    getOneImage(image_id) {
        return this.api.get(`/getOneImage/${image_id}`)
    }

    createImage(imageData) {
        return this.api.post("/create", imageData)
    }

    editImage(image_id, data) {
        return this.api.put(`/edit/${image_id}`, data)
    }

    deleteImage(image_id) {
        return this.api.delete(`/delete/${image_id}`)
    }
}

const imageService = new ImageService()

export default imageService