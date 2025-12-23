import axios from "axios";

// baseURL: change this to your backend server URL  
const api = axios.create({
  baseURL: "https://backend-2-7c7v.onrender.com/api",
  headers: { "Content-Type": "application/json" },
});

// Attach token header if user is logged in
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
