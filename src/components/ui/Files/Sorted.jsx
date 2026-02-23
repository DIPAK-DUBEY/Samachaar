import Navbar from "./Navbar";
import { Globe } from "../globe";
import Choices from "./Choices";
import React from 'react'
import { useParams } from 'react-router'
import DATA from "./DATA";
const Sorted = () => {
  const { id } = useParams();


  return (
    <>
      <div className="sticky top-40 opacity-20">
        <Globe />
      </div>
      <div className="p-5 max-w-[1350px] mx-auto ">
        <Navbar />
        <div
          className="flex flex-row gap-5 justify-center mt-4 flex-wrap">
          <Choices />
        </div>
        <DATA  data={id}/>
      </div>


    </>
  )
}

export default Sorted