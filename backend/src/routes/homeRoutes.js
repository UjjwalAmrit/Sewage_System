const express = require("express")
const { getHomeContent } = require("../controllers/homeController")

const router = express.Router()

router.get("/", getHomeContent)

module.exports = router
