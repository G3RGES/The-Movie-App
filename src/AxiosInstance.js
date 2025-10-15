import axios from "axios";
// import { store } from "./store/store";
// import { changeLoaderState } from "./store/LoaderSlice";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  //   timeout: 2000,
});
export default axiosInstance;
axiosInstance.interceptors.request.use(
  (config) => {
    // store.dispatch(changeLoaderState(true));
    return config;
  },

  (error) => {
    // store.dispatch(changeLoaderState(false));
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // store.dispatch(changeLoaderState(false));
    return response;
  },
  (error) => {
    // store.dispatch(changeLoaderState(false));
    Promise.reject(error);
  }
);
