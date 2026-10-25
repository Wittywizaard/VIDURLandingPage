'use client';

import { motion } from 'framer-motion';

export default function BookDemo() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-deep-green via-deep-green to-dark-accent rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden"
        >
          {/* Premium background patterns */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 right-0 w-96 h-96 bg-highlight-green rounded-full filter blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"
            />
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="demo-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#demo-grid)" />
            </svg>
          </div>

          {/* Content Grid */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                  Book a Demo in{' '}
                  <span className="text-highlight-green">2 Minutes</span>
                </h2>
              </motion.div>
            </div>

            {/* Right: CTA Button */}
            <div className="flex items-center justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="w-full lg:w-auto"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full lg:w-auto bg-white text-deep-green px-8 md:px-10 lg:px-12 py-5 md:py-6 rounded-2xl font-bold text-base md:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
                >
                  {/* Animated background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-highlight-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <span>Book My Demo</span>
                    <motion.svg 
                      className="w-5 h-5 md:w-6 md:h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </span>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
