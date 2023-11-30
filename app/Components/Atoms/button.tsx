import React from "react";

interface ButtonProps {
  text: string;
  callbackFn: () => void;
  isActive: boolean;
}

const Button = ({ isActive, callbackFn, text }: ButtonProps) => {
  // className="buy bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out"
  return (
    <button
      // className={(
      //   isActive ? "bg-[#9CCF74] border-none" : "border border-black"
      // )}
      className={`${isActive ? "bg-[#9CCF74] border-none" : "border border-black" } px-6 py-2 rounded-full `}

      onClick={callbackFn}
    >
      {text}
    </button>
  );
};

export default Button;
