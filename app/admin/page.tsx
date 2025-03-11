'use client'

import { useState } from 'react'

export default function AddProductForm() {
  const [formData, setFormData] = useState({
    frameShape: '',
    category: '',
    priceCategory: '',
    brand: '',
    collection: '',
    imageUrls: [''],
    frameType: '',
    frameColor: '',
    productName: '',
    totalPrice: '',
    discount: '',
    payablePrice: '',
    frameWidth: '',
    frameSize: '',
    productId: '',
    modelNumber: '',
    productType: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageUrlChange = (index: number, value: string) => {
    const newUrls = [...formData.imageUrls]
    newUrls[index] = value
    setFormData(prev => ({ ...prev, imageUrls: newUrls }))
  }

  const addImageUrlField = () => {
    setFormData(prev => ({ ...prev, imageUrls: [...prev.imageUrls, ''] }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await res.json()
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow rounded-xl space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>

      {Object.entries(formData).map(([key, value]) => {
        if (key === 'imageUrls') return null // handled separately
        return (
          <div key={key}>
            <label className="block text-sm font-medium capitalize">{key}</label>
            <input
              type="text"
              name={key}
              value={value as string}
              onChange={handleChange}
              className="mt-1 w-full border px-3 py-2 rounded-lg"
            />
          </div>
        )
      })}

      <div>
        <label className="block text-sm font-medium">Image URLs</label>
        {formData.imageUrls.map((url, index) => (
          <input
            key={index}
            type="text"
            value={url}
            onChange={e => handleImageUrlChange(index, e.target.value)}
            className="mt-1 w-full border px-3 py-2 rounded-lg mb-2"
            placeholder={`Image URL ${index + 1}`}
          />
        ))}
        <button
          type="button"
          onClick={addImageUrlField}
          className="text-blue-600 text-sm mt-1 hover:underline"
        >
          + Add another image
        </button>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  )
}
