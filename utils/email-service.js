const nodemailer = require("nodemailer")

module.exports = async function sendEmail(email, otp) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "asaddevo211@gmail.com",
            pass: process.env.APP_KEY
        }
    })
 
    const result = await transporter.sendMail({
         from: "asaddevo211@gmail.com",
         to: email,
         subject: "Library auth",
         text: "shunchaki",
         html: `<h1 style="font-size: 36px; color: blue;">${otp}</h1>`
    })
    console.log(result);
}