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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-soft-neutral/30 to-white">
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
      <div className="relative z-20 max-w-[1360px] mx-auto px-6 lg:px-8 py-40 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto mt-16"
        >
          {/* Announcement Banner */}
          <motion.a
            href="#api"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="inline-flex items-center gap-3 bg-white border border-deep-green/20 rounded-full px-6 py-3 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <span className="text-xl">🚀</span>
            <span className="text-sm md:text-base font-semibold text-deep-green">
              VIDUR APIs Are Now Live!
            </span>
            <span className="text-sm md:text-base text-deep-green/70 hidden sm:inline">
              Your Platform. VIDUR's Intelligence
            </span>
            <span className="text-sm font-bold text-highlight-green group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Explore Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </motion.a>

          {/* Hero Headline - Premium styling with rotating text */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block bg-gradient-to-r from-deep-green via-deep-green to-highlight-green bg-clip-text text-transparent">
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

          {/* Premium CTAs with enhanced shadows */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-gradient-primary group inline-flex items-center justify-center gap-2 w-full sm:w-64 shadow-xl"
            >
              Try VIDUR
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-gradient-secondary group inline-flex items-center justify-center gap-2 w-full sm:w-64 shadow-lg"
            >
              Book a free demo
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.button>
          </motion.div>

          {/* Premium Trust Points */}
          <motion.div 
            className="flex flex-wrap gap-6 md:gap-8 justify-center text-sm md:text-base text-deep-green/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {[
              { 
                text: 'Trusted',
                icon: (
                  <svg className="w-5 h-5 text-highlight-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )
              },
              { 
                text: 'Updated',
                icon: (
                  <svg className="w-5 h-5 text-highlight-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                )
              },
              { 
                text: 'Reliable',
                icon: (
                  <svg className="w-5 h-5 text-highlight-green" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                )
              }
            ].map((point, idx) => (
              <motion.div 
                key={idx}
                className="flex items-center gap-2 hover-lift cursor-default"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {point.icon}
                </motion.div>
                <span className="font-medium">{point.text}</span>
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
              {/* Centered heading with image styling */}
              <h3 className="text-sm md:text-base font-light text-gray-400 text-center uppercase tracking-[0.25em]">
                Trusted by 5K+ Tax Professionals in India
              </h3>

              {/* Left-aligned Marquee Clients label with scrolling logos */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                {/* Marquee Clients label on the left */}
                <div className="flex-shrink-0">
                  <h4 className="text-base md:text-lg font-bold text-deep-green whitespace-nowrap">
                    Marquee Clients
                  </h4>
                </div>

                {/* Scrolling Logos */}
                <div className="flex-1 overflow-hidden">
                  <div className="relative">
                    {/* Infinite scrolling logos */}
                    <div className="flex items-center gap-8 md:gap-12 animate-scroll-hero">
                      {[
                        'Kotak', 'Bharat', 'Nexedge', 'Wealth ONE 360', 'ICSI', 'Aditya Birla Group',
                        'Kotak', 'Bharat', 'Nexedge', 'Wealth ONE 360', 'ICSI', 'Aditya Birla Group',
                        'Kotak', 'Bharat', 'Nexedge', 'Wealth ONE 360', 'ICSI', 'Aditya Birla Group'
                      ].map((logo, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 flex items-center justify-center"
                        >
                          <span className="text-base md:text-xl font-black text-black whitespace-nowrap tracking-tight hover:scale-110 transition-transform duration-300 cursor-pointer">
                            {logo}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Gradient overlays for smooth edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white via-white to-transparent pointer-events-none z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white via-white to-transparent pointer-events-none z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <style jsx>{`
            @keyframes scrollHero {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-100% / 3));
              }
            }
            
            .animate-scroll-hero {
              display: flex;
              animation: scrollHero 40s linear infinite;
              width: fit-content;
            }
            
            .animate-scroll-hero:hover {
              animation-play-state: paused;
            }
          `}</style>
        </motion.div>
      </div>

      {/* Premium bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
