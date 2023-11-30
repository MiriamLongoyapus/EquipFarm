import Link from "next/link";
import React from "react";

const ProductsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="w-1/4 text-center">
        list all products here where clicking on each should take one to the
        details page where it can be rented
      </p>
      <Link href={"/products/1"} className="text-blue-500 underline">
        Go to a single product detals page
      </Link>
    </div>
  );
};

export default ProductsPage;
