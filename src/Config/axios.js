import axios from "axios";
const BASE_URL = "https://api.worldnewsapi.com/search-news";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export default api;
/*
https://api.worldnewsapi.com/search-news?source-country=in&language=hi&number=100&api-key=8382fe2eecc549f585f8c0eeb69780bf
*/