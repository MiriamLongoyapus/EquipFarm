'use client'
import React, { useState } from 'react';
import { FaHome, FaShoppingCart, FaUser, FaBook, FaList, FaMapMarkerAlt, FaSquare } from 'react-icons/fa';
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import Link from "next/link"

const Sidebar = () => {
  const pageCurrent= usePathname()
  console.log("params page",pageCurrent)
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');
  const handleMenuItemClick = (menuItem: React.SetStateAction<string>) => {
    setActiveMenuItem(menuItem);
  };
  const isMenuItemActive = (menuItem: string) => {
    return activeMenuItem === menuItem ? 'text-yellow-500' : '';
  };
  return (
    <div className="sidebar bg-green-600  w-48 overflow-hidden fixed h-[100dvh] " >
      <div className="logo ml-10 mb-20">
        <Image src="/images/Logo.png" alt="Logo" width={100} height={100} />
      </div>
      <nav className="text-white h-xl flex items-center ml-0 md:ml-0">
        <ul className="sidebar-menu block">
          <li className="mb-10 ml-10">
            <Link href="/dashboard/Graph" className={`flex items-center ${isMenuItemActive('dashboard')}`} onClick={() => handleMenuItemClick('dashboard')}>
              <FaSquare className={`mr-5 ${isMenuItemActive('dashboard')}`} />
              Dashboard
            </Link>
          </li>
          <li className="mb-10 ml-10">
            <Link href="/dashboard/Order" className={`flex items-center ${isMenuItemActive('orders')}`} onClick={() => handleMenuItemClick('orders')}>
              <FaShoppingCart className={`mr-5 ${isMenuItemActive('orders')}`} />
              Orders
            </Link>
          </li>
          {/* <li className="mb-10 ml-10">
            <a href="/account" className={`flex items-center ${isMenuItemActive('account')}`} onClick={() => handleMenuItemClick('account')}>
              <FaUser className={`mr-5 ${isMenuItemActive('account')}`} />
              Account
            </a>
          </li> */}
          <li className="mb-10 ml-10">
            <Link href="/dashboard/Catalog" className={`flex items-center ${isMenuItemActive('catalog')}`} onClick={() => handleMenuItemClick('catalog')}>
              <FaList className={`mr-5 ${isMenuItemActive('catalog')}`} />
              Catalog
            </Link>
          </li>
          <li className="mb-10 ml-10">
            <Link href="/dashboard/Bookings" className={`flex items-center ${isMenuItemActive('booking')}`} onClick={() => handleMenuItemClick('booking')}>
              <FaBook className={`mr-5 ${isMenuItemActive('booking')}`} />
              Booking
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;









