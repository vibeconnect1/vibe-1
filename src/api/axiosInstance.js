import axios from "axios";
import { getItemInLocalStorage } from "../utils/localStorage";

const axiosInstance = axios.create({
  baseURL: "http://3.6.98.113",
});

axiosInstance.interceptors.request.use(
  (authenticate) => {
    const token = getItemInLocalStorage("TOKEN");
    if (token) {
      authenticate.headers["Authorization"] = ` ${token}`;
    }
    return authenticate;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
