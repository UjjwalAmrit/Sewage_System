import axios from "axios"

<<<<<<< HEAD:frontend/src/services/api.js
const API_BASE_URL = "/api"
=======
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api"
>>>>>>> 0dfb9791d5de96a1acede44360752d0f74d0157b:backend/frontend/src/services/api.js

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to ${config.url}`)
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.error("API Error:", error.response?.data || error.message)
    return Promise.reject(error.response?.data || error)
  },
)

// API functions
export const getHomeContent = async () => {
  const response = await api.get("/home")
  return response.data
}

export const getAboutContent = async () => {
  const response = await api.get("/about")
  return response.data
}

export const getProjectsServices = async () => {
  const response = await api.get("/projects-services")
  return response.data.data
}

export default api
