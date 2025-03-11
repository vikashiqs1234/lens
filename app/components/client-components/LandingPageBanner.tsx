"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LandingPageBanner = () => {
  // Animation variants for the main container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3, // Stagger the animation of children
      },
    },
  };

  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for the buttons
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        yoyo: Infinity, // Oscillate between the two states
      },
    },
    tap: { scale: 0.95 },
  };

  // Animation variants for the glasses display
  const glassesVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Animation variants for floating elements
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.2, 0.4, 0.2],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="relative w-full h-[80vh] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
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
          variants={textVariants}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            variants={textVariants}
          >
            See the World <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              in Timeless Style
            </span>
          </motion.h1>

          <motion.p
            className="text-xl mb-8 max-w-lg text-gray-300"
            variants={textVariants}
          >
            Discover our collection of designer frames that blend elegance with function.
            Express yourself with classic designs that elevate your presence.
          </motion.p>

          <motion.div
            className="flex space-x-4"
            variants={buttonVariants}
          >
            <motion.button
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:shadow-lg transition-all"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Shop Collection
            </motion.button>

            <motion.button
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Virtual Try-On
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right side - Glasses Display */}
        <motion.div
          className="relative md:w-1/2 h-96 mt-16 md:mt-0 z-10"
          variants={glassesVariants}
        >
          <motion.div
            className="absolute top-0 left-10"
            variants={glassesVariants}
            whileHover="hover"
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
            variants={glassesVariants}
            whileHover="hover"
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
            variants={glassesVariants}
            whileHover="hover"
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
        variants={floatingVariants}
        animate="animate"
      />

      <motion.div
        className="absolute bottom-1/4 right-1/3 w-4 h-4 rounded-full bg-white"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      />

      <motion.div
        className="absolute top-2/3 right-1/4 w-6 h-6 rounded-full bg-gray-400"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />
    </motion.div>
  );
};

export default LandingPageBanner;
