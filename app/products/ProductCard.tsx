'use client'
import React, { useState } from 'react'
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface ProductCardProps {
  price: number
  discount?: number
  images?: string[]
  frameMaterial: string
  frameSize: string
  brandName: string
  rating?: number
  reviewCount?: number
  productId:any;
}

const ProductCard: React.FC<ProductCardProps> = ({
  price,
  productId,
  discount = 0,
  images = [],
  frameMaterial,
  frameSize,
  brandName,
  rating = 3,
  reviewCount = 8,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter()

  const discountedPrice = price - (price * discount) / 100
  const currentImageUrl = images[currentImageIndex] || '/api/placeholder/400/320'

  const handleImageNavigation = (direction: 'next' | 'prev') => {
    if (images.length < 2) return
    setCurrentImageIndex((prev) =>
      direction === 'next'
        ? (prev + 1) % images.length
        : prev === 0
        ? images.length - 1
        : prev - 1
    )
  }

  const renderRatingStars = () => {
    const full = Math.floor(rating)
    const half = rating % 1 >= 0.5
    const empty = 5 - full - (half ? 1 : 0)

    return (
      <>
        {[...Array(full)].map((_, i) => (
          <Star key={`full-${i}`} size={16} className="text-yellow-400 fill-yellow-400" />
        ))}
        {half && (
          <div key="half" className="relative">
            <Star size={16} className="text-yellow-400" />
            <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
            </div>
          </div>
        )}
        {[...Array(empty)].map((_, i) => (
          <Star key={`empty-${i}`} size={16} className="text-yellow-400" />
        ))}
      </>
    )
  }

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {discount > 0 && (
        <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          {discount}% OFF
        </div>
      )}

      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={currentImageUrl}
          alt={`${brandName} product`}
          className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-105"
        />

        {images.length > 1 && isHovered && (
          <>
            <button
              onClick={() => handleImageNavigation('prev')}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 hover:bg-opacity-100 transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => handleImageNavigation('next')}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 hover:bg-opacity-100 transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </>
        )}

        <div className={`absolute right-2 flex flex-col gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
            <Heart size={18} className="text-gray-600 hover:text-red-500 transition-colors" />
          </button>
          <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
            <Eye size={18} className="text-gray-600 hover:text-blue-500 transition-colors" />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-lg capitalize font-semibold text-gray-800">{brandName}</h3>
          <p className="text-gray-500 capitalize text-sm">
            {frameMaterial} · {frameSize}
          </p>
          <div className="flex items-center mt-2">
            <div className="flex items-center">{renderRatingStars()}</div>
            {reviewCount > 0 && (
              <span className="text-xs text-gray-500 ml-2">({reviewCount} {reviewCount === 1 ? 'review' : 'reviews'})</span>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
  {discount > 0 ? (
    <>
      <span className="text-lg font-bold text-gray-800">
        ${Number(discountedPrice).toFixed(2)}
      </span>
      <span className="text-sm text-gray-500 line-through">
        ${Number(price).toFixed(2)}
      </span>
    </>
  ) : (
    <span className="text-lg font-bold text-gray-800">
      ${Number(price).toFixed(2)}
    </span>
  )}
</div>

          <button onClick={() => router.push(`/explore/${productId}`)} className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-medium rounded-full px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300">
            Explore
          </button>
        </div>

        {images.length > 1 && (
          <div className="flex justify-center mt-4 gap-1">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full cursor-pointer ${currentImageIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard
