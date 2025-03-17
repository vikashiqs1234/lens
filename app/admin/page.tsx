'use client'

import { useState } from 'react'
import axios from 'axios'

export default function ProductForm() {
  const [formData, setFormData] = useState({
    brandName: '',
    productType: '',
    frameType: '',
    frameShape: '',
    modelNumber: '',
    frameSize: '',
    frameWidth: '',
    frameDimensions: '',
    frameColor: '',
    weight: '',
    weightGroup: '',
    material: '',
    frameMaterial: '',
    templeMaterial: '',
    prescriptionType: '',
    frameStyle: '',
    frameStyleSecondary: '',
    collection: '',
    productWarranty: '',
    gender: '',
    height: '',
    condition: '',
    templeColor: '',
    price: '',
    discount: '',
  })

  const [images, setImages] = useState<FileList | null>(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [previewUrls, setPreviewUrls] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      const existingFiles = images ? Array.from(images) : []
  
      const combinedFiles = [...existingFiles, ...newFiles]
  
      // Create a new FileList-like object using DataTransfer
      const dataTransfer = new DataTransfer()
      combinedFiles.forEach(file => dataTransfer.items.add(file))
  
      const updatedFileList = dataTransfer.files
      setImages(updatedFileList)
  
      // Update previews
      const urls = Array.from(updatedFileList).map(file => URL.createObjectURL(file))
      setPreviewUrls(urls)
    }
  }
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const data = new FormData()

      // Append all text fields
      for (const key in formData) {
        data.append(key, formData[key as keyof typeof formData])
      }

      // Append images
      if (images) {
        Array.from(images).forEach((file) => {
          data.append('images', file)
        })
      }

      const res = await axios.post('/api/admin', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      console.log(res)
      setMessage('Product added successfully!')
      // setFormData({
      //   brandName: '',
      //   productType: '',
      //   frameType: '',
      //   frameShape: '',
      //   modelNumber: '',
      //   frameSize: '',
      //   frameWidth: '',
      //   frameDimensions: '',
      //   frameColor: '',
      //   weight: '',
      //   weightGroup: '',
      //   material: '',
      //   frameMaterial: '',
      //   templeMaterial: '',
      //   prescriptionType: '',
      //   frameStyle: '',
      //   frameStyleSecondary: '',
      //   collection: '',
      //   productWarranty: '',
      //   gender: '',
      //   height: '',
      //   condition: '',
      //   templeColor: '',
      //   price: '',
      //   discount: '',
      // })
      setImages(null)
      setPreviewUrls([])
    } catch (err) {
      console.error(err)
      setMessage('Failed to add product.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
      {message && <p className="mb-4 text-green-600">{message}</p>}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.keys(formData).map((key) => (
          <div key={key} className="flex flex-col">
            <label className="text-gray-700 font-medium">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </label>
            <input
              type="text"
              name={key}
              value={formData[key as keyof typeof formData]}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        ))}

        {/* Image Upload */}
        <div className="col-span-1 md:col-span-2">
          <label className="text-gray-700 font-medium block mb-1">Product Images</label>
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="block w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>

        {/* Image Preview */}
        {previewUrls.length > 0 && (
          <div className="col-span-2 grid grid-cols-3 gap-2">
            {previewUrls.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`preview-${idx}`}
                className="w-full h-32 object-cover rounded-md border"
              />
            ))}
          </div>
        )}

        {/* Submit Button */}
        <div className="col-span-2 mt-4">
          <button
            type="submit"
            // disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-200"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  )
}
