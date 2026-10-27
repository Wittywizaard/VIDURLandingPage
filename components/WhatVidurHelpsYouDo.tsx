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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-deep-green flex items-center justify-center mb-4 shadow-sm">
                <img
                  src={feature.image}
                  alt=""
                  className="w-[55%] h-[55%] object-contain"
                />
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
