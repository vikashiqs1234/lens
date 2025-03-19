'use client';
import React, { useState } from 'react';
import EyeglassesCategory from './EyeglassesCategory';
import ScreenGlassesCategory from './ScreenGlasses';
import KidsGlasses from './KidsGlasses';
import ContactLenses from './ContactLenses';
import SunGlassesCategory from './SunGlassesCategory';
import HomeEyeCheckBanner from './HomeEyeCheck';

const componentMap = {
  eyeglasses: EyeglassesCategory,
  screenglasses: ScreenGlassesCategory,
  kidsglasses: KidsGlasses,
  contactlens: ContactLenses,
  sunglasses: SunGlassesCategory,
  homeeyecheck: HomeEyeCheckBanner,
};

// Create a type of all keys
type ComponentKey = keyof typeof componentMap;

const Navbar = () => {
  const [activeComponent, setActiveComponent] = useState<ComponentKey | null>(null);

  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveComponent(null);
    }, 200);
  };

  const handleMouseEnter = (componentName: ComponentKey) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="relative w-full">
      <nav className="bg-[#fbf9f7] border-b border-gray-200 px-4 sm:px-6 md:px-8">
        <ul className="flex items-center space-x-4 overflow-x-auto py-3 text-sm font-medium text-gray-700">
          {Object.keys(componentMap).map((key) => (
            <li
              key={key}
              onMouseEnter={() => handleMouseEnter(key as ComponentKey)}
              className="px-3 py-2 cursor-pointer hover:text-blue-600 transition-colors whitespace-nowrap rounded hover:bg-gray-100"
            >
              {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
            </li>
          ))}
        </ul>
      </nav>

      {activeComponent && (
        <div
          onMouseLeave={handleMouseLeave}
          className="absolute z-30 left-0 w-full  bg-white border border-t-0 border-gray-200 shadow-md"
        >
          {React.createElement(componentMap[activeComponent])}
        </div>
      )}
    </div>
  );
};

export default Navbar;
