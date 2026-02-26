import React, { useEffect } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useNavigate } from "react-router";
import { Turn as Hamburger } from 'hamburger-react'
import Choices from "./Choices";
import useStore from "../../../Zusstand";
const Navbar = () => {
  const Menu = useStore((store) => store.Menu);
  const setMenu = useStore((store) => store.setMenu);

  const navigate = useNavigate();

  const handleToggle = () => {
    navigate('/');
  }
  useEffect(() => {

    window.scrollTo(0, 0);
  }, [handleToggle, Menu]);
  return (


    <div className="max-w-[1300px] sticky  top-5  z-1000  mx-auto px-6 py-3 flex flex-row items-center justify-between rounded-[50px] bg-white/70 dark:bg-neutral-900/70 border border-white/60 dark:border-neutral-800 shadow-md dark:shadow-lg backdrop-blur-md max-[500px]:py-1  max-[500px]:pr-[0px] max-[500px]:pl-[13px]">
      <h1 className="text-2xl max-[500px]:text-[20px] cursor-pointer" onClick={handleToggle}>Samachaar</h1>
      <div className="flex flex-row gap-2 items-center mr-5 justify-end">
        <AnimatedThemeToggler />
        <div className="hidden max-[600px]:flex">


          <Hamburger toggled={Menu} toggle={setMenu} size={20} />

          {Menu && (
            <div
              className="
          flex flex-col absolute gap-4 top-20 right-10 p-6
          bg-white/95 dark:bg-neutral-900/85
          border border-gray-200 dark:border-neutral-700
          shadow-lg rounded-xl
          transition-all duration-500 ease-in-out max-w-[200px]
          "
              onClick={() => setMenu(false)}
            >
              <Choices />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Navbar;



