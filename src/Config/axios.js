import axios from "axios";

const BASE_URL = "https://newsapi.org/v2/top-headlines";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export default api;
