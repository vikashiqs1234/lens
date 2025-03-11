"use client";
import React, { useState } from "react";

const categoriesData = [
  {
    category: "Men",
    image: "https://static.lenskart.com/media/desktop/img/men_pic.png",
    priceCategory: [
      {
        name: "SCREEN GLASSES Starting From ₹500",
   
      },

    ],
  },
  {
    category: "Women",
    image: "https://static.lenskart.com/media/desktop/img/men_pic.png",
    priceCategory: [
      {
        name: "SCREEN GLASSES Starting From ₹500",
      }
    ],
  },
  {
    category: "Kids",
    image: "https://static.lenskart.com/media/desktop/img/men_pic.png",
    priceCategory: [
      {
        name: "SCREEN EYEGLASSES Starting From ₹500",
      
      },
      {
        name:'kids glasses starting from 500'
      }
    ],
  },
];

const ScreenGlasses = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [hoveredPriceCategory, setHoveredPriceCategory] = useState<any>(null);

  const handleCategoryHover = (index:number) => {
    setActiveCategoryIndex(index);
    setHoveredPriceCategory(null); // Reset Price Category when switching categories
  };

  const handlePriceCategoryHover = (priceCategory:any) => {
    setHoveredPriceCategory(priceCategory);
  };

  const getCurrentData = () => {
    const currentCategory =
      categoriesData[activeCategoryIndex] || categoriesData[0];
    return hoveredPriceCategory || currentCategory.priceCategory[0];
  };

  const currentData = getCurrentData();

  return (
    <div className="absolute z-[100] left-0 w-full  bg-white  pl-6 mx-auto py-4">
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
            (priceItem) => (
              <p
                key={priceItem.name}
                className={`py-2 px-3 rounded hover:bg-[#f3d7bc] cursor-pointer text-sm text-gray-700 ${
                  hoveredPriceCategory?.name === priceItem.name
                    ? "bg-[#f3d7bc]"
                    : ""
                }`}
                onMouseEnter={() => handlePriceCategoryHover(priceItem)}
              >
                {priceItem.name}
              </p>
            )
          )}
        </div>

       
  
      </div>
    </div>
  );
};

export default ScreenGlasses;
