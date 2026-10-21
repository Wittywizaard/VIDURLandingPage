'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-deep-green via-dark-accent to-deep-green">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-accent/60 via-deep-green/40 to-dark-accent/80 z-10"></div>
        {/* Video placeholder - would be replaced with actual video */}
        <div className="w-full h-full bg-deep-green/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[1360px] mx-auto px-6 lg:px-8 py-32 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto lg:mx-0"
        >
          {/* Hero Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-hero-lg font-extrabold text-white mb-6 leading-tight">
            AI Built For Tax Work
          </h1>

          {/* Supporting Description */}
          <div className="space-y-4 mb-8">
            <p className="text-lg md:text-xl text-white/95 font-medium max-w-2xl">
              The sophisticated AI workspace trusted by 25,000+ tax and legal professionals across India.
            </p>
            
            {/* Trust Points */}
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start text-sm md:text-base text-white/90">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-highlight-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Source-backed research</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-highlight-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Professional knowledge</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-highlight-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Built for Indian practice</span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-highlight-green text-dark-accent text-base font-bold rounded-lg hover:bg-[#78bd41] transition-all duration-200 transform hover:translate-y-[-2px] shadow-lg">
              Try VIDUR
            </button>
            <button className="px-8 py-4 bg-white text-deep-green text-base font-bold rounded-lg hover:bg-soft-neutral transition-all duration-200 transform hover:translate-y-[-2px] shadow-lg">
              Schedule a Free Demo
            </button>
          </div>
        </motion.div>

        {/* Product Demo Video Area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-white/10">
            <div className="aspect-video bg-dark-accent/50 flex items-center justify-center">
              {/* Video placeholder */}
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-white/60 mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <p className="text-white/80 font-medium">Product Demonstration</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
