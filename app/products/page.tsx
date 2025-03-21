'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const Page = () => {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/get-products')
      console.log(res.data.products)
      setProducts(res.data.products)
    }
    getData()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
        {products.map((item: any, index: number) => (
          <ProductCard
            key={index}
            price={item?.price}
            discount={item?.discount}
            images={item?.images}
            frameMaterial={item?.frameMaterial}
            frameSize={item?.frameSize}
            brandName={item?.brandName}
            productId = {item?._id}
          />
        ))}
      </div>
    </div>
  )
}

export default Page
