"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove, faTractor, faCow } from "@fortawesome/free-solid-svg-icons";

type CategoryType= "poultry" | "farm" | "dairy"

interface Props {
  activeCategory: CategoryType;
  setActiveCategory: (name:CategoryType) => void;
}

interface Category {
  icon: any;
  name: CategoryType;
}

const categories: Category[] = [
  {
    icon: faDove,
    name: "poultry",
  },
  {
    icon: faTractor,
    name: "farm",
  },
  {
    icon: faCow,
    name: "dairy",
  },
];

const CategorySection = ({activeCategory, setActiveCategory}:Props) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="flex space-x-4">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`${
              activeCategory === category.name
                ? "bg-yellow-500 text-white"
                : "text-gray-700"
            } p-2 rounded capitalize`}
            onClick={() => setActiveCategory(category.name)}
          >
            <FontAwesomeIcon icon={category.icon} className="mr-2" />{" "}
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
