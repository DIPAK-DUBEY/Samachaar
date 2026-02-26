import api from './axios'

export  const UseNews = async (sortby) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const response = await api.get(
    `?q=${sortby || 'all'}&pageSize=100&apiKey=${apiKey}`
  );

  return response.data.articles;
};