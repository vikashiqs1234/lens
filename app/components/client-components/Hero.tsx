"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Premium Prescription Glasses",
    description: "Explore our wide range of high-quality prescription glasses with a SPECIAL 20% DISCOUNT on all prescription lenses. Expert vision care that's affordable!",
    image: "/images/banner-3.png",
    cta: "Save 20% Now",
    alt: "Collection of premium prescription glasses frames"
  },
  {
    id: 2,
    title: "Welcome to VisionHub Eyewear",
    description: "Experience unmatched comfort, crystal clarity, and modern style. Find your perfect pair of glasses with our expert guidance.",
    image: "/images/banner-4.png",
    cta: "Discover Our Collection",
    alt: "VisionHub eyewear shop showcase featuring stylish glasses"
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto slide change with pause on hover
  useEffect(() => {
    if (!isAutoPlaying || isHovering) return;
    
    const timer = setInterval(goToNextSlide, 6000);
    return () => clearInterval(timer);
  }, [goToNextSlide, isAutoPlaying, isHovering]);

  return (
    <section 
      aria-label="Featured eyewear collections"
      className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden  bg-black"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background container (always black) */}
      <div className="absolute inset-0 bg-black z-0"></div>
      
      {/* Slides with absolute positioning */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={slides[currentSlide].id}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Image with overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].alt}
                className="w-full h-full object-cover"
                loading={currentSlide === 0 ? "eager" : "lazy"}
              />
              {/* Dark overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-2xl pl-[60px]">
                  <motion.h2 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
                  >
                    {slides[currentSlide].title}
                  </motion.h2>
                  
                  <motion.p 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 max-w-lg"
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <a 
                      href={`/collections/${slides[currentSlide].id}`}
                      className="inline-block px-6 py-4 bg-white text-black text-lg font-medium rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
                    >
                      {slides[currentSlide].cta}
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <div className="absolute inset-y-0 left-0 flex items-center z-30">
        <button 
          onClick={goToPrevSlide}
          className="ml-4 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all transform hover:scale-110 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} />
        </button>
      </div>
      
      <div className="absolute inset-y-0 right-0 flex items-center z-30">
        <button 
          onClick={goToNextSlide}
          className="mr-4 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all transform hover:scale-110 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {slides.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className="group focus:outline-none"
            aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
          >
            <div className="w-12 h-1 rounded-full transition-all duration-300 ease-in-out relative overflow-hidden">
              <div className="absolute inset-0 bg-white/40 group-hover:bg-white/60" />
              <motion.div 
                className="absolute inset-0 bg-white"
                initial={idx === currentSlide ? { width: "0%" } : { width: "0%" }}
                animate={idx === currentSlide ? 
                  { width: "100%" } : 
                  { width: "0%" }
                }
                transition={idx === currentSlide ? 
                  { duration: 6, ease: "linear" } : 
                  { duration: 0.3 }
                }
                key={`progress-${currentSlide}-${idx}`}
              />
            </div>
          </button>
        ))}
      </div>

      {/* Auto-play toggle */}
      <button 
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-6 right-6 z-30 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white text-xs backdrop-blur-sm"
        aria-label={isAutoPlaying ? "Pause automatic slideshow" : "Play automatic slideshow"}
      >
        {isAutoPlaying ? "Pause" : "Play"}
      </button>
    </section>
  );
};

export default Hero;