"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  HiArrowNarrowLeft,
  HiUser,
  HiBell,
  HiShoppingCart,
} from "react-icons/hi";

const Navbar = () => {
  const path = usePathname();

  const isHome = path === "/";

  return (
    <nav className="flex justify-between w-full px-[24px] md:px-[64px] py-4">
      <div>
        {isHome ? "Logo here" : <HiArrowNarrowLeft className="navicon" />}
      </div>
      <div className="flex gap-x-4 md:gap-x-8">
        <HiUser className="navicon" />
        <HiBell className="navicon" />
        <HiShoppingCart className="navicon" />
      </div>
    </nav>
  );
};

export default Navbar;
