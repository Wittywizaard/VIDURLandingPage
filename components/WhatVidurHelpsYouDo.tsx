'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Research Faster',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <circle cx="10" cy="10" r="6" />
        <path strokeLinecap="round" d="M15 15l5 5" />
        <circle cx="10" cy="10" r="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 8.5v3M8.5 10h3" />
      </svg>
    ),
  },
  {
    title: 'Draft Smarter',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 3.5h7.5L18 7v13.5H7V3.5z" />
        <path strokeLinecap="round" d="M9.5 10h6M9.5 13h6M9.5 16h3.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 16.5l3.2 1.2-.9 2.5-3.8-3.8 1.5.1z" />
      </svg>
    ),
  },
  {
    title: 'Upload & Analysis Multiple Documents',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 3.5h6.5L18 7v13.5H8V3.5z" />
        <path strokeLinecap="round" d="M10.5 9h4M10.5 15h4" />
        <path strokeLinecap="round" strokeWidth={2} d="M6.5 12h11" />
      </svg>
    ),
  },
  {
    title: 'No Fake Citations',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7.5 3.2v5.3c0 4.7-3.1 8.1-7.5 9.5-4.4-1.4-7.5-4.8-7.5-9.5V6.2L12 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.2l2.1 2.1 4-4" />
      </svg>
    ),
  },
  {
    title: 'Case Brief & Timeline',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 19.5h7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 19.5l2-6h4.5l2.5 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.5 4.5v5.5h5.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.5 10L18 4.5" />
      </svg>
    ),
  },
  {
    title: 'Source Backed Knowledge',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.2a2.8 2.8 0 012.8 2.8c0 1.1-.6 2-1.6 2.5V10h2V11.4H8.8V10h2V8.5A2.8 2.8 0 019.2 6 2.8 2.8 0 0112 3.2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 16c1.9-1.4 4.1-2.1 7-2.1s5.1.7 7 2.1V20.5H5V16z" />
        <path strokeLinecap="round" d="M12 15.5V20" />
      </svg>
    ),
  },
];

export default function WhatVidurHelpsYouDo() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-deep-green text-center mb-10 md:mb-12"
        >
          What VIDUR helps you do
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center px-4 py-6 rounded-xl border border-[#d4c4a8]/70 bg-white hover:border-deep-green/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-deep-green flex items-center justify-center mb-4 shadow-sm">
                {feature.icon}
              </div>
              <p className="text-sm md:text-base font-semibold text-black leading-snug max-w-[200px]">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
