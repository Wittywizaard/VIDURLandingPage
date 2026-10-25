'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-deep-green via-dark-accent to-deep-green relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-highlight-green rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Label */}
          <p className="text-sm font-bold text-highlight-green uppercase tracking-wider mb-4">
            START WITH VIDUR
          </p>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight max-w-3xl mx-auto">
            Bring VIDUR Into Your Practice
          </h2>

          {/* Description */}
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of professionals who trust VIDUR for their critical tax and legal work
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-highlight-green text-dark-accent text-lg font-bold rounded-xl hover:bg-[#78bd41] transition-all duration-200 shadow-2xl min-w-[200px]"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-deep-green text-lg font-bold rounded-xl hover:bg-soft-neutral transition-all duration-200 shadow-2xl min-w-[200px]"
            >
              Book a Demo
            </motion.button>
          </div>

          {/* Trust indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-white/80"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-highlight-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Setup in minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-highlight-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Cancel anytime</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
