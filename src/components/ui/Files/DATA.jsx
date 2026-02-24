import React, { useEffect } from 'react';
import useStore from '@/Zusstand';
import { CardImage } from '@/components/ui/Files/CardImage';
import api from '@/Config/axios';
const DATA = ({ data }) => {
  const fetchData = useStore((store) => store.fetchData);
  const setFetchData = useStore((store) => store.setFetchData);
  const fetchdata = async () => {
    try {
      const response = await api.get(`?source-country=in&language=en&number=10&api-key=${import.meta.env.VITE_API_KEY}`);
      // Check actual structure of response.data!
      const newsData = response.data?.news || response.data?.results || response.data || [];
      setFetchData(newsData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setFetchData([]);
    }
  }
  useEffect(() => {
    fetchdata();
  }, [data]);
  return (
    <div className="flex flex-row flex-wrap gap-5 mt-5">
      {fetchData.map((items, index) => {     
        return (
          items.image&&
          <CardImage
            key={index}
            title={items.title}
            description={items.description}
            image={items.image}
            datatotoggle={items.url}
            Source={items.author}
          />
        );
      })}
    </div>
  )
}
/*
<CardImage
              key={items.id || idx}
              title={items.title}
              description={items.text}
              image={items.image}
              datatotoggle={items.url}
              Source={items.author}
            />
*/
export default DATA

