"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import {lenses} from '@/LensData.json'


interface Props {
  onClose: () => void;
}

const LensSelector: React.FC<Props> = ({ onClose }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [animateDetails, setAnimateDetails] = useState(false);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    setAnimateDetails(true);
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-end z-50">
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 h-full bg-gradient-to-br from-white to-blue-50 shadow-2xl overflow-y-auto"
      >
        <div className="p-6 relative">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-indigo-900 flex items-center">
              <span className="text-3xl mr-2">🔍</span>
              Select Your Perfect Lens
            </h2>
            <button 
              onClick={onClose} 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-800 transition-colors"
            >
              &times;
            </button>
          </div>

          <div className="space-y-4 mb-8">
            {lenses?.map((lens:any, index:number) => (
              <motion.div
                key={lens.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative rounded-2xl p-5 cursor-pointer transition-all duration-300 ${
                  selectedIndex === index 
                    ? "bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg shadow-indigo-200" 
                    : "bg-white shadow hover:shadow-md"
                }`}
                onClick={() => handleSelect(index)}
              >
                <div className="flex items-start">
                  <div className="text-3xl mr-4">
                    {lens.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold ${selectedIndex === index ? "text-white" : "text-indigo-900"}`}>
                      {lens.name}
                    </h3>
                    <p className={`text-sm mt-1 ${selectedIndex === index ? "text-blue-100" : "text-gray-600"}`}>
                      {lens.description}
                    </p>
                  </div>
                  {selectedIndex === index && (
                    <CheckCircle className="h-6 w-6 text-white" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {selectedIndex !== null && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: animateDetails ? 1 : 0, y: animateDetails ? 0 : 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-6 rounded-2xl bg-white p-6 shadow-lg"
            >
              <h4 className="text-lg font-bold mb-4 text-indigo-900 flex items-center">
                <span className="bg-indigo-100 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-indigo-700">
                  ✓
                </span>
                Available Options
              </h4>
              
              <div className="space-y-4">
                {lenses[selectedIndex].data.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (i * 0.1) }}
                    className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-xl border border-indigo-100"
                  >
                    {Object.entries(item).map(([key, value], index) => (
                      <div key={key} className={`${index !== Object.entries(item).length - 1 ? "mb-3 pb-3 border-b border-indigo-100" : ""}`}>
                        <span className="text-sm font-medium text-indigo-500 block mb-1 capitalize">{key}</span>
                        <span className="text-gray-800">{value}</span>
                      </div>
                    ))}
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-end">
                <button className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-px">
                  Continue with Selection
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default LensSelector;