import React, { useEffect, useState } from 'react'
import { CardImage } from '@/components/ui/Files/CardImage';
import ShimmerNews from './ShimmerNews';
import axios from 'axios';

const DATA = ({ sortby }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setData([]);

      try {
        const apiKey = import.meta.env.VITE_API_KEY;

        const response = await axios(`https://newsapi.org/v2/everything?q=${sortby || 'all'}&apiKey=${apiKey}`)

        setData(response.data.articles || []);
      } catch (error) {
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sortby]);
  return (
    <div className="flex flex-row flex-wrap gap-5">
      {loading ? (
        <ShimmerNews />
      ) : (
        data.map((items) => (
          <CardImage
            key={items.url}
            title={items.title}
            description={items.content}
            image={items.urlToImage}
            datatotoggle={items.url}
            Source={items.source.name}
          />
        ))
      )}
    </div>
  );
};

export default DATA
