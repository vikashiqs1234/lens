// Home Eye Check Component
import React from 'react';
import Image from 'next/image';

const HomeEyeCheckBanner = () => {
  return (
    <div className="absolute z-[100] left-0 w-full  bg-white">
      <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row items-center">
        {/* Left side - Image */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <div className="relative w-full h-64 md:h-80">
            <Image
              src="https://static1.lenskart.com/media/desktop/img/HomeTryOut.png"
              alt="Eye testing professional providing home service"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="md:w-1/2 md:pl-12 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Get your eyes checked at home
          </h1>
          
          <p className="text-lg text-center md:text-left mb-8">
            A certified refractionist will visit you with<br />
            latest eye testing machines & 100 trial frames
          </p>
          
          <div className="flex justify-center md:justify-start">
            <button className="px-6 py-3 border-2 border-navy-900 text-navy-900 font-medium rounded-full hover:bg-navy-900 hover:text-white transition-colors">
              Book appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEyeCheckBanner;