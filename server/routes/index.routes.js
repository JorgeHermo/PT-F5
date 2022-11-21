const router = require("express").Router()

router.get("/", (req, res, next) => {
  res.json("All good in here")
})
router.use("/favImg", require("./image.routes"))
router.use("/auth", require("./auth.routes"))

module.exports = router
