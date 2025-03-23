'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import Loading from '../components/Loading'

const Page = () => {
  const [products, setProducts] = useState<any[]>([])
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const res = await axios.get('/api/get-products')
        setLoading(false)
        setProducts(res.data.products)
      } catch (error) {
        alert("something went wrong")
        console.log(error)
      }
    }
    getData()
  }, [])
if(loading)
{
  return <Loading/>
}
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
