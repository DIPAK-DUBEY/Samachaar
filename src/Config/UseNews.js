import api from './axios'

export const UseNews = async (sortby) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const response = await api.get("", {
    params: {
      country: "in",
      category: sortby,
      lang: "en",
      apikey: apiKey,
    },
  });
  return response.data.articles;
};
