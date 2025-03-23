"use client";
import React, { useEffect, useState } from "react";
import { IProduct } from "@/models/Product";
import LensSelector from "./LensSelector"; // 👈 Import this

interface Data {
  data: IProduct;
}

const InfoPart: React.FC<Data> = ({ data }) => {
  const [payablePrice, setPayablePrice] = useState(0);
  const [showLensSelector, setShowLensSelector] = useState(false);

  useEffect(() => {
    const price = Number(data.price);
    const discount = Number(data.discount);
    const discountedPrice = price - (discount * price) / 100;
    setPayablePrice(discountedPrice);
  }, [data]);

  return (
    <>
      <div className="w-full max-w-2xl mx-auto border border-gray-100 overflow-hidden">
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold capitalize text-gray-800 mb-4">
            {data.frameColor} {data.frameType} {data.frameShape}
          </h2>

          {/* Frame Info */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
              Size: {data.frameSize}
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
              Frame+Lens
            </span>
          </div>

          {/* Pricing */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-xl mb-6">
            <div className="flex items-center gap-3 mb-2">
              <del className="text-gray-400 text-lg">${data.price}</del>
              <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full animate-pulse">
                {data.discount}% OFF
              </span>
            </div>
            <div className="text-3xl font-extrabold text-blue-600">
              ${payablePrice.toFixed(2)}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            <button
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition"
              onClick={() => setShowLensSelector(true)}
            >
              Select Lenses
            </button>
            <button className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-xl">
              Try On 3D
            </button>
          </div>
        </div>
      </div>

      {/* Slide-in Lens Selector */}
      {showLensSelector && <LensSelector onClose={() => setShowLensSelector(false)} />}
    </>
  );
};

export default InfoPart;
