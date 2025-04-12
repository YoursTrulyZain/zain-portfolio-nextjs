"use client";

import { useTheme } from "@/context/ThemeContextProvider";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-black dark:bg-white text-white dark:text-black  w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem]  shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all "
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
