'use client';

import { motion } from 'framer-motion';

export default function NewsTicker() {
  const newsItems = [
    {
      id: 1,
      text: 'Amul\'s ₹43.43 Crore Cross-Charge Demand Quashed',
      icon: (
        <svg className="w-7 h-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
      )
    },
    {
      id: 2,
      text: 'FAQs on GST Law and procedures',
      icon: (
        <svg className="w-7 h-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
      )
    },
    {
      id: 3,
      text: 'India - Mauritius Protocol Amendments',
      icon: (
        <svg className="w-7 h-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      )
    },
    {
      id: 4,
      text: 'Bombay HC Quashes Grasim\'s ₹329 Crore Tax Claim',
      icon: (
        <svg className="w-7 h-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 14h2v-2h-2v2zm0-4h2V7h-2v5z"/>
        </svg>
      )
    },
    {
      id: 5,
      text: 'SEZ Rules Ease IFSC Fund and Leasing Requirements',
      icon: (
        <svg className="w-7 h-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
        </svg>
      )
    }
  ];

  // Triple the items for seamless infinite scroll
  const allItems = [...newsItems, ...newsItems, ...newsItems];

  return (
    <div className="w-full bg-gradient-to-r from-gray-50 via-white to-gray-50 border-y border-gray-200/50 shadow-sm py-3 overflow-hidden">
      <div className="relative">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4"
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
                key={`${item.id}-${index}`}
                className="flex-shrink-0 bg-white border border-gray-200/80 rounded-lg px-4 py-2.5 flex items-center gap-3 hover:border-deep-green/30 hover:shadow-md transition-all duration-300 min-w-[300px]"
              >
                {/* Icon with VIDUR green color */}
                <div className="flex-shrink-0 text-deep-green">
                  {item.icon}
                </div>
                {/* News text - single line */}
                <span className="text-sm text-gray-700 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}


