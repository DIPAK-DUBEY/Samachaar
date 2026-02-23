import React, { useEffect } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useNavigate } from "react-router";
import useStore from "../../../Zusstand";
const Navbar = () => {
  const navigate = useNavigate();
  
  const handleToggle = () => {
    navigate('/');
  }
  useEffect(() => {
    

  }, [handleToggle]);
  return (


    <div className="max-w-[1300px] sticky  top-5  z-1000  mx-auto px-6 py-3 flex flex-row items-center justify-between rounded-[50px] bg-white/70 dark:bg-neutral-900/70 border border-white/60 dark:border-neutral-800 shadow-md dark:shadow-lg backdrop-blur-md">
      <h1 className="text-2xl cursor-pointer" onClick={handleToggle}>Samachaar</h1>
      <div className="flex flex-row gap-2 items-center mr-5">
        
        <AnimatedThemeToggler />
      </div>
    </div>

  )
}
export default Navbar;



