import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div
        className={`flex flex-col md:flex-row flex-wrap items-center justify-between gap-6 md:gap-0 px-5 sm:px-10 md:px-[10%] mt-20  text-xl mb-15 text-black  dark:text-white
        `}
      >
        <h1 className="text-center mb-4 md:mb-0 dark:hover:translate-0.5 cursor-pointer">
          Made with ❤️ By <span className='text-red-600 dark:text-green-600 '>Dipak</span>
        </h1>

        <div className="flex flex-row gap-3 sm:gap-5 flex-wrap justify-center items-center">
          <a
            href="https://x.com/Dipakdu59626304"
            className="hover:text-green-600 dark:hover:text-red-600  dark:hover:translate-0.5 flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX />
          </a>
          <a
            href="https://github.com/DIPAK-DUBEY"
            className="hover:text-green-600 dark:hover:text-red-600  dark:hover:translate-0.5 flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://monkeytype.com/account"
            className="hover:text-green-600 dark:hover:text-red-600  dark:hover:translate-0.5 flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer