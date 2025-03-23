import Link from "next/link";
import HeaderSearch from "@/app/components/client-components/HeaderSearch";
import { FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Navbar from "@/app/components/client-components/Navbar";

const Header = () => {
  return (
    <header className="w-full bg-[#fbf9f7]  z-50">
      {/* Main header with logo, search, and actions */}
      <div className="py-4 border-b border-gray-200 max-w-[1400px] mx-auto px-4 md:px-2 lg:px-0">
        <div className="container w-full mx-auto flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="flex w-full md:w-auto items-center gap-8 order-1">
            <div className=" flex w-full items-center justify-between gap-6 ">
              <h1 className="text-3xl w-fit font-bold mr-auto ">SpecsVue</h1>

              <Link
                href="/login"
                className="relative sm:hidden  md:flex items-center"
              >
                <FaUser className="text-xl text-gray-700 hover:text-blue-600 transition-colors" />
              </Link>

              <Link
               href="/cart" 
               className="relative sm:hidden  ">
                <FaShoppingCart className="text-2xl text-gray-700 hover:text-blue-600 transition-colors" />
              </Link>
            </div>

            {/* Phone number - visible only on larger screens */}
            <div className="hidden w-[250px] md:flex items-center ml-4">
              <FaPhoneAlt className="text-gray-600 mr-2" />
              <span className="font-medium">99998 99998</span>
            </div>
          </div>

          {/* Header Search */}
          <div className="order-2 w-full md:w-[40%] mt-2 md:mt-0">
            <HeaderSearch />
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-4 order-3">
            <div className=" md:flex items-center space-x-4">
              <Link
                href="/signin"
                className="text-sm hidden sm:block hover:text-blue-600"
              >
                Sign In & Sign Up
              </Link>
            </div>

            <Link
              href="/cart"
              className="relative hidden  md:flex items-center"
            >
              <FaShoppingCart className="text-2xl text-gray-700 hover:text-blue-600 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full bg-black">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
