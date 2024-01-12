import axios, { AxiosInstance, AxiosResponse } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// instance.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response && response.data ? response.data : response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default instance;
