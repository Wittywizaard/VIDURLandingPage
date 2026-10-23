'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function NewsTicker() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up or at top
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
      className="fixed top-20 left-0 right-0 z-40 w-full bg-soft-neutral/30 border-b border-gray-100"
      initial={{ opacity: 1, y: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -20
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="w-full overflow-hidden">
        <div className="relative py-3 flex items-center justify-center">
          {/* Blinking Dot */}
          <div className="absolute left-4 md:left-8 flex items-center gap-2">
            <motion.div
              className="w-2 h-2 bg-highlight-green rounded-full"
              animate={{
                opacity: [1, 0.3, 1],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Centered Scrolling News */}
          <div className="max-w-4xl overflow-hidden">
            <motion.div
              className="flex gap-12"
              animate={{
                x: [0, -100 / 3 + '%']
              }}
              transition={{
                x: {
                  duration: 50,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }
              }}
            >
              {allItems.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 text-sm text-gray-600 font-medium whitespace-nowrap"
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







