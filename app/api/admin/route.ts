// app/api/example/route.ts

import { connectToDatabase } from '@/lib/dbConnect'
import Product from '@/models/Product'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase()
    const body = await request.json()

    const savedProduct = await Product.create(body)

    return NextResponse.json(
      {
        message: 'Product saved successfully',
        product: savedProduct,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error saving product:', error)
    return NextResponse.json(
      { error: 'Failed to save product' },
      { status: 500 }
    )
  }
}
