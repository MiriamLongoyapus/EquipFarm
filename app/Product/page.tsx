'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '../Navbar/page'
import Farm from '../Components/Farm/page';
import CategorySection from '../Homepage/categorySection';

type CategoryType= "poultry" | "farm" | "dairy"

type ProductType = {
  rating: number;
  name: string;
  category:CategoryType;
  price: string;
  availability: string;
  imageSrc: string;
};

const products: ProductType[] = [
  {
    rating: 4,
    name: 'Water Trough',
    price: 'KES 2,400',
    category: 'poultry',
    availability: 'Available',
    imageSrc: '/drinker.jpeg',
  },
  {
    rating: 4,
    name: 'Ire vines',
    price: 'KES 1,800',
    category: 'poultry',
    availability: 'Not Available',
    imageSrc: '/poult4.jpeg',
  },
  {
    rating: 4,
    name: 'Water Trough',
    price: 'KES 2,400',
    category: 'poultry',
    availability: 'Available',
    imageSrc: '/drinker.jpeg',
  },
  {
    rating: 5,
    name: 'Incubator',
    price: 'KES 2,400',
    category: 'poultry',
    availability: 'Available',
    imageSrc: '/pout3.jpeg',
  },
  {
    rating: 4,
    name: 'Water Trough',
    price: 'KES 2,400',
    category: 'poultry',
    availability: 'Available',
    imageSrc: '/drinker.jpeg',
  },
  
  {
    rating: 4,
    name: 'Weeding Machine',
    price: 'KES 2,400',
    category: 'farm',
    availability: 'Available',
    imageSrc: '/weeder-pic.png',
  },
  {
    rating: 4,
    name: 'Motorized Power Sprayer',
    price: 'KES 2,400',
    category: 'farm',
    availability: 'Available',
    imageSrc: '/Power-Sprayer.jpg',
  },
  {
    rating: 4,
    name: 'Ire vines',
    price: 'KES 1,800',
    category: 'farm',
    availability: 'Not Available',
    imageSrc: '/poult4.jpeg',
  },
  {
    rating: 4,
    name: 'Water Trough',
    price: 'KES 2,400',
    category: 'farm',
    availability: 'Available',
    imageSrc: '/drinker.jpeg',
  },
  {
    rating: 5,
    name: 'Incubator',
    price: 'KES 2,400',
    category: 'farm',
    availability: 'Available',
    imageSrc: '/pout3.jpeg',
  },
  // {
  //   rating: 5,
  //   name: 'Incubator',
  //   price: 'KES 2,400',
  //   category: 'dairy',
  //   availability: 'Available',
  //   imageSrc: '/pout3.jpeg',
  // },
  {
    rating: 4,
    name: 'Cheese Aging Rack',
    price: 'KES 2,400',
    category: 'dairy',
    availability: 'Available',
    imageSrc: '/Images/Dairy5.png',
  },
  {
    rating: 4,
    name: 'Dairy Homogenizer',
    price: 'KES 6050',
    category: 'dairy',
    availability: 'Not Available',
    imageSrc: '/Images/Dairy20.png',
  },
  {
    rating: 4,
    name: 'Dairy Pasteurizer',
    price: 'KES 5000',
    category: 'dairy',
    availability: 'Available',
    imageSrc: '/Images/Dairy3.png',
  },

  {
    rating: 5,
    name: 'Milking Machine ',
    price: 'KES 6000',
    category: 'dairy',
    availability: 'Available',
    imageSrc: '/Images/Dairy2.png',
  },
  
];

const Product = ({ product }: { product: ProductType }) => (
  <div className="bg-white rounded-lg overflow-hidden p-4 max-w-xs shadow-md hover:shadow-lg border border-gray-700 mb-4 mx-2 flex flex-col">
    <div className="mb-2">
      <img src={product.imageSrc} alt="Product" className="w-full" />
    </div>
    <div className="text-yellow-400 ml-20">
      {Array.from({ length: product.rating }, (_, index) => (
        <span key={index}>&#9733;</span>
      ))}
    </div>
    <div className="text-center">
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.price}</p>
      <p
        className={`text-${product.availability === 'Available' ? 'green' : 'red'}-500 font-semibold`}
      >
        {product.availability}
      </p>
      <div className="flex items-center justify-center mt-2">
        <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-full ml-2 hover:bg-green-600 transition duration-300">
          <Link href="/Catalog">
            View More
          </Link>
        </button>
      </div>
    </div>
  </div>
);

const ProductList = () => {
  const [filteredData, setFilteredData]=useState<ProductType[]>(products)
  const [activeCategory, setActiveCategory]=useState<CategoryType>("poultry")

  useEffect(()=>{
    const filteredByCategory:  ProductType[]= products?.filter((item: ProductType) =>
      item.category.toLowerCase()===activeCategory
    );
    setFilteredData(filteredByCategory);
  }, [activeCategory])

  const handleSearch = (query: string) => {
    const filteredResults:  ProductType[]= products?.filter((item: ProductType) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredResults);
  };
  return(

  <div>
    <Header onSearch={handleSearch}/>
    <Link href={"/dashboard"} className='underline underline-offset-4 text-blue-500'>
      Sell here
      </Link>
      <Farm/>
      <CategorySection 
      activeCategory={activeCategory} setActiveCategory={setActiveCategory}
      />
  <div className="flex flex-wrap mx-10 my-2 gap-10 ">
    {filteredData.map((product, index) => (
      <Product key={index} product={product} />
    ))}
  </div>
  </div>
)};

export default ProductList;
