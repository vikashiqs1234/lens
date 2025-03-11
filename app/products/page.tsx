// app/products/page.tsx

'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IProduct } from '@/models/Product' // your TS interface

export default function ProductsPage() {
  const searchParams = useSearchParams()

  const category = searchParams.get('category')
  const priceCategory = searchParams.get('priceCategory')
  const frameShape = searchParams.get('frameShape');
  const brand = searchParams.get('brand');
  const collection = searchParams.get('collection')

  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = new URLSearchParams({
          ...(category && { category }),
          ...(priceCategory && { priceCategory }),
          ...(frameShape && { frameShape }),
          ...(brand && { brand }),
          ...(collection && { collection }),
        })

        const res = await fetch(`/api/get-products?${query.toString()}`)
        const data = await res.json()
        setProducts(data.products || [])
      } catch (err) {
        console.error('Error fetching products:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
}, [category, priceCategory, frameShape, brand, collection])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Filtered Products</h1>

      {loading ? (
        <p>Loading...</p>
      ) : products.length > 0 ? (
        <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.productId} className="border p-4 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold">{product.productName}</h2>
              <p className="text-sm text-gray-500">{product.brand}</p>
              <p className="text-sm">{product.frameShape}</p>
              <p className="text-sm font-medium mt-1">₹{product.payablePrice}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found for selected filters.</p>
      )}
    </div>
  )
}
