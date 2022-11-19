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

    const { _id: owner } = req.payload

    FavImg
        .create({ owner, ...req.body })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put("/edit/:image_id", (req, res) => {

})