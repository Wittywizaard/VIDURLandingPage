'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function NewsTicker() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const newsItems = [
    'Latest Tax & Legal Updates 3 Crore Cross-Charge Demand Quashed',
    'FAQs on GST Law and procedures',
    'India - Mauritius Protocol Amendments',
    'Bombay HC Quashes Grasim\'s ₹329 Crore Tax Claim',
    'SEZ Rules Ease IFSC Fund and Leasing Requirements'
  ];

  // Triple for seamless loop
  const allItems = [...newsItems, ...newsItems, ...newsItems];

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 w-full bg-deep-green border-b border-deep-green/20"
      initial={{ opacity: 1, y: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -60
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-3 flex items-center gap-4">
          {/* Static Label with Blinking Dot */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <motion.div
              className="w-2 h-2 bg-highlight-green rounded-full"
              animate={{
                opacity: [1, 0.2, 1],
                scale: [1, 1.4, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="text-sm font-semibold text-white whitespace-nowrap">
              Latest Tax & News Updates
            </span>
          </div>

          {/* Scrolling News */}
          <div className="flex-1 overflow-hidden">
            <motion.div
              className="flex gap-12"
              animate={{
                x: [0, -100 / 3 + '%']
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }
              }}
            >
              {allItems.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 text-sm text-white/90 font-medium whitespace-nowrap"
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}







