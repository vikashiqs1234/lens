"use client";
import React, { useState } from "react";
import Link from "next/link";
import EyeglassesCategory from "./EyeglassesCategory"; // Make sure this component exists
import ScreenGlassesCategory from "./ScreenGlasses"; // Create this component (or reuse EyeglassesCategory with different props)
import KidsGlasses from "./KidsGlasses";
import ContactLenses from "./ContactLenses";
import SunGlassesCategory from "./SunGlassesCategory";
import HomeEyeCheckBanner from "./HomeEyeCheck";

const Navbar = () => {
  const [activeComponent, setActiveComponent] = useState(null); // 'eyeglasses' | 'screenglasses' | null

  const handleMouseLeave = () => {
    // Introduce a delay before hiding the components
    setTimeout(() => {
      setActiveComponent(null);
    }, 200); // Adjust the delay (milliseconds) as needed
  };

  const handleMouseEnter = (componentName:any) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="relative">
      <nav className="flex items-center space-x-6 py-2 whitespace-nowrap px-8 bg-gray-100 border-b border-gray-200 shadow-sm">
        <ul className="flex space-x-6">
          <li
            onMouseEnter={() => handleMouseEnter("eyeglasses")}
            className="text-gray-900 p-2 font-medium hover:text-black hover:bg-gray-200 rounded transition-colors duration-200 list-none text-sm cursor-pointer"
          >
            EYEGLASSES
          </li>

          <li
            onMouseEnter={() => handleMouseEnter("screenglasses")}
            className="text-gray-900 p-2 font-medium hover:text-black hover:bg-gray-200 rounded transition-colors duration-200 list-none text-sm cursor-pointer"
          >
            SCREEN GLASSES
          </li>

          <li
           onMouseEnter={() => handleMouseEnter("kidsglasses")}
           className="text-gray-900 p-2 font-medium hover:text-black hover:bg-gray-200 rounded transition-colors duration-200 list-none text-sm cursor-pointer">
            KIDS GLASSES
          </li>
          <li 
            onMouseEnter={() => handleMouseEnter("contactlens")}
            className="text-gray-900 p-2 font-medium hover:text-black hover:bg-gray-200 rounded transition-colors duration-200 list-none text-sm cursor-pointer">
            CONTACT LENSES
          </li>
          <li 
           onMouseEnter={() => handleMouseEnter("sunglasses")}
           className="text-gray-900 p-2 font-medium hover:text-black hover:bg-gray-200 rounded transition-colors duration-200 list-none text-sm cursor-pointer">
            SUN GLASSES
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("homeeyecheck")}
            className="text-gray-900 p-2 font-medium hover:text-black hover:bg-gray-200 rounded transition-colors duration-200 list-none text-sm cursor-pointer">
            HOME EYE-TEST
          </li>
         
        </ul>
        <div className="flex ml-auto items-center space-x-2 py-4 px-4">
          <Link
            href="/3d-try-on"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-200"
          >
            3D TRY ON
          </Link>
          <Link
            href="/blu"
            className="bg-white border border-gray-300 text-gray-900 px-4 py-2 rounded hover:bg-gray-100 transition-colors duration-200"
          >
            BLU
          </Link>
          <Link 
            href="/gold" 
            className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-black transition-colors duration-200"
          >
            GOLD
            <span className="text-xs text-gray-300 ml-1 font-bold">MAX</span>
          </Link>
        </div>
      </nav>

      {/* Conditional Rendering of Components - Only ONE at a time */}
      {activeComponent === "eyeglasses" && (
        <div onMouseLeave={handleMouseLeave} className="bg-white shadow-md border border-gray-200">
          <EyeglassesCategory />
        </div>
      )}

      {activeComponent === "screenglasses" && (
        <div onMouseLeave={handleMouseLeave} className="bg-white shadow-md border border-gray-200">
          <ScreenGlassesCategory />
        </div>
      )}
      {activeComponent === "kidsglasses" && (
        <div onMouseLeave={handleMouseLeave} className="bg-white shadow-md border border-gray-200">
          <KidsGlasses />
        </div>
      )}
      {activeComponent === "contactlens" && (
        <div onMouseLeave={handleMouseLeave} className="bg-white shadow-md border border-gray-200">
          <ContactLenses />
        </div>
      )}
      {activeComponent === "sunglasses" && (
        <div onMouseLeave={handleMouseLeave} className="bg-white shadow-md border border-gray-200">
          <SunGlassesCategory />
        </div>
      )}
      {activeComponent === "homeeyecheck" && (
        <div onMouseLeave={handleMouseLeave} className="bg-white shadow-md border border-gray-200">
          <HomeEyeCheckBanner />
        </div>
      )}
    </div>
  );
};

export default Navbar;