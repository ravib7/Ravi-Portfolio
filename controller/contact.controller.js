const asyncHandler = require("express-async-handler")
const Contact = require("../model/Contact")
const sendEmail = require("../utils/email")


exports.createContactData = asyncHandler(async (req, res) => {
    const { name, email, message } = req.body
    const result = await Contact.create({ name, email, message })
    await sendEmail({
        to: process.env.EMAIL,
        from: result.email,
        subject: `Hello, Ravi My self ${result.name}, hope that this message finds you well. i came accross your profile it shows us your tallent and passion about developement and technology we would like to contact you
        job Descripotion :- ${result.message}`



    })
    res.json({ message: "Contact Data Add Successfully", result })
})