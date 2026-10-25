'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const phrases = ['CA Work', 'CS Work', 'Tax Work'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % phrases.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-soft-neutral/30 to-white pt-8">
      {/* Premium background patterns */}
      <div className="absolute inset-0 opacity-40">
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-deep-green/20 to-highlight-green/20 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-highlight-green/20 to-deep-green/20 rounded-full filter blur-3xl"
        />
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="premium-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0D5649" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#premium-grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          {/* Announcement Banner - Compact */}
          <motion.a
            href="#api"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer text-sm"
          >
            <span className="text-base">🚀</span>
            <span className="font-semibold text-black">
              VIDUR APIs Are Now Live!
            </span>
            <span className="text-black/60">
              Your Platform. VIDUR's Intelligence
            </span>
            <svg className="w-4 h-4 text-deep-green group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>

          {/* Hero Headline */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block text-deep-green">
              AI Built For
            </span>
            <span className="block text-deep-green">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="inline-block"
                >
                  {phrases[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          {/* CTA Buttons - Synthesia Style */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-deep-green hover:bg-deep-green/90 text-white px-6 py-3.5 rounded-full text-base font-medium transition-all inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[200px] shadow-lg"
            >
              Try VIDUR
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white hover:bg-gray-50 text-black border-2 border-gray-200 px-6 py-3.5 rounded-full text-base font-medium transition-all inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[200px]"
            >
              Book a free demo
            </motion.button>
          </motion.div>

          {/* Trust Points - Centered without icons */}
          <motion.div 
            className="flex flex-wrap gap-6 md:gap-8 justify-center text-xs md:text-sm text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {['Trusted', 'Updated', 'Reliable'].map((text, idx) => (
              <motion.div 
                key={idx}
                className="font-normal"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
              >
                {text}
              </motion.div>
            ))}
          </motion.div>

          {/* Trusted Professionals & Marquee Clients - Under Trust Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-12 md:mt-16 w-full"
          >
            <div className="flex flex-col gap-6">
              {/* Client Logos - Clean Horizontal Layout */}
              <div className="w-full pt-6">
                <div className="flex flex-col items-center gap-4">
                  {/* Label centered above */}
                  <span className="text-xs font-medium text-black/60 uppercase tracking-wider">
                    Trusted by 25000+ Professionals
                  </span>
                  
                  {/* Sliding Logos */}
                  <div className="w-full overflow-hidden">
                    <motion.div
                      className="flex items-center gap-8"
                      animate={{
                        x: [0, '-50%']
                      }}
                      transition={{
                        x: {
                          duration: 25,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop"
                        }
                      }}
                    >
                      {/* First set of logos */}
                      {[
                        { src: '/logos/icai-new.png', alt: 'ICAI', height: 'h-12' },
                        { src: '/logos/aditya-birla-new.png', alt: 'Aditya Birla Group', height: 'h-12' },
                        { src: '/logos/kotak-new.png', alt: 'Kotak', height: 'h-12' },
                        { src: '/logos/bharat-new.png', alt: 'Bharat', height: 'h-10' },
                        { src: '/logos/nexedge-new.png', alt: 'Nexedge', height: 'h-10' },
                        { src: '/logos/one36-new.png', alt: 'One36', height: 'h-10' },
                        { src: '/logos/icsi-new.png', alt: 'ICSI', height: 'h-12' },
                        { src: '/logos/balakrishna-new.png', alt: 'Balakrishna and Co', height: 'h-14' },
                        { src: '/logos/baveja-gupta-new.png', alt: 'Baveja Gupta & Co', height: 'h-10' },
                        { src: '/logos/beetaone-new.png', alt: 'Beetaone Fintax', height: 'h-10' },
                        { src: '/logos/chhawchharia-new.png', alt: 'B Chhawchharia & Co', height: 'h-10' },
                        { src: '/logos/aanand-new.png', alt: 'Aanand & Co', height: 'h-10' },
                        { src: '/logos/agh-new.png', alt: 'AGH & Associates', height: 'h-10' },
                        { src: '/logos/ats-new.png', alt: 'ATS & Co', height: 'h-12' },
                        { src: '/logos/sreenivasa-rao-new.png', alt: 'A. Sreenivasa Rao & Associates', height: 'h-10' },
                        { src: '/logos/aabk-new.png', alt: 'AABK & Associates', height: 'h-10' },
                        { src: '/logos/alam-new.png', alt: 'Alam & Associates', height: 'h-12' },
                        { src: '/logos/alpha-academy-new.png', alt: 'Alpha Academy', height: 'h-10' }
                      ].concat([
                        { src: '/logos/icai-new.png', alt: 'ICAI', height: 'h-12' },
                        { src: '/logos/aditya-birla-new.png', alt: 'Aditya Birla Group', height: 'h-12' },
                        { src: '/logos/kotak-new.png', alt: 'Kotak', height: 'h-12' },
                        { src: '/logos/bharat-new.png', alt: 'Bharat', height: 'h-10' },
                        { src: '/logos/nexedge-new.png', alt: 'Nexedge', height: 'h-10' },
                        { src: '/logos/one36-new.png', alt: 'One36', height: 'h-10' },
                        { src: '/logos/icsi-new.png', alt: 'ICSI', height: 'h-12' },
                        { src: '/logos/balakrishna-new.png', alt: 'Balakrishna and Co', height: 'h-14' },
                        { src: '/logos/baveja-gupta-new.png', alt: 'Baveja Gupta & Co', height: 'h-10' },
                        { src: '/logos/beetaone-new.png', alt: 'Beetaone Fintax', height: 'h-10' },
                        { src: '/logos/chhawchharia-new.png', alt: 'B Chhawchharia & Co', height: 'h-10' },
                        { src: '/logos/aanand-new.png', alt: 'Aanand & Co', height: 'h-10' },
                        { src: '/logos/agh-new.png', alt: 'AGH & Associates', height: 'h-10' },
                        { src: '/logos/ats-new.png', alt: 'ATS & Co', height: 'h-12' },
                        { src: '/logos/sreenivasa-rao-new.png', alt: 'A. Sreenivasa Rao & Associates', height: 'h-10' },
                        { src: '/logos/aabk-new.png', alt: 'AABK & Associates', height: 'h-10' },
                        { src: '/logos/alam-new.png', alt: 'Alam & Associates', height: 'h-12' },
                        { src: '/logos/alpha-academy-new.png', alt: 'Alpha Academy', height: 'h-10' }
                      ]).map((logo, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 flex items-center justify-center transition-opacity duration-300 opacity-70 hover:opacity-100"
                        >
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            className={`${logo.height} w-auto object-contain`}
                          />
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Premium bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
