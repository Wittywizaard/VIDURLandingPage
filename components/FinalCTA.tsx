'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#0a3d32] via-[#0D5649] via-[#1a6e5a] via-[#2d8b6f] via-[#4ca885] to-white relative overflow-hidden">
      {/* Subtle decorative blur elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-40 left-1/2 w-[500px] h-[500px] bg-emerald-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center"
        >
          {/* Section Label */}
          <p className="text-sm font-bold text-white uppercase tracking-widest mb-4">
            START WITH VIDUR
          </p>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Bring VIDUR Into Your Practice
          </h2>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="px-8 py-4 bg-white text-black text-base font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-xl min-w-[200px]"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 text-base font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 shadow-xl min-w-[200px]"
            >
              Book a Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
