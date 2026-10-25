'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#0a4a3a] via-[#0f6e5c] to-white relative overflow-hidden">
      {/* Subtle decorative blur elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-40 w-[600px] h-[600px] bg-emerald-300 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-40 left-40 w-[600px] h-[600px] bg-teal-200 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center"
        >
          {/* Section Label */}
          <p className="text-base md:text-lg font-bold text-white uppercase tracking-wider mb-4">
            START WITH VIDUR
          </p>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight max-w-4xl">
            Bring VIDUR Into Your Practice
          </h2>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 25px 60px rgba(255, 255, 255, 0.35)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="px-8 py-3 bg-white text-black text-lg font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-2xl min-w-[200px]"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 25px 60px rgba(255, 255, 255, 0.25)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="px-8 py-3 bg-white/15 backdrop-blur-md text-white border-2 border-white/40 text-lg font-bold rounded-xl hover:bg-white/25 hover:border-white/60 transition-all duration-300 shadow-2xl min-w-[200px]"
            >
              Book a Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
