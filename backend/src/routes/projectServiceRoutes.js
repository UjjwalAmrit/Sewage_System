const express = require("express")
const { getProjectsServices } = require("../controllers/projectServiceController")

const router = express.Router()

router.get("/", getProjectsServices)

module.exports = router
