"use client"
import React, { useState } from "react";
import Link from "next/link";

const Payment = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/images/green.webp)' }}>
      {/* Your component content */}
      </div>

      <div className="w-1/2 bg-white sm:w-1/2 sm:p-24  mt-[-48%] ml-[25%]">
      <div className="title text-3xl font-bold text-[#0f0f0f] text-center">
      Payment</div>
      <div className="mb-4 sm:mb-5 w-/3">
                <label className="text-sm text-black font-black text-custom-color" htmlFor="email">
                  Phone Number
                </label>
                <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">
                  <input
                    id="Phone Number"
                    type="Phone Number"
                    placeholder="Enter Phone Number"
                    className="text-sm text-black w-full  bg-white/70  px-2 py-4 mb-1  focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-4 sm:mb-5 w-/3">
                <label className="text-sm text-black font-black text-custom-color" htmlFor="email">
                  Account Number
                </label>
                <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">

                  <input
                    id="Account Number"
                    type="Account Number"
                    placeholder="Enter Account Number"
                    className="text-sm text-black w-full  bg-white/70  px-2 py-4 mb-1  focus:outline-none"
                  />
                </div>
              </div>
              <div className="mb-4 sm:mb-5 w-/3">
                <label className="text-sm text-black font-black text-custom-color" htmlFor="email">
                  Amount
                </label>
                <div className="relative text-black flex item-center border-solid border-2 border-black  justify-center">
                  <input
                    id="Amount"
                    type="Amount"
                    placeholder="Enter Amount"
                    className="text-sm text-black w-full  bg-white/70  px-2 py-4 mb-1  focus:outline-none"
                  />
                </div>
              </div>

      <div className="justify-center mt-20 ">
      <button className="bg-[#287100] text-white ml-32 sm:w-1/2 text-xl py-2 px-05 "
      >
        <Link href="/">
               <span className=" text-black font-bold ml-5 text-white">Confirm Payment</span>
         </Link>
               
              </button>

    </div>
    </div>
    
    </div>
  
    
  );
};

export default Payment;