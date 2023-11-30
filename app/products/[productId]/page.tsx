// import RentProductPage from '@/Components/RentProductPage'; 
import RentProduct from "@/app/Components/rentProduct";
import React from "react";
type Tparams={
  productId:string
}
const ProductDetailsPage = ({params}:{params:{productId:string}}) => {
  const { productId}=params
  console.log("params",params,productId)
  return <RentProduct id={productId} />;
};

export default ProductDetailsPage;
