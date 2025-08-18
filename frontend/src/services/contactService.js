import api from "./api"

export const submitContactForm = async (formData) => {
  try {
    const response = await api.post("/contact/submit", formData)
    return response
  } catch (error) {
    throw new Error(error.message || "Failed to submit contact form")
  }
}
