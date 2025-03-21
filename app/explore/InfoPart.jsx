"use client"
import React, { useEffect, useState } from 'react'

const InfoPart = ({data}) => {
    const [payablePrice, setPayablePrice] = useState(0)
    
    useEffect(() => {
        // Convert to numbers to ensure proper calculation
        const price = Number(data.price)
        const discount = Number(data.discount)
        // Calculate discounted price
        const discountedPrice = price - (discount * price / 100)
        setPayablePrice(discountedPrice)
    }, [data])
    
    return (
        <div className="w-full max-h-fit max-w-2xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            {/* Brand Badge - Positioned at top */}
            <div className="relative">
                <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                        {data.brandName}
                    </span>
                </div>
            </div>
            
            {/* Content Section */}
            <div className="p-6 md:p-8">
                {/* Product Title */}
                <h2 className="text-2xl md:text-3xl font-bold capitalize text-gray-800 mb-4 mt-6">
                    {data.frameColor} {data.frameType} {data.frameShape}
                </h2>
                
                {/* Product Features */}
                <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium flex items-center">
                        <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        Size: {data.frameSize}
                    </span>
                    <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium flex items-center">
                        <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                        </svg>
                        Frame+Lens 
                    </span>
                </div>
                
                {/* Price Section with Gradient Background */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-xl mb-6">
                    <div className="flex items-center gap-3 mb-2">
                        <del className="text-gray-400 text-lg">${data.price}</del>
                        <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full animate-pulse">
                            {data.discount}% OFF
                        </span>
                    </div>
                    <div className="flex items-baseline">
                        <span className="text-3xl font-extrabold text-blue-600">
                            ${payablePrice.toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-500 ml-2">only</span>
                    </div>
                </div>
                
                {/* Action Buttons - Stacked */}
                <div className="flex flex-col gap-4">
                    <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-200 transform hover:translate-y-[-2px] hover:shadow-lg">
                        Select Lenses
                    </button>
                    <button className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-xl transition-all duration-200 transform hover:translate-y-[-2px] hover:shadow-lg flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Try On 3D
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InfoPart