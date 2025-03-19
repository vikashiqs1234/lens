"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const categoriesData = [
  {
    category: "Men",
    image: "https://static.lenskart.com/media/desktop/img/men_pic.png",
    priceCategory: [
      {
        name: "CLASSIC EYEGLASSES Starting From ₹2000",
        price: 2000,
        frameShapes: ["Rectangle Frames", "Wayfarer Frames", "Pentagonal"],
        collections: ["Switch Grip", "Urban Edit"],
        brands: ["Vincent Chase", "Lenskart Air"],
      },
      {
        name: "PREMIUM EYEGLASSES Starting From ₹3500",
        price: 3500,
        frameShapes: ["Round Frames"],
        collections: ["Gulmarg Collection"],
        brands: ["OUOS"],
      },
      {
        name: "SCREEN EYEGLASSES Starting From ₹500",
        price: 500,
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
        price: 2000,
        frameShapes: ["Aviator Frames"],
        collections: ["Blend Edit"],
        brands: ["Lenskart Air"],
      },
      {
        name: "PREMIUM EYEGLASSES Starting From ₹3500",
        price: 3500,
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
        price: 500,
        frameShapes: ["Halfrim Frames", "Geometric Frames"],
        collections: ["Air Flex", "Electro Punk"],
        brands: ["Vincent Chase", "Lenskart Air"],
      },
    ],
  },
];

const EyeglassesCategory = () => {
  // Use state only after component mounts to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activePriceCategoryIndex, setActivePriceCategoryIndex] = useState(0);
  const [hoveredPriceCategory, setHoveredPriceCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState("categories");

  // Set mounted to true once component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCategoryHover = (index:any) => {
    setActiveCategoryIndex(index);
    setHoveredPriceCategory(null);
  };

  const handlePriceCategoryHover = (priceCategory:any, index:any) => {
    setHoveredPriceCategory(priceCategory);
    setActivePriceCategoryIndex(index);
  };

  const getCurrentData = () => {
    const currentCategory = categoriesData[activeCategoryIndex] || categoriesData[0];
    return hoveredPriceCategory || currentCategory.priceCategory[0];
  };

  const handleMobileNavigation = (view:any) => {
    setMobileView(view);
  };

  // Only access these when component is mounted
  const currentData = mounted ? getCurrentData() : categoriesData[0].priceCategory[0];
  const currentCategory = mounted ? categoriesData[activeCategoryIndex] : categoriesData[0];

  // If not mounted yet, return a simpler initial structure to avoid hydration mismatch
  if (!mounted) {
    return <div className="absolute z-50 left-0 w-full bg-white shadow-lg rounded-b-lg"></div>;
  }

  return (
    <div className="absolute z-50 left-0 w-full bg-white shadow-lg rounded-b-lg">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden p-4 border-b flex justify-between items-center">
        <h2 className="font-bold text-gray-800">Eyeglasses Menu</h2>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="text-gray-700 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="flex border-b border-gray-200">
            <button 
              onClick={() => handleMobileNavigation("categories")}
              className={`flex-1 py-3 text-center ${mobileView === "categories" ? "border-b-2 border-blue-500 font-medium text-blue-500" : "text-gray-500"}`}
            >
              Categories
            </button>
            <button 
              onClick={() => handleMobileNavigation("prices")}
              className={`flex-1 py-3 text-center ${mobileView === "prices" ? "border-b-2 border-blue-500 font-medium text-blue-500" : "text-gray-500"}`}
            >
              Price Range
            </button>
            <button 
              onClick={() => handleMobileNavigation("details")}
              className={`flex-1 py-3 text-center ${mobileView === "details" ? "border-b-2 border-blue-500 font-medium text-blue-500" : "text-gray-500"}`}
            >
              Details
            </button>
          </div>

          {mobileView === "categories" && (
            <div className="p-4">
              {categoriesData.map((categoryItem, index) => (
                <div
                  key={categoryItem.category}
                  className={`flex items-center gap-4 py-4 px-3 rounded-lg mb-2 ${
                    activeCategoryIndex === index ? "bg-blue-50 border-l-4 border-blue-500" : "border-l-4 border-transparent"
                  }`}
                  onClick={() => {
                    handleCategoryHover(index);
                    setMobileView("prices");
                  }}
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-200">
                    <img
                      src={categoryItem.image}
                      alt={categoryItem.category}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-md font-medium text-gray-800">
                      {categoryItem.category}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {categoryItem.priceCategory.length} collections
                    </p>
                  </div>
                  <span className="text-blue-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          )}

          {mobileView === "prices" && (
            <div className="p-4">
              <div className="flex items-center mb-4">
                <button 
                  onClick={() => setMobileView("categories")}
                  className="mr-2 p-1 rounded-full bg-gray-100"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h3 className="font-semibold text-gray-800">{currentCategory.category} Eyeglasses</h3>
              </div>
              {currentCategory.priceCategory.map((priceItem, index) => (
                <div
                  key={priceItem.name}
                  className={`py-3 px-4 rounded-lg mb-2 border ${
                    activePriceCategoryIndex === index ? "border-blue-500 bg-blue-50" : "border-gray-200"
                  }`}
                  onClick={() => {
                    handlePriceCategoryHover(priceItem, index);
                    setMobileView("details");
                  }}
                >
                  <p className="font-medium text-gray-800">{priceItem.name}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {priceItem.frameShapes.length} frame shapes • {priceItem.brands.length} brands
                  </p>
                </div>
              ))}
            </div>
          )}

          {mobileView === "details" && (
            <div className="p-4">
              <div className="flex items-center mb-4">
                <button 
                  onClick={() => setMobileView("prices")}
                  className="mr-2 p-1 rounded-full bg-gray-100"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h3 className="font-semibold text-gray-800">{currentCategory.priceCategory[activePriceCategoryIndex].name}</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-2 uppercase text-sm">Frame Shapes</h4>
                <div className="grid grid-cols-2 gap-2">
                  {currentData.frameShapes.map((frame) => (
                    <Link 
                      key={frame}
                      href={`/products?category=${currentCategory.category}&priceCategory=${currentData.price}&frameShape=${frame}`}
                      className="py-2 px-3 bg-gray-50 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {frame}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-2 uppercase text-sm">Collections</h4>
                <div className="grid grid-cols-2 gap-2">
                  {currentData.collections.map((collection) => (
                    <Link 
                      key={collection}
                      href={`/products?category=${currentCategory.category}&priceCategory=${currentData.price}&collection=${collection}`}
                      className="py-2 px-3 bg-gray-50 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {collection}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-2 uppercase text-sm">Brands</h4>
                <div className="grid grid-cols-2 gap-2">
                  {currentData.brands.map((brand) => (
                    <Link 
                      key={brand}
                      href={`/products?category=${currentCategory.category}&priceCategory=${currentData.price}&brand=${brand}`}
                      className="py-2 px-3 bg-gray-50 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:block p-6">
        <div className="grid grid-cols-5 gap-6">
          {/* Select Category */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-700 mb-4 uppercase text-sm tracking-wider">Select Category</h3>
            {categoriesData.map((categoryItem, index) => (
              <div
                key={categoryItem.category}
                className={`flex items-center gap-4 py-3 px-4 rounded-lg mb-2 transition-all duration-200 ${
                  activeCategoryIndex === index ? "bg-blue-50 shadow-sm border-l-4 border-blue-500" : "hover:bg-gray-50 border-l-4 border-transparent"
                } cursor-pointer`}
                onMouseEnter={() => handleCategoryHover(index)}
              >
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-200">
                  <img
                    src={categoryItem.image}
                    alt={categoryItem.category}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="text-md font-medium text-gray-800">
                    {categoryItem.category}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {categoryItem.priceCategory.length} collections
                  </p>
                </div>
                <span className="text-blue-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            ))}
          </div>

          {/* Price Category */}
          <div className="col-span-1 border-l border-gray-100 pl-6">
            <h3 className="font-semibold text-gray-700 mb-4 uppercase text-sm tracking-wider">Price Category</h3>
            {categoriesData[activeCategoryIndex]?.priceCategory.map(
              (priceItem, index) => (
                <div
                  key={priceItem.name}
                  className={`py-3 px-4 rounded-lg mb-2 transition-all duration-200 ${
                    activePriceCategoryIndex === index
                      ? "bg-blue-50 shadow-sm border-l-4 border-blue-500"
                      : "hover:bg-gray-50 border-l-4 border-transparent"
                  } cursor-pointer`}
                  onMouseEnter={() => handlePriceCategoryHover(priceItem, index)}
                >
                  <p className="font-medium text-gray-800 text-sm">{priceItem.name}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {priceItem.frameShapes.length} frame shapes • {priceItem.brands.length} brands
                  </p>
                </div>
              )
            )}
          </div>

          {/* Frame Shapes */}
          <div className="col-span-1 border-l border-gray-100 pl-6">
            <h3 className="font-semibold text-gray-700 mb-4 uppercase text-sm tracking-wider">Frame Shape</h3>
            <div className="space-y-2">
              {currentData.frameShapes.map((frame,ind) => (
                
                 <span key={ind}>
                  {frame}
                 </span>
              
              ))}
            </div>
          </div>

          {/* Collection */}
          <div className="col-span-1 border-l border-gray-100 pl-6">
            <h3 className="font-semibold text-gray-700 mb-4 uppercase text-sm tracking-wider">Collection</h3>
            <div className="space-y-2">
              {currentData.collections.map((collection,ind) => (
                <span key={ind}>
                  {collection}
                </span>
                // <Link
                //   key={collection}
                //   href={`/products?category=${categoriesData[activeCategoryIndex].category}&priceCategory=${categoriesData[activeCategoryIndex].priceCategory[activePriceCategoryIndex].price}&collection=${collection}`}
                //   className="block py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 text-sm text-gray-700 hover:text-blue-600"
                // >
                //   {collection}
                // </Link>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div className="col-span-1 border-l border-gray-100 pl-6">
            <h3 className="font-semibold text-gray-700 mb-4 uppercase text-sm tracking-wider">Brands</h3>
            <div className="space-y-2">
              {currentData.brands.map((brand,index) => (
                <span key={index}>
                  {brand}
                </span>
                // <Link
                //   key={brand}
                //   href={`/products?category=${categoriesData[activeCategoryIndex].category}&priceCategory=${categoriesData[activeCategoryIndex].priceCategory[activePriceCategoryIndex].price}&brand=${brand}`}
                //   className="block py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 text-sm text-gray-700 hover:text-blue-600"
                // >
                //   {brand}
                // </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyeglassesCategory;