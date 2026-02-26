import React from 'react'
import useStore from '../../../Zusstand';
import './ShimmerNews.css'
const ShimmerNews = () => {
  const newArarry = [1, 2, 3, 4, 5, 67, 8, 9, 8, 88, 8, 88, 8, 8, 8, 88, 8, 88, 8, 88, 8, 8, 8];
  return (
    newArarry.map((items, index) => {
      return (
        <div key={index}
          className={`
    relative mt-4 min-w-[250px] max-[300px]:min-w-[220px] h-[350px] rounded-[10px] overflow-hidden
  bg-[#f3f3f3] dark:bg-[#111111]
  `}
        >

          {/* SHIMMER */}
          <div
            className={`
      absolute inset-0 pointer-events-none
      bg-gradient-to-r
      from-transparent
       via-white/60' '
      to-transparent
      animate-[shimmer_1.4s_linear_infinite]
         via-white/60 dark:via-white/10
    `}
          />

          {/* image skeleton */}
          <div
            className={`w-full h-[50%] bg-[#e5e5e5]  dark:bg-[#1f1f1f]              }`}
          />

          {/* text lines */}
          <div className={`w-3/4 h-4 mt-6 mx-4 rounded bg-[#e5e5e5]  dark:bg-[#1f1f1f]`} />
          <div className={`w-2/3 h-4 mt-3 mx-4 rounded bg-[#e5e5e5]  dark:bg-[#1f1f1f]`} />
          <div className={`w-1/2 h-4 mt-5 mx-4 rounded bg-[#e5e5e5]  dark:bg-[#1f1f1f]`} />

        </div>
      )
    })
  )
}

export default ShimmerNews