const nodemailer = require("nodemailer")

const sendEmail = async ({ to, subject, html }) => {
  try {
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
    }

    await transporter.sendMail(mailOptions)
    console.log("Email sent successfully")
  } catch (error) {
    console.error("Email sending error:", error)
    throw error
  }
}

module.exports = sendEmail
