'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Research Faster',
    image: '/icon-research-faster.png',
  },
  {
    title: 'Draft Smarter',
    image: '/icon-draft-smarter.png',
  },
  {
    title: 'Upload & Analysis Multiple Documents',
    image: '/icon-upload-analysis.png',
  },
  {
    title: 'No Fake Citations',
    image: '/icon-no-fake-citations.png',
  },
  {
    title: 'Case Brief & Timeline',
    image: '/icon-case-brief.png',
  },
  {
    title: 'Source Backed Knowledge',
    image: '/icon-source-backed.png',
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
              className="flex flex-col items-center justify-center text-center px-4 py-4 rounded-xl border border-gray-200 bg-[#fafafa] hover:border-deep-green/25 hover:shadow-md transition-all duration-300"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full max-w-[220px] h-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
