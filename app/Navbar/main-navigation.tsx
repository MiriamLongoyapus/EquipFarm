"use client";
import { useCart } from "@/stores/cart-store";
import {
  faBell,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const MainNavigation = () => {
  const {totalProducts} = useCart()

  
  return (
    <div className="text-black md:px-[64px] pb-4 sticky top-0 bg-white/60 backdrop-blur-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <Link href={"/"} className="text-2xl font-bold text-black ">
              <img src="/Logo.png" className="w-12 h-42" alt="Logo" />
            </Link>
          </div>
        </div>
        <ul className="navbar-list md:flex justify-center mt-4">
          <li className="navbar-item">
            <Link
              href="/"
              className="text-black hover:text-gray-300 px-3 py-2 block"
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              href="/Category"
              className="text-black hover:text-gray-300 px-3 py-2 block"
            >
              Categories
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              href="/Catalog"
              className="text-black hover:text-gray-300 px-3 py-2 block"
            >
              Products
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              href="/Footer"
              className="text-black hover:text-gray-300 px-3 py-2 block"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-10">
          <Link href="/cart" className="relative">
            <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
         {totalProducts > 0 &&  <span className="absolute -top-2 -right-2 bg-green-600 text-white w-5 h-5 flex items-center justify-center rounded-full">{totalProducts}</span> }
          </Link>
          <FontAwesomeIcon icon={faBell} className="text-2xl" />
          <Link href="/signup">
            <FontAwesomeIcon icon={faUser} className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
