// models/Product.ts

import mongoose, { Schema, models, model, InferSchemaType } from 'mongoose'

const ProductSchema = new Schema(
  {
    frameShape: { type: String, required: true },
    category: { type: String, required: true },
    priceCategory: { type: String, required: true },
    brand: { type: String, required: true },
    collection: { type: String, required: true }, // No conflict now
    imageUrls: { type: [String], required: true },
    frameType: { type: String, required: true },
    frameColor: { type: String, required: true },
    productName: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    discount: { type: Number, required: true },
    payablePrice: { type: Number, required: true },
    frameWidth: { type: String, required: true },
    frameSize: { type: String, required: true },
    productId: { type: String, required: true, unique: true },
    modelNumber: { type: String, required: true },
    productType: { type: String, required: true },
  },
  { timestamps: true }
)

export type IProduct = InferSchemaType<typeof ProductSchema>

const Product = models.Product || model<IProduct>('Product', ProductSchema)

export default Product
