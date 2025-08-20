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

    // 1️⃣ Send acknowledgment email to the user
    await sendEmail({
      to: email,
      subject: "We’ve received your message – Thank you for contacting us!",
      html: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 30px;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 25px;">
          
          <h2 style="color: #2c3e50; text-align: center;">📬 Thank You for Reaching Out!</h2>
          <p style="color: #555; font-size: 16px;">Hello <strong>${name}</strong>,</p>
          <p style="color: #555; font-size: 16px;">
            We’ve received your message and our team will get back to you shortly.  
            Here’s a summary of what you sent us:
          </p>

          <div style="border: 1px solid #e1e1e1; border-radius: 8px; padding: 15px; margin: 20px 0; background: #fafafa;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="border-left: 4px solid #3498db; margin: 10px 0; padding-left: 10px; color: #333;">
              ${message}
            </blockquote>
          </div>

          <p style="font-size: 15px; color: #555;">
            📌 <em>Please do not reply directly to this automated email.</em>
          </p>

          <p style="margin-top: 25px; color: #2c3e50; font-size: 16px; text-align: center;">
            Warm regards,<br/>
            <strong>Your Company Team</strong>
          </p>

        </div>
      </div>
      `,
    })

    // 2️⃣ Send notification email to admin
    await sendEmail({
      to: process.env.EMAIL_USER, // put your admin email in .env
      subject: "📥 New Contact Form Submission",
      html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #fafafa;">
        <div style="max-width: 600px; margin: auto; background: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <h2 style="color: #2c3e50;">📥 New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 4px solid #e74c3c; margin: 10px 0; padding-left: 10px; color: #333;">
            ${message}
          </blockquote>
        </div>
      </div>
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
