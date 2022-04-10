import axios, { type AxiosInstance } from "axios";
import { message } from "ant-design-vue";
export const http: AxiosInstance = axios.create({
  baseURL: "http://localhost:3001/admin/api/",
});
http.interceptors.request.use((config) => {
  config.headers = {
    Authorization: "Bearer " + localStorage.token,
  };
  return config;
});
http.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    message.error(error.response?.data.message || "请稍后");
    return Promise.reject(error);
  }
);
