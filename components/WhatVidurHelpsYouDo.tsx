'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Research Faster',
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        {/* Small gear */}
        <circle cx="16.5" cy="17" r="3.2" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M16.5 10.2v2.2M16.5 21.6v2.2M10 17h2.2M20.8 17H23M11.8 12.3l1.6 1.6M19.6 20.1l1.6 1.6M11.8 21.7l1.6-1.6M19.6 13.9l1.6-1.6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Magnifying glass */}
        <circle cx="29" cy="28" r="9" stroke="currentColor" strokeWidth="2.3" />
        <path d="M35.5 34.5L42.5 41.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Draft Smarter',
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        {/* Document */}
        <path
          d="M12 6.5h16.5L37 15v26.5H12V6.5z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M28.5 6.5V15H37" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M17 20h12M17 25.5h12M17 31h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        {/* Pencil */}
        <path
          d="M27 33.5l9.5-9.5 3.2 3.2-9.5 9.5-3.8.6.6-3.8z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M34.2 26.3l3.2 3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Upload & Analysis Multiple Documents',
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        {/* Scan corner brackets */}
        <path d="M8 16V10h6M40 16V10h-6M8 32v6h6M40 32v6h-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Document */}
        <path
          d="M16 12h11l7 7v17H16V12z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M27 12v7h7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M20.5 24h9M20.5 28.5h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        {/* Scan line */}
        <path d="M10 24h28" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'No Fake Citations',
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M24 5l14 5.5v11c0 9.2-6.1 15.8-14 18.5C16.1 37.3 10 30.7 10 21.5v-11L24 5z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 23.5l4.2 4.2 9-9"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Case Brief & Timeline',
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        {/* Gavel head (angled) */}
        <path
          d="M8.5 18.5l12-8.5 4.2 6-12 8.5-4.2-6z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Handle */}
        <path d="M22 19L37.5 34.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        {/* Sounding block */}
        <path d="M9 39h20" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M12 34.5h14V39H12z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Source Backed Knowledge',
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        {/* Lightbulb */}
        <path
          d="M24 5.5a7.5 7.5 0 015.3 12.8c-.9.9-1.5 2-1.8 3.2h-7c-.3-1.2-.9-2.3-1.8-3.2A7.5 7.5 0 0124 5.5z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M19.8 24.5h8.4M20.5 27.5h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        {/* Open book */}
        <path
          d="M8 40.5V31c3.5-2 7.2-3 10.8-3 1.8 0 3.6.3 5.2.8V40c-1.7-.6-3.5-.9-5.2-.9-3.6 0-7.3 1-10.8 3z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M40 40.5V31c-3.5-2-7.2-3-10.8-3-1.8 0-3.6.3-5.2.8V40c1.7-.6 3.5-.9 5.2-.9 3.6 0 7.3 1 10.8 3z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M24 28.8V40" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
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
              className="flex flex-col items-center text-center px-5 py-7 rounded-xl border border-gray-200 bg-[#fafafa] hover:border-deep-green/25 hover:shadow-md transition-all duration-300"
            >
              <div className="w-[72px] h-[72px] md:w-20 md:h-20 rounded-full bg-deep-green flex items-center justify-center mb-4 shadow-sm">
                {feature.icon}
              </div>
              <p className="text-sm md:text-base font-semibold text-black leading-snug max-w-[210px]">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
