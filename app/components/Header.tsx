// components/Header.jsx
import Link from 'next/link';
import Image from 'next/image';
import HeaderSearch from '@/app/components/client-components/HeaderSearch'
import { FaSearch, FaHeart, FaShoppingCart, FaPhone } from 'react-icons/fa';
import Navbar from '@/app/components/client-components/Navbar'

const Header = () => {


  return (
    <header className=" w-full">
      {/* Top navigation bar */}
      <div className="bg-white border-b border-gray-200 text-xs text-gray-700">
        <div className="container mx-auto px-10 py-1">
          <div className="flex flex-wrap items-center justify-start gap-2 md:gap-4">
            <Link href="/" className="hover:text-blue-600">Krishna Nagar,Mathura 281004</Link>
        
            <div className="ml-auto">
              <Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header with logo, search and actions */}
      <div className="bg-white py-4 px-6 border-b border-gray-200">
        <div className=" flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="h-10 w-32 relative">
              <Image src={'https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg'} height={255} width={300} alt='logo'/>
              </div>
            </Link>
            
            {/* Phone number - visible only on larger screens */}
            <div className="hidden md:flex items-center ml-4">
              <FaPhone className="text-gray-600 mr-2" />
              <span className="font-medium">99998 99998</span>
            </div>
          </div>
{/* header
search */}
        <HeaderSearch/>
         
          {/* Action buttons */}
          <div className="flex items-center gap-12 order-2 md:order-3">
            <Link href="/track-order" className="hidden md:block text-sm hover:text-blue-600">
              Track Order
            </Link>
            <Link href="/signin" className="hidden md:block text-sm hover:text-blue-600">
              Sign In & Sign Up
            </Link>
            <div className="flex items-center gap-12">
              <Link href="/wishlist" className="relative">
                <FaHeart className="text-2xl text-gray-700" />
                {/* <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  1
                </span> */}
              </Link>
              <Link href="/cart" className="relative">
                <FaShoppingCart className="text-2xl text-gray-700" />
                {/* <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  1
                </span> */}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-[#fbf9f7] ">
      
       
            <Navbar/>
      </nav>
      {/* <Eyeglasses/> */}
    </header>
  );
};

export default Header;