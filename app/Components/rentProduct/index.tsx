"use client"
import React from "react";
import Link from "next/link";

import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "pure-react-carousel/dist/react-carousel.es.css";
import { HiShoppingCart } from "react-icons/hi";
import Button from "../Atoms/button";
import Home from "../../Data/data";
import { useCart } from "@/stores/cart-store";

const hirePurchaseCheckboxOptions = ["monthly", "quartely", "annually", "semi"];
const rentCheckboxOptions = ["One Day", "Weekly"];
type OptionType = "monthly" | "quartely" | "annually" | "semi";

const RentProduct = ({id}:{id:string}) => {
  const {addToCart, products} = useCart()
  const selectedProduct = Home.find((product) => product.id === Number(id));

  const [activeButton, setActiveButton] = React.useState<
    "Buy" | "Rent" | "Hire Purchase"
  >("Buy");

  const [checkedOption, setCheckedOption] =
    React.useState<OptionType>("monthly");
  const [rentOption, setRentOption] = React.useState("One Day");
  const [isInCart, setIsInCart] = React.useState(false) 
  React.useEffect(() => {
    if(selectedProduct){
      const product = products.find((item) => item.id === selectedProduct.id)
      if(product){
        setIsInCart(true)
      }
    }

  },[selectedProduct, products])


  const data = {
    monthly: {
      amount: 40000,
      interest: 1000,
    },
    quartely: {
      amount: 10000,
      interest: 3000,
    },
    annually: {
      amount: 2500,
      interest: 7000,
    },
    semi: {
      amount: 600,
      interest: 2000,
    },
  };

  return (
    <div className="grid lg:grid-cols-10 gap-4 min-h-[90vh] md:gap-x-8 ">
      <div className="md:col-span-4 ">
      <div className="flex flex-col justify-between h-full">
      <div className="w-full flex flex-col items-center justify-end min-h-[500px]">
        <div className="">
          <img
            src={selectedProduct?.image}
            alt={selectedProduct?.name}
            className="w-96 h-96"
          />
        </div>
      </div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={5}
        visibleSlides={3}
      >
        <div className="relative">
          <ButtonBack className="absolute left-0 z-40 h-full flex justify-center items-center">
            <BsChevronLeft className="h-10 w-10" />
          </ButtonBack>
          <ButtonNext className="absolute right-0 z-40 h-full flex justify-center items-center ">
            <BsChevronRight className="h-10 w-10" />
          </ButtonNext>
          <Slider className="h-[250px] px-8">
            <Slide index={0}>
              <div className="m-4 border-2 rounded-[24px] flex justify-center items-center p-2 h-[80%]">
                <img src="/images/image11.jpeg" alt="aminata" />
              </div>
            </Slide>
            <Slide index={1}>
              <div className="m-4 border-2 rounded-[24px] flex justify-center items-center p-2 h-[80%]">
                <img src="/images/disc-plough.png" alt="aminata" />
              </div>
            </Slide>
            <Slide index={2}>
              <div className="m-4 border-2 rounded-[24px] flex justify-center items-center p-2 h-[80%]">
                <img src="/images/hand tractor.png" alt="aminata" />
              </div>
            </Slide>
            <Slide index={3}>
              <div className="m-4 border-2 rounded-[24px] flex justify-center items-center p-8 h-[80%]">
                <img src="/images/mowers.png" alt="aminata" />
              </div>
            </Slide>
            <Slide index={4}>
              <div className="m-4 border-2 rounded-[24px] flex justify-center items-center p-2 h-[80%]">
                <img src="/images/rotary-tillers.png" alt="aminata" />
              </div>
            </Slide>
          </Slider>
        </div>
      </CarouselProvider>
    </div>
      </div>
      <div className="md:col-span-6">
        <div className="md:pt-[128px]">
      <h4 className="font-semibold text-[32px] md:text-[48px]">{selectedProduct?.name}</h4>
      <p className="md:text-[32px]">{selectedProduct?.availability}</p>

      <div className="flex gap-4 py-8 flex-col md:flex-row">
        <Button
          text="Buy"
          isActive={activeButton === "Buy"}
          callbackFn={() => setActiveButton("Buy")}
        />
        <Button
          text="Rent"
          isActive={activeButton === "Rent"}
          callbackFn={() => setActiveButton("Rent")}
        />
        <Button
          text="Hire purchase"
          isActive={activeButton === "Hire Purchase"}
          callbackFn={() => setActiveButton("Hire Purchase")}
        />
      </div>

      {activeButton === "Buy" ? (
        <div className="md:w-1/2 py-8">
          <p className="text-[16px] md:text-[32px]">Ksh {selectedProduct?.price}</p>
        </div>
      ) : activeButton === "Rent" ? (
        <form>
        <div className="flex gap-x-6 lg:gap-x-10">
          {rentCheckboxOptions.map((option) => (
            <div className="flex items-center gap-x-2" key={option}>
              <input
                type="checkbox"
                name={option.toLowerCase()}
                value={option}
                id={rentOption.toLowerCase()}
                checked={rentOption === option}
                className="h-6 w-6"
                onChange={(e) => setRentOption(e.target.value)}
              />
              <label htmlFor="monthly" className="lg:text-[24px]">
                {option}
              </label>
            </div>
          ))}
        </div>

        <div className="md:w-1/2 py-8">
          <div className="text-[16px] md:text-[32px] flex justify-start">
            <p className="flex-1">Amount</p>
            <p className="flex-1">Ksh. {rentOption === "One Day" ?  "600" : "1000"}</p>
          </div>
        </div>
      </form>


      ) : (
        <form>
          <div className="flex gap-6 flex-wrap">
            {hirePurchaseCheckboxOptions.map((option) => (
              <div
                className="max-md:flex-1 flex items-center gap-x-2"
                key={option}
              >
                <input
                  type="checkbox"
                  name={option.toLowerCase()}
                  value={option}
                  id={option.toLowerCase()}
                  checked={checkedOption === option}
                  className="h-6 w-6"
                  onChange={(e) =>
                    setCheckedOption(e.target.value as OptionType)
                  }
                />
                <label htmlFor="monthly" className="lg:text-[24px]">
                  {option}
                </label>
              </div>
            ))}
          </div>

          <div className="md:w-1/2 py-8 space-y-4">
            <div className="text-[16px] md:text-[32px] flex justify-start">
              <p className="flex-1">Amount</p>
              <p className="flex-1">Ksh. {data[checkedOption]["amount"]}</p>
            </div>
            <div className="text-[16px] md:text-[32px] flex justify-start">
              <p className="flex-1">Interest</p>
              <p className="flex-1">Ksh. {data[checkedOption]["interest"]}</p>
            </div>
            <div className="text-[16px] md:text-[32px] flex justify-start">
              <p className="flex-1">Total</p>
              <p className="flex-1">
                Ksh.{" "}
                {data[checkedOption]["amount"] +
                  data[checkedOption]["interest"]}
              </p>
            </div>
          </div>
        </form>
      )}

      <button className="text-[16px] md:text-[24px] lg:text-[32px] flex items-center gap-x-2 bg-black hover:bg-black/80 disabled:bg-black/60 disabled:cursor-not-allowed transition-all mt-5 md:mt-10 text-white rounded-full px-8 lg:px-10 py-2 lg:py-3"
      onClick={() => selectedProduct && addToCart({...selectedProduct, quantity: 1})}
      disabled = {isInCart}
      >
        <HiShoppingCart color="#9CCF74" />
        Add to cart
       
      </button>
    </div>
      </div>
    </div>
  );
};

export default RentProduct;
