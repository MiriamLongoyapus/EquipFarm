"use client"
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faUser, faPhone } from "@fortawesome/free-solid-svg-icons"; // Import more icons if needed
import Link from "next/link";
import Sidebar from "../Sidebar/page";
const Loginpage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
      <div className="flex flex-col sm:flex-row h-screen font-poppins text-xl p-12">
        <div className=" sm:w-1/2 flex justify-center py-4 sm:p-0"style={{ backgroundImage: 'url(/images/green.webp)' }} >
          <div className="-ml-28 w-20 h-18 mt-28">
            <img src="/images/Logo.png" alt="Logo" />
          </div>
          <div>
          <p className="-ml-20 mt-72 text-4xl  font-['Poppins'] font-semibold text-[#E1C903] mb-9">Welcome Back
            </p>
            <p className="-ml-20 text-40">
              Growing Tomorrow, One<br></br>
              Click at a time</p>
          </div>
        </div>
        <div className="w-full bg-white flex flex-col p-16 sm:w-1/2 sm:p-20 mt-[-1.%]">
          <div className="justify-center mt-2">
            <div className="title text-3xl font-bold text-[#287100]">Login</div>
            <form className="flex mt-10 flex-col sm:w-full h-auto justify-center ">
              <div className="mb-4 sm:mb-5 w-/3">
                <label className="text-sm text-black font-black text-custom-color" htmlFor="email">
                  USER NAME
                </label>
                <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">
                  <FontAwesomeIcon icon={faUser} className="mr-2  px-2 py-4" />
                  <input
                    id="UserName"
                    type="UserName"
                    placeholder="Enter UserName"
                    className="text-sm text-black w-full  bg-white/70  px-2 py-4 mb-1  focus:outline-none"
                  />
                </div>
              </div>
              <div className="mb-4 sm:mb-5 w-/3">
                <label className="text-sm text-black font-black text-custom-color" htmlFor="password">
                  PHONE NUMBER
                </label>
                <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">
                  <FontAwesomeIcon icon={faPhone} className="mr-2  px-2 py-4" />
                  <input
                    id="password"
                    placeholder="Enter Phone number"
                    className="text-sm text-black w-full  bg-white/70  px-2 py-4 mb-1  focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center mb-4 sm:mb-5">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm text-black font-black text-custom-color">
                  Remember me
                </label>
                <div className="ml-auto">
                  <a href="#" className="text-sm text-[#287100] ">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button className="bg-[#287100] text-white  sm:w-1/2 text-xl py-2 px-05">
                Login
              </button>
              <div className="flex items-center mt-4">
                <div className="text-sm text-[#4B4B4B]">
                  Don't have an account?
                  <Link href="/Graph">
            <span className=" text-black font-bold ml-5">Register</span>
             </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};
<Sidebar/>
export default Loginpage;