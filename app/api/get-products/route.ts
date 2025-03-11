import { connectToDatabase } from '@/lib/dbConnect'
import Product from '@/models/Product'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase()

    const { searchParams } = new URL(request.url)

    const query: Record<string, any> = {}

    const category = searchParams.get('category')
    const priceCategory = searchParams.get('priceCategory') // this will filter on payablePrice
    const frameShape = searchParams.get('frameShape')
    const brand = searchParams.get('brand')
    const collection = searchParams.get('collection')

    if (category) {
      query.category = { $regex: category, $options: 'i' }
    }

    if (priceCategory) {
      const minPrice = parseFloat(priceCategory)
      if (!isNaN(minPrice)) {
        query.payablePrice = { $gte: minPrice }
      }
    }

    if (frameShape) {
      query.frameShape = { $regex: frameShape, $options: 'i' }
    }

    if (brand) {
      query.brand = { $regex: brand, $options: 'i' }
    }

    if (collection) {
      query.collection = { $regex: collection, $options: 'i' }
    }

    console.log('Search query:', query)

    const products = await Product.find(query)

    return NextResponse.json({ products }, { status: 200 })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}
