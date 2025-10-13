import axios from "axios";

const API_KEY = "d4b6bc723ac291b078823a9b64bd3e08";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 2000,
  params: {
    // api_key: "d4b6bc723ac291b078823a9b64bd3e08",
    api_key: API_KEY,
  },
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     if (config.baseURL == "/movie/popular" && config.method == "get") {
//       config.headers.Authorization = `Bearer ${API_KEY}`;
//     }
//     console.log(config);
//     // return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject(error)
// );
