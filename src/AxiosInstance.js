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
