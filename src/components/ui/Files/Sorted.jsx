import Navbar from "./Navbar";
import { Globe } from "../globe";
import Choices from "./Choices";
import React from 'react'
import { useParams } from 'react-router'
import DATA from "./DATA";
import Footer from "./Footer";

// Remove data fetching and state from Sorted; delegate it to DATA, which already listens to prop changes.
const Sorted = () => {
  const { id } = useParams();

  return (
    <>
      <div className="sticky top-10 opacity-20 max-[600px]:top-40">
        <Globe />
      </div>
      <div className="p-5 max-w-[1350px] mx-auto min-h-screen">
        <Navbar />
        <div
          className="flex flex-row gap-5 justify-center mt-4 flex-wrap max-[600px]:hidden ">
          <Choices />
        </div>
        {/* DATA takes sortby which triggers its own useEffect when id changes */}
        <DATA sortby={id} />
        <Footer/>
      </div>
    </>
  )
}

export default Sorted

// u have to print the longest palindrome in the string : 

