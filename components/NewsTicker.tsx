'use client';

import { motion } from 'framer-motion';

export default function NewsTicker() {
  const newsItems = [
    {
      id: 1,
      text: 'Latest Tax & Legal Updates 3 Crore Cross-Charge Demand Quashed',
    },
    {
      id: 2,
      text: 'FAQs on GST Law and procedures',
    },
    {
      id: 3,
      text: 'India - Mauritius Protocol Amendments',
    },
    {
      id: 4,
      text: 'Bombay HC Quashes Grasim\'s ₹329 Crore Tax Claim',
    },
    {
      id: 5,
      text: 'SEZ Rules Ease IFSC Fund and Leasing Requirements',
    }
  ];

  // Triple the items for seamless infinite scroll
  const allItems = [...newsItems, ...newsItems, ...newsItems];

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-white">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-3 overflow-hidden">
          {/* Blinking Green Indicator */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2 z-20">
            <motion.div
              className="w-2.5 h-2.5 md:w-3 md:h-3 bg-highlight-green rounded-full"
              animate={{
                opacity: [1, 0.3, 1],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="overflow-hidden pl-8">
            <motion.div
              className="flex gap-8 md:gap-12"
              animate={{
                x: [0, -100 / 3 + '%']
              }}
              transition={{
                x: {
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }
              }}
            >
              {allItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex-shrink-0 flex items-center gap-3"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 text-deep-green">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                    </svg>
                  </div>
                  {/* News text */}
                  <span className="text-sm md:text-base text-gray-700 font-medium whitespace-nowrap">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}





