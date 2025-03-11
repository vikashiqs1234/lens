"use client";
import React, { useState } from "react";
import Link from "next/link";
import EyeglassesCategory from "./EyeglassesCategory"; // Make sure this component exists
import ScreenGlassesCategory from "./ScreenGlasses"; // Create this component (or reuse EyeglassesCategory with different props)
import KidsGlasses from "./KidsGlasses";
import ContactLenses from "./ContactLenses";

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
      <nav className="flex items-center space-x-6 py-2 whitespace-nowrap px-8">
        <ul className="flex space-x-6">
          <li
            onMouseEnter={() => handleMouseEnter("eyeglasses")}
            className="text-gray-800 p-2 font-medium hover:underline list-none text-sm cursor-pointer" // Added cursor:pointer
          >
            EYEGLASSES
          </li>

          <li
            onMouseEnter={() => handleMouseEnter("screenglasses")}
            className="text-gray-800 p-2 font-medium hover:underline list-none text-sm cursor-pointer" // Added cursor:pointer
          >
            SCREEN GLASSES
          </li>

          <li
           onMouseEnter={() => handleMouseEnter("kidsglasses")}
           className="text-gray-800 p-2 font-medium hover:underline list-none text-sm cursor-pointer">
            KIDS GLASSES
          </li>
          <li 
            onMouseEnter={() => handleMouseEnter("contactlens")}
          className="text-gray-800 p-2 font-medium hover:underline list-none text-sm cursor-pointer">
            CONTACT LENSES
          </li>
          <li className="text-gray-800 p-2 font-medium hover:underline list-none text-sm cursor-pointer">
            SUN GLASSES
          </li>
          <li className="text-gray-800 p-2 font-medium hover:underline list-none text-sm cursor-pointer">
            HOME EYE-TEST
          </li>
          <li className="text-gray-800 mr-auto p-2 font-medium hover:underline list-none text-sm cursor-pointer">
            STORE LOCATOR
          </li>
        </ul>
        <div className="flex items-center space-x-2 py-4 px-4">
          <Link
            href="/3d-try-on"
            className="bg-teal-500 text-white px-4 py-2 rounded"
          >
            3D TRY ON
          </Link>
          <Link
            href="/blu"
            className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded"
          >
            BLU
          </Link>
          <Link href="/gold" className="bg-black text-white px-4 py-2 rounded">
            GOLD
            <span className="text-xs text-yellow-400 ml-1">MAX</span>
          </Link>
        </div>
      </nav>

      {/* Conditional Rendering of Components - Only ONE at a time */}
      {activeComponent === "eyeglasses" && (
        <div onMouseLeave={handleMouseLeave}>
          <EyeglassesCategory />
        </div>
      )}

      {activeComponent === "screenglasses" && (
        <div onMouseLeave={handleMouseLeave}>
          <ScreenGlassesCategory />
        </div>
      )}
      {activeComponent === "kidsglasses" && (
        <div onMouseLeave={handleMouseLeave}>
          <KidsGlasses />
        </div>
      )}
      {activeComponent === "contactlens" && (
        <div onMouseLeave={handleMouseLeave}>
          <ContactLenses />
        </div>
      )}
    </div>
  );
};

export default Navbar;
