"use client";
import { useState } from "react";

const Navbar = ({ onSearch }: any) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleInputChange = (e: any) => {
    const newValue = e.target.value;
    setSearchQuery(newValue);
    onSearch(newValue);
  };

  return (
    <div className="text-black">
      <div className="mb-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
            className="border-2 border-green-900 px-4 py-4 w-full"
            style={{ borderRadius: "50px" }}
          />
          {/* <button
            type="submit"
            className="absolute right-3 top-2 text-gray-400"
          ></button> */}
      </div>
    </div>
  );
};

export default Navbar;
