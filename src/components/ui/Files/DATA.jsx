import React, { useEffect } from 'react';
import useStore from '@/Zusstand';
import { CardImage } from '@/components/ui/Files/CardImage';
import api from '@/Config/axios';

const DATA = ({data}) => {
  const fetchData = useStore((store) => store.fetchData);
  const setFetchData = useStore((store) => store.setFetchData);
  const fetchdata = async () => {
    try {
      const response = await api.get(`/everything?q=${data ||'iphones'}&apiKey=${import.meta.env.VITE_API_KEY}`);
      setFetchData(response.data.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
      setFetchData([]);
    }
  }
  console.log(fetchData)
  useEffect(() => {
    fetchdata();
  }, [data])
  return (

    <div className="flex flex-row flex-wrap gap-5 mt-5" >

      {fetchData && (
        fetchData.map((items, index) => {
          return (
            items.urlToImage&&
            <CardImage
              key={index}
              title={items.title}
              description={items.description}
              image={items.urlToImage}
              datatotoggle={items.url}
            />

          )
        })
      )}

    </div>
  )
}

export default DATA

/*

 fetchData: '',
  setFetchData: (value) => set({ fetchData: value }),
*/