const Contact = require("../models/Contact")
const sendEmail = require("../utils/sendEmail")

const submitContact = async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields",
      })
    }

    // Create new contact
    const contact = new Contact({
      name,
      email,
      phone,
      company,
      message,
    })

    await contact.save()

    // Send notification email
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
    })
  } catch (error) {
    console.error("Contact submission error:", error)
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    })
  }
}

module.exports = {
  submitContact,
}
