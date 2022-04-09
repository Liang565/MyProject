import axios, { type AxiosInstance } from "axios";

export const http: AxiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
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
    // if (error.response?.data.statusCode == "401") {
    //   message.error("请先登录");
    //   router.push('/login')
    // }
    // if (error.response?.data.statusCode == "403") {
    //   message.error("没有权限");
    // } else {
    //   message.error(error.response?.data.message || "请稍后再试");
    // }

    return Promise.reject(error);
  }
);
