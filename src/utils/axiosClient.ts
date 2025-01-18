import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

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

axiosClient.interceptors.response.use(
  (response) => {
    console.log("response", response);
    return response;
  },
  (error) => {
    console.log("error", error);
    if (error.response) {
      const status = error.response.status;

      if (status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Bad Request',
          text: 'The request is invalid. Please check your input.',
        });
      } else if (status === 404) {
        Swal.fire({
          icon: 'warning',
          title: 'Not Found',
          text: 'The requested resource was not found.',
        });
      } else if (status === 500) {
        Swal.fire({
          icon: 'error',
          title: 'Server Error',
          text: 'Something went wrong on the server. Please try again later.',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Unknown Error',
          text: 'An unknown error occurred.',
        });
      }
    } else if (error.request) {
      // ถ้าไม่มีการตอบกลับจาก server
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Network error. Please check your connection.',
      });
    } else {
      // ถ้าเกิด error อื่นๆ
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message,
      });
    }

    return Promise.reject(error);
  }
);
