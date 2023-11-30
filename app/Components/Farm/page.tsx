import React from 'react';

const Farm = () => {

  return (
    <div>
      <div className="flex items-center bg-green-600 h-32 mt-28">
        <div className="flex-1 flex justify-center">
          <div className="flex items-center justify-center">
            <img src="/disc.png" alt="Massey Ferguson" className="max-w-md mb-20 h-auto ml-80" />
          </div>
        </div>
        <div className="flex-1 text-white">
        <h1 className="font-extrabold text-4xl">Massey Ferguson</h1>
  <p className="text-xl">Get up to 10% OFF</p>
  <button className="buy bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out">
    Buy Now
  </button>
</div>

        </div>
      </div>

  );
};

export default Farm;


