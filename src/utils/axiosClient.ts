import axios from "axios";
import Cookies from "js-cookie";

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

axiosClient.interceptors.request.use(
  (config) => {
    const authToken = Cookies.get("auth-token");
    if (authToken) {
      config.headers["Authorization"] = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
