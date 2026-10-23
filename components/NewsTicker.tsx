'use client';

import { motion } from 'framer-motion';

export default function NewsTicker() {
  const newsItems = [
    {
      id: 1,
      text: 'GSTAT Upholds ITC Denial for Lack of Supplier Tax Payment Proof',
      icon: (
        <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
      )
    },
    {
      id: 2,
      text: 'Income-tax (Seventh Amendment) Rules, 2026',
      icon: (
        <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
      )
    },
    {
      id: 3,
      text: 'Bombay HC Quashes Grasim\'s ₹329 Crore Tax Claim',
      icon: (
        <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 14h2v-2h-2v2zm0-4h2V7h-2v5z"/>
        </svg>
      )
    },
    {
      id: 4,
      text: 'SEZ Rules Ease IFSC Fund and Leasing Requirements',
      icon: (
        <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      )
    },
    {
      id: 5,
      text: 'Rules Govern Court-Fee Penalties and Appeals',
      icon: (
        <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
        </svg>
      )
    }
  ];

  // Duplicate items for seamless loop
  const duplicatedItems = [...newsItems, ...newsItems, ...newsItems];

  return (
    <div className="w-full bg-gradient-to-r from-soft-neutral via-white to-soft-neutral border-b border-gray-200/50 shadow-sm overflow-hidden">
      <div className="relative">
        {/* Scrolling container */}
        <div className="flex items-center py-3">
          <motion.div
            className="flex items-center gap-12 whitespace-nowrap"
            animate={{
              x: [0, -100 / 3 + '%']
            }}
            transition={{
              x: {
                duration: 60,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {duplicatedItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex items-center gap-3 px-4"
              >
                {/* Icon with brand color */}
                <div className="flex-shrink-0 text-deep-green">
                  {item.icon}
                </div>
                {/* News text */}
                <span className="text-sm md:text-base text-gray-700 font-medium">
                  {item.text}
                </span>
                {/* Separator */}
                <div className="w-1 h-1 bg-highlight-green rounded-full flex-shrink-0 ml-8"></div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-soft-neutral to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-soft-neutral to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
}
