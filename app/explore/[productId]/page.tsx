"use client"
import { IProduct } from '@/models/Product'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import ImagesPart from '../ImagesPart'
import InfoPart from '../InfoPart'
import Loading from '@/app/components/Loading'

const ExploreProductPage = () => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const productId = params?.productId;

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/get-product?productId=${productId}`);
        setProduct(res.data?.product);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    
    if (productId) {
      getData();
    }
  }, [productId]);

  if (loading) {
  return <Loading/>
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h2>
          <p className="text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      

        {/* Product Content */}
        <div className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Images Section */}
            <div className="w-full lg:w-3/5 p-4 md:p-8">
              {product && <ImagesPart images={product.images} />}
            </div>
            
            {/* Info Section */}
            <div className="w-full lg:w-2/5">
              {product && <InfoPart data={product} />}
            </div>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default ExploreProductPage