'use client';

import { motion } from 'framer-motion';

export default function BookDemo() {
  return (
    <section className="py-24 bg-gradient-to-br from-deep-green via-dark-accent to-deep-green relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-highlight-green rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-section-lg font-bold text-white mb-6">
            Book a Demo in 2 Minutes
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            See how VIDUR transforms professional tax and legal work. Schedule a personalized demonstration with our team.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-highlight-green text-dark-accent text-lg font-bold rounded-xl hover:bg-[#78bd41] transition-all duration-200 shadow-2xl inline-flex items-center gap-3"
          >
            Book My Demo
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
