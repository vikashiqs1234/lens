'use client'
import React, { useState } from 'react'
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react'

interface ProductCardProps {
  price: number
  discount?: number
  images?: string[]
  frameMaterial: string
  frameSize: string
  brandName: string
  rating?: number
  reviewCount?: number
}

const ProductCard: React.FC<ProductCardProps> = ({
  price,
  discount = 0,
  images = [],
  frameMaterial,
  frameSize,
  brandName,
  rating = 3,
  reviewCount = 8,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const discountedPrice = price - (price * discount) / 100

  
  const nextImage = () => {
    if (images && images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (images && images.length > 1) {
      setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }
  }

  // Create array for star rendering
  const renderRatingStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star 
          key={`star-${i}`} 
          size={16} 
          className="text-yellow-400 fill-yellow-400" 
        />
      );
    }
    
    // Half star
    if (hasHalfStar) {
      stars.push(
        <div key="half-star" className="relative">
          <Star size={16} className="text-yellow-400" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
          </div>
        </div>
      );
    }
    
    // Empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star 
          key={`empty-star-${i}`} 
          size={16} 
          className="text-yellow-400" 
        />
      );
    }
    
    return stars;
  };

  // Ensure we have a valid image URL or use a placeholder
  const currentImageUrl = images && images.length > 0 && images[currentImageIndex] 
    ? images[currentImageIndex] 
    : "/api/placeholder/400/320"

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge for discount */}
      {discount > 0 && (
        <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          {discount}% OFF
        </div>
      )}

      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={currentImageUrl}
          alt={`${brandName} product`}
          className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-105"
        />
        
        {/* Navigation arrows - only show when hovered and multiple images */}
        {images && images.length > 1 && isHovered && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 hover:bg-opacity-100 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 hover:bg-opacity-100 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </>
        )}
        
        {/* Action buttons */}
        <div className={`absolute right-2 flex flex-col gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
            <Heart size={18} className="text-gray-600 hover:text-red-500 transition-colors" />
          </button>
          <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
            <Eye size={18} className="text-gray-600 hover:text-blue-500 transition-colors" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-lg capitalize font-semibold text-gray-800">{brandName}</h3>
          <p className="text-gray-500 capitalize text-sm">{frameMaterial} · {frameSize}</p>
          
          {/* Rating Stars */}
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {renderRatingStars()}
            </div>
            {reviewCount > 0 && (
              <span className="text-xs text-gray-500 ml-2">({reviewCount} {reviewCount === 1 ? 'review' : 'reviews'})</span>
            )}
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            {discount > 0 ? (
              <>
                <span className="text-lg font-bold text-gray-800">${discountedPrice}</span>
                <span className="text-sm text-gray-500 line-through">${price}</span>
              </>
            ) : (
              <span className="text-lg font-bold text-gray-800">${price}</span>
            )}
          </div>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors">
            <ShoppingCart size={18} />
          </button>
        </div>

        {/* Product images indicator */}
        {images && images.length > 1 && (
          <div className="flex justify-center mt-4 gap-1">
            {images.map((_, index) => (
              <span 
                key={index} 
                className={`w-2 h-2 rounded-full ${currentImageIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard