import axios from "axios";

// Use a simple relative path. The proxy will handle the rest.
const API_BASE_URL = "/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error.response?.data || error);
  }
);

// API functions
export const getHomeContent = async () => {
  const response = await api.get("/home");
  return response.data;
};

export const getAboutContent = async () => {
  const response = await api.get("/about");
  return response.data;
};

export const getProjectsServices = async () => {
  const response = await api.get("/projects-services");
  return response.data.data;
};

export default api;