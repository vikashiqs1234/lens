"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LandingPageBanner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white opacity-10 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-gray-400 opacity-10 blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container mx-auto h-full flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left side - Text Content */}
        <motion.div 
          className="z-10 md:w-1/2 text-white pt-16 md:pt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            See the World <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              in Timeless Style
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-8 max-w-lg text-gray-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our collection of designer frames that blend elegance with function. 
            Express yourself with classic designs that elevate your presence.
          </motion.p>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Collection
            </motion.button>
            
            <motion.button 
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Virtual Try-On
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Right side - Glasses Display */}
        <motion.div 
          className="relative md:w-1/2 h-96 mt-16 md:mt-0 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div 
            className="absolute top-0 left-10"
            initial={{ y: 40, opacity: 0, rotate: -5 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ y: -10, scale: 1.05 }}
          >
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-3 rounded-xl shadow-lg">
              <div className="w-64 h-36 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center">
                <div className="w-48 h-12 relative">
                  {/* Placeholder for glasses image - replace with actual Image component */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-44 h-6 border-2 border-white rounded-full flex">
                      <div className="w-16 h-16 border-2 border-white rounded-full -mt-5"></div>
                      <div className="w-16 h-16 border-2 border-white rounded-full -mt-5 ml-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-white font-bold mt-2 text-center">Urban Collection</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute top-24 right-0"
            initial={{ y: 60, opacity: 0, rotate: 5 }}
            animate={{ y: 20, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ y: 10, scale: 1.05 }}
          >
            <div className="bg-gradient-to-r from-black to-gray-900 p-3 rounded-xl shadow-lg">
              <div className="w-64 h-36 bg-white/5 backdrop-blur-md rounded-lg flex items-center justify-center">
                <div className="w-48 h-12 relative">
                  {/* Placeholder for glasses image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-44 h-6 border-2 border-white rounded-full flex">
                      <div className="w-16 h-16 border-2 border-white rounded-full -mt-5"></div>
                      <div className="w-16 h-16 border-2 border-white rounded-full -mt-5 ml-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-white font-bold mt-2 text-center">Designer Series</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-0 left-20"
            initial={{ y: 80, opacity: 0, rotate: -5 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ y: -10, scale: 1.05 }}
          >
            <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-3 rounded-xl shadow-lg">
              <div className="w-64 h-36 bg-white/15 backdrop-blur-md rounded-lg flex items-center justify-center">
                <div className="w-48 h-12 relative">
                  {/* Placeholder for glasses image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-44 h-6 border-2 border-white rounded-full flex">
                      <div className="w-16 h-16 border-2 border-white rounded-full -mt-5"></div>
                      <div className="w-16 h-16 border-2 border-white rounded-full -mt-5 ml-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-white font-bold mt-2 text-center">Premium Selection</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full bg-white"
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-4 h-4 rounded-full bg-white"
        animate={{
          y: [0, -15, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      <motion.div
        className="absolute top-2/3 right-1/4 w-6 h-6 rounded-full bg-gray-400"
        animate={{
          y: [0, -25, 0],
          opacity: [0.15, 0.35, 0.15]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
};

export default LandingPageBanner;