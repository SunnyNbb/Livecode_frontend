import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 5000,
});

api.interceptors.request.use((config) => {
  return config;
});

api.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
