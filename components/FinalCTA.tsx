'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-deep-green via-dark-accent to-deep-green relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-highlight-green rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Label */}
          <p className="text-xs font-bold text-highlight-green uppercase tracking-wider mb-3">
            START WITH VIDUR
          </p>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Bring VIDUR Into Your Practice
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who trust VIDUR for their critical tax and legal work
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="px-6 py-3 bg-highlight-green text-dark-accent text-sm md:text-base font-semibold rounded-lg hover:bg-[#78bd41] transition-all duration-200 shadow-xl min-w-[180px]"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="px-6 py-3 bg-white text-deep-green text-sm md:text-base font-semibold rounded-lg hover:bg-soft-neutral transition-all duration-200 shadow-xl min-w-[180px]"
            >
              Book a Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
