'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '@/store/cartSlice'
import type { AppDispatch } from '@/store/store'

export default function ProductsPage() {
  const dispatch = useDispatch<AppDispatch>()
  const [products,setProducts] = useState<any>([])
  const { products:data, loading, error } = useSelector((state: any) => state.cart)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  useEffect(()=>{
setProducts(data)
  },[data])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products&&products.map((product: any) => (
          <li key={product._id}>{product._id}</li>
        ))}
      </ul>
    </div>
  )
}
