const { createContactData } = require("../controller/contact.controller")

const router = require("express").Router()

    .post("/contact-data", createContactData)

module.exports = router