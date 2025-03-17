import { connectToDatabase } from '@/lib/dbConnect'
import Product from '@/models/Product'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase()
    const products = await Product.find({})
    return NextResponse.json({ products }, { status: 200 })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}
