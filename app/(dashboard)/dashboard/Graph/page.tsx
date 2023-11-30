"use client";
import React, { useState } from "react";
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,PieChart,Pie,Cell,} from "recharts";
// import Sidebar from "../Sidebar/page";
const Graph = () => {
  const dailyEquipmentData = [
    { name: "Farm", Equipment: 60, fill: "#42691D" },
    { name: "Poultry", Equipment: 50, fill: "#D8B80E" },
    { name: "Dairy", Equipment: 45, fill: "#88641D" },
  ];
  const weeklyData = [
    { name: "Farm", value: 20, fill: "#42691D" },
    { name: "Poultry", value: 50, fill: "#D8B80E" },
    { name: "Dairy", value: 30, fill: "#88641D" },
  ];
  const barColors = ["#082E58", "#38D0F5"];
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeButton, setActiveButton] = useState<"monthly" | "weekly">(
    "monthly"
  );
  const handleButtonClick = (buttonType: "monthly" | "weekly") => {
    setActiveButton(buttonType);
  };
  const filteredEquipmentData = dailyEquipmentData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredCategoryData = weeklyData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className=" ml-52  ">
       <div className="flex space-x-6 ml-80 mt-20">
    <div className="text-center bg-white-200 rounded-lg shadow-md p-4">
      <div className="text-sm font-bold text-gray-600">Total Orders</div>
      <div className="text-lg font-bold text-green-500">1000</div>
    </div>
    <div className="text-center bg-white-200 rounded-lg shadow-md p-4">
      <div className="text-sm font-bold text-gray-600">Total Sales</div>
      <div className="text-lg font-bold text-yellow-500">$10,000</div>
    </div>
    <div className="text-center bg-white-200 rounded-lg shadow-md p-4">
      <div className="text-sm font-bold text-gray-600">Number of Visitors</div>
      <div className="text-lg font-bold text-blue-500">5000</div>
    </div>
  </div>
    <div className="container mx-auto  sm:[480px] md:[760px] lg:[976] xl:[144] ml-50 mb-10">
      <div className="ml-[100px]  mt-10 flex items-left ">
        <div className="bg-white-200 p-4 font-semibold rounded-lg shadow-lg mr-40">
          <h2 className="text-xl font-bold mb-2 ml-10">Equipment</h2>
          <BarChart width={400} height={400} ml-38 data={dailyEquipmentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Equipment">
              {dailyEquipmentData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fill}
                />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="bg-white-200  font-semibold rounded-lg shadow-lg mt-20 ">
          <h2 className="text-xl font-bold mb-2">Products</h2>
          <PieChart width={400} height={330}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={weeklyData}
              cx="60%"
              cy="50%"
              outerRadius={150}
              label
            >
              {weeklyData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fill}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
    {/* <Sidebar/> */}
    </div>
  );
};
export default Graph;
















