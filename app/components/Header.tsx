import Link from 'next/link';
import Image from 'next/image';
import HeaderSearch from '@/app/components/client-components/HeaderSearch';
import { FaSearch, FaHeart, FaShoppingCart, FaPhone } from 'react-icons/fa';
import Navbar from '@/app/components/client-components/Navbar';

const Header = () => {
  return (
    <header className="w-full">
      {/* Main header with logo, search, and actions */}
      <div className="bg-white py-4 px-4 sm:px-6 md:px-8 border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="flex items-center order-1">
            <Link href="/" className="flex items-center">
              <div className="h-10 w-32 relative">
                <Image
                  src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
                  alt="logo"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </Link>

            {/* Phone number - visible only on larger screens */}
            <div className="hidden md:flex items-center ml-4">
              <FaPhone className="text-gray-600 mr-2" />
              <span className="font-medium">99998 99998</span>
            </div>
          </div>

          {/* Header Search */}
          <div className="order-2 w-full md:w-[40%] mt-2 md:mt-0">
            <HeaderSearch />
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-4 order-3">
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/signin" className="text-sm hover:text-blue-600">
                Sign In & Sign Up
              </Link>
            </div>

            <Link href="/cart" className="relative flex items-center">
              <FaShoppingCart className="text-2xl text-gray-700 hover:text-blue-600 transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-[#fbf9f7]">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
