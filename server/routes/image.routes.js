const router = require("express").Router()

const { response } = require("express")
const { isAuthenticated } = require("../middleware/jwt.middleware")
const FavImg = require("./../models/FavImg.model")

router.get("/getAllImages", (req, res) => {

    FavImg
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/getOneImage/:image_id", (req, res) => {

    const { image_id } = req.params

    FavImg
        .findById(image_id)
        .then(response = res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post("/create", isAuthenticated, (req, res) => {

    const { title, description, imageUrl } = req.body
    const { _id: owner } = req.payload

    const newImage = {
        title,
        description,
        imageUrl,
        owner
    }

    FavImg
        .create(newImage)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put("/edit/:image_id", isAuthenticated, (req, res) => {

    const { title, description, imageUrl } = req.body
    const { image_id } = use.params
    const { _id: user_id } = req.payload

    FavImg.findById(image_id)
        .select('owner')
        .then(favImg => {
            if (!favImg.owner.equals(user_id)) {
                const message = "can not edit a img that you do not own"
                throw { message, errorCode: 401 }
            }
            return FavImg.findByIdAndUpdate(image_id, { title, description, imageUrl }, { new: true })
        })
        .then(response => res.json(response))
        .catch(err => {
            const errorCode = err.errorCode ? err.errorCode : 500
            const message = err.message ? err.message : "Internal server error"
            res.status(errorCode).json({ message })
        })
})

router.delete("/delete/:image_id", isAuthenticated, (req, res) => {

    const { image_id } = req.params
    const { _id: user_id } = req.payload

    FavImg.findById(image_id)
    select('owner')
        .then(favImg => {
            if (!favImg.owner.equals(user_id)) {
                const message = "Can not delete a image that you do not own"
                throw { message, errorCode: 401 }
            }
            return FavImg.findByIdAndDelete(image_id)
        })
        .then(response => res.json(response))
        .catch(err => {
            const errorCode = err.errorCode ? err.errorCode : 500
            const message = err.message ? err.message : "Internal server error"
            res.status(errorCode).json({ message })
        })
})

module.exports = router