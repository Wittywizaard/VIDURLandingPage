'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#032d23] via-[#064d3f] via-[#0a6b57] via-[#0f7d64] via-[#1f9478] to-[#f8f9fa] relative overflow-hidden">
      {/* Enhanced decorative blur elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-emerald-700/15 to-teal-600/15 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-green-600/12 to-emerald-500/12 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-teal-500/8 via-emerald-600/8 to-green-500/8 rounded-full blur-[160px]"></div>
      </div>
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-transparent"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center"
        >
          {/* Section Label */}
          <p className="text-base md:text-lg font-bold text-white uppercase tracking-wider mb-4 drop-shadow-lg">
            START WITH VIDUR
          </p>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight max-w-4xl drop-shadow-2xl">
            Bring VIDUR Into Your Practice
          </h2>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="px-8 py-3 bg-white text-black text-lg font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-xl min-w-[200px]"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="px-8 py-3 bg-white text-black border-2 border-gray-200 text-lg font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-xl min-w-[200px]"
            >
              Book a Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
