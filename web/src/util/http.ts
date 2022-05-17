import axios, { type AxiosInstance } from "axios";
import { Toast } from "vant";

export const http: AxiosInstance = axios.create({
  // baseURL: "http://www.lianger.fit/admin/api/",
  baseURL: "http://localhost:3002/server/api",
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
    Toast.fail(error.response?.data.message || "请稍后");
    // message.error(error.response?.data.message || "请稍后");
    return Promise.reject(error);
  }
);
