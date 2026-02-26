import React from 'react'
import { CardImage } from '@/components/ui/Files/CardImage';
import { FetchData } from '../../../Config/FetchData'
import ShimmerNews from './ShimmerNews';
const DATA = ({ sortby }) => {
  const { data, isLoading, error } = FetchData(sortby);
  if (isLoading)
    return <h1 className="mt-5 text-center"><ShimmerNews /></h1>;

  if (error)
    return <h1 className="mt-5 text-center">Error loading news</h1>;
  return (
    < div className="flex flex-row flex-wrap gap-5 mt-5" >
      {
        data?.map((items, idx) => (
          ((items.urlToImage ? items.urlToImage : '') && items.title !== "Google News") ?
            <CardImage
              key={idx}
              title={items.title}
              description={items.description}
              image={items.urlToImage}
              datatotoggle={items.url}
              Source={items.source?.name || "Abc"}
            /> : null
        ))
      }
    </div >
  )
}

export default DATA