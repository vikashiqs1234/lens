"use client";
import Link from "next/link";
import React, { useState } from "react";

const categoriesData = [
  {
    category: "Men",
    image: "https://static.lenskart.com/media/desktop/img/men_pic.png",
    priceCategory: [
      {
        name: "CLASSIC EYEGLASSES Starting From ₹2000",
        price:2000,
        frameShapes: ["Rectangle Frames", "Wayfarer Frames","Pentagonal"],
        collections: ["Switch Grip", "Urban Edit"],
        brands: ["Vincent Chase", "Lenskart Air"],
      },
      {
        name: "PREMIUM EYEGLASSES Starting From ₹3500",
        price:3500,
        frameShapes: ["Round Frames"],
        collections: ["Gulmarg Collection"],
        brands: ["OUOS"],
      },
      {
        name: "SCREEN EYEGLASSES Starting From ₹500",
        price:500,
        frameShapes: ["Rectangle Frames"],
        collections: ["Switch Grip"],
        brands: ["Vincent Chase"],
      },
    ],
  },
  {
    category: "Women",
    image: "https://static.lenskart.com/media/desktop/img/men_pic.png",
    priceCategory: [
      {
        name: "CLASSIC EYEGLASSES Starting From ₹2000",
        price:2000,
        frameShapes: ["Aviator Frames"],
        collections: ["Blend Edit"],
        brands: ["Lenskart Air"],
      },
      {
        name: "PREMIUM EYEGLASSES Starting From ₹3500",
        price:3500,
        frameShapes: ["Cat-Eye Frames"],
        collections: ["Sleek Steel"],
        brands: ["Vincent Chase"],
      },
    ],
  },
  {
    category: "Kids",
    image: "https://static.lenskart.com/media/desktop/img/men_pic.png",
    priceCategory: [
      {
        name: "SCREEN EYEGLASSES Starting From ₹500",
        price:500,
        frameShapes: ["Halfrim Frames", "Geometric Frames"],
        collections: ["Air Flex", "Electro Punk"],
        brands: ["Vincent Chase", "Lenskart Air"],
      },
    ],
  },
];

const EyeglassesCategory = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activePriceCategoryIndex, setActivePriceCategoryIndex] = useState(0);
  const [hoveredPriceCategory, setHoveredPriceCategory] = useState<any>(null);

  const handleCategoryHover = (index:number) => {
    setActiveCategoryIndex(index);
    setHoveredPriceCategory(null); // Reset Price Category when switching categories
  };

  const handlePriceCategoryHover = (priceCategory:any,index:number) => {
    setHoveredPriceCategory(priceCategory);
    setActivePriceCategoryIndex(index)
  };

  const getCurrentData = () => {
    const currentCategory =
      categoriesData[activeCategoryIndex] || categoriesData[0];
    return hoveredPriceCategory || currentCategory.priceCategory[0];
  };

  const currentData = getCurrentData();

  return (
    <div className=" absolute z-[100] left-0 w-full  bg-white  pl-6 py-4">
      <div className="grid grid-cols-5 gap-4">
        {/* Select Category */}
        <div className="col-span-1">
          <h3 className="font-semibold text-gray-700 mb-2">SELECT CATEGORY</h3>
          {categoriesData.map((categoryItem, index) => (
            <div
              key={categoryItem.category}
              className={`flex items-center gap-4 py-2 px-3 rounded ${
                activeCategoryIndex === index ? "bg-[#f3d7bc]" : ""
              } cursor-pointer`}
              onMouseEnter={() => handleCategoryHover(index)}
            >
              <img
                src={categoryItem.image}
                alt={categoryItem.category}
                className="w-12 h-12 rounded-full mr-2"
              />
              <div>
                <h4 className="text-sm font-medium text-gray-800">
                  {categoryItem.category}
                </h4>
              </div>
              <span className="ml-auto text-gray-500">&gt;</span>
            </div>
          ))}
        </div>

        {/* Price Category */}
        <div className="col-span-1">
          <h3 className="font-semibold text-gray-700 mb-2">PRICE CATEGORY</h3>
          {categoriesData[activeCategoryIndex]?.priceCategory.map(
            (priceItem,index) => (
              <p
                key={priceItem.name}
                className={`py-2 px-3 rounded hover:bg-[#f3d7bc] cursor-pointer text-sm text-gray-700 ${
                  activePriceCategoryIndex === index
                    ? "bg-[#f3d7bc]"
                    : ""
                }`}
                onMouseEnter={() => {handlePriceCategoryHover(priceItem,index);}}
              >
                {priceItem.name}
              </p>
            )
          )}
        </div>

        {/* Frame Type */}
        <div className="col-span-1">
          <h3 className="font-semibold text-gray-700 mb-2">FRAME SHAPE</h3>
          {currentData.frameShapes.map((frame:any) => (
            <p
              key={frame}
              className="py-2  mt-1 rounded hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
            >
             <Link href={`/products?category=${categoriesData[activeCategoryIndex].category}&priceCategory=${categoriesData[activeCategoryIndex].priceCategory[activePriceCategoryIndex].price}&frameShape=${frame}`}> {frame}</Link>
            </p>
          ))}
        </div>

        {/* Collection */}
        <div className="col-span-1">
          <h3 className="font-semibold text-gray-700 mb-2">COLLECTION</h3>
          {currentData.collections.map((collection:any) => (
            <p
              key={collection}
              className="py-2 rounded hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
            >
              {collection}
            </p>
          ))}
        </div>

        {/* Brands */}
        <div className="col-span-1">
          <h3 className="font-semibold text-gray-700 mb-2">BRANDS</h3>
          {currentData.brands.map((brand:any) => (
            <p
              key={brand}
              className="py-2 rounded hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
            >
              {brand}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EyeglassesCategory;
