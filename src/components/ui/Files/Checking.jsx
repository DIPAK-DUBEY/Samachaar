import React from 'react'
import dataEnglish from './Data.json'
import { CardImage } from '@/components/ui/Files/CardImage';
import { h1 } from 'motion/react-client';
console.log(dataEnglish);
const Checking = () => {
  console.log("loading")
  const allNews = dataEnglish.top_news.flatMap(
    (section) => section.news
  );
  console.log(allNews);

  return (
    < div className="flex flex-row flex-wrap gap-5 mt-5" >
      {
        allNews.map((items, idx) => (
          items.image ?
            <CardImage
              key={items.id || idx}
              title={items.title}
              description={items.text}
              image={items.image}
              datatotoggle={items.url}
              Source={items.author}
            />
            : ''
        ))
      }
    </div >

  )
}

export default Checking
/*
image language publish_date source_country text title  url
*/