'use client'
import React, { useState } from 'react';
import { FaPlus, FaMinus, FaEdit, FaSearch } from 'react-icons/fa';
// import Sidebar from '../Sidebar/page';
const ProductList = () => {
  const initialProducts = [
    {
      id: 1,
      name: 'Chaff cutter',
      price: 100,
      image: '/Images/Dairy7.png',
      quantity: 0,
      description: 'it is used in makjing work easyer',
    },
    {
      id: 2,
      name: 'Chaff cutter',
      price: 150,
      image: '/Images/Dairy11.png',
      quantity: 0,
      description: 'it is used in makjing work easyer',
    },
    {
      id: 3,
      name: 'Chaff cutter',
      price: 150,
      image: '/Images/Poult9.png',
      quantity: 0,
      description: 'it is used in makjing work easyer',
    },
    {
      id: 4,
      name: 'Chaff cutters',
      price: 150,
      image: '/Images/Dairy6.png',
      quantity: 0,
      description: 'it is used in makjing work easyer',
    },
    {
      id: 1,
      name: 'Chaff cutterer',
      price: 100,
      image: '/Images/poult12.png',
      quantity: 0,
      description: 'it is used in makjing work easyer',
    },
    {
      id: 1,
      name: 'Chaff cutter',
      price: 100,
      image: '/Images/Farm7.png',
      quantity: 0,
      description: 'it is used in makjing work easyer',
    },
    {
      id: 1,
      name: 'Chaff cutter',
      price: 100,
      image: '/Images/Farm12.png',
      quantity: 0,
      description: 'it is used in makjing work easyer',
    },
    {
      id: 1,
      name: 'Chaff cutter',
      price: 100,
      image: '/Images/Poult13.png',
      quantity: 0,
      description: 'it is used in makjing work easyer',
    },
  ];
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const handleAdd = (productId: number) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
    );
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };
  const handleRemove = (productId: number) => {
    const updatedProducts = products.map((product) =>
      product.id === productId && product.quantity > 0 ? { ...product, quantity: product.quantity - 1 } : product
    );
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value.toLowerCase();
    const filtered = products.filter((product) => product.name.toLowerCase().includes(searchText));
    setFilteredProducts(filtered);
  };
  const handleEdit = (id: number) => {
    console.log('Edit button clicked for product with ID:', id);
  };
  return (
    <div className="container mx-auto p-4 ml-52">
      <h1 className="text-2xl font-semibold mb-4 text-center">Add Product</h1>
      <div className="w-full flex justify-center mb-4">
        <div className="relative w-3/4 md:w-1/2">
          <input
            type="search"
            placeholder="Search..."
            className="border border-gray-500 rounded-full p-2 text-black pl-10 pr-6 w-full"
            onChange={handleSearch}
          />
          <FaSearch className="w-6 text-gray-900 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-4 flex flex-col">
            <img src={product.image} alt={product.name} className="w-full h-auto mb-4" />
            <div className="flex justify-between items-center mb-2">
              <p className="text-xl font-semibold text-gray-900">{product.name}</p>
              <div className="flex items-center">
                <button
                  className="bg-yellow-500 rounded-full w-8 h-8 mr-2"
                  onClick={() => handleRemove(product.id)}
                >
                  <FaMinus />
                </button>
                <p className="mr-2">{product.quantity}</p>
                <button className="bg-yellow-500 rounded-full w-8 h-8" onClick={() => handleAdd(product.id)}>
                  <FaPlus />
                </button>
              </div>
            </div>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-xl mt-2 text-gray-900">Ksh 60000{product.price.toFixed(2)}</p>
            <div className="flex justify-between mt-4">
            <button className="bg-blue-500 text-white p-2 rounded-full" onClick={() => handleEdit(product.id)}>
                <FaEdit />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;











