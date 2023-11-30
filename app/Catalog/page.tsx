"use client";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import Products from "../Data/data";
import Navbar from "../Navbar/page";
import { useState } from "react";

const HomePage = () => {
  const [filteredData, setFilteredData] = useState<any>();

  const handleSearch = (query: string) => {
    const filteredResults: any = Products?.filter((item: any) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  useEffect(() => {
    setFilteredData(Products);
  }, []);

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div
        className="container mt-20 max-w-8xl mx-auto"
        style={{ paddingTop: "5%" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          {filteredData?.map((item: any, index: number) => (
            <div
              className="bg-white rounded-lg shadow-md border border-black w-full"
              key={index}
            >
              <div className="text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 object-cover rounded-t-lg mx-auto sm:h-36 md:h-24 lg:h-32 xl:h-40"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-center">
                  <div className="flex text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>&#9733;</span>

                    ))}
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-center">
                  {item.name}
                </h2>
                <div className="mt-2 text-lg font-semibold text-center">
                  {item.price} KES
                </div>
                <div className="mt-4 flex justify-center">
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-green-500">
                    <Link href={`/products/${item.id}`}>view more</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;

// 'use client'

// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { IconProp } from "@fortawesome/fontawesome-svg-core";
// import Link from "next/link";

// import Navbar from "../Navbar/page";

// const HomePage = () => {
//   const [filteredData, setFilteredData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const handleSearch = (query) => {
//     // Your search logic here
//   };

//   useEffect(() => {
//     // Fetch data from the backend API
//     fetch("https://aminata.connvotech.com/api/catalogue/")
//       .then((response) => response.json())
//       .then((data) => {
//         setFilteredData(data); // Assuming your data structure matches the Products data
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data from the backend API:", error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <>
//       <Navbar onSearch={handleSearch} />
//       <div
//         className="container mt-20 max-w-8xl ml-4 md:ml-10"
//         style={{ paddingTop: "5%" }}
//       >
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
//             {filteredData.map((item, index) => (
//               <div
//                 className="bg-white rounded-lg shadow-md border border-black w-full"
//                 key={index}
//               >
//                 {/* Your item display code */}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default HomePage;
