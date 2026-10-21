'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-soft-neutral rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-soft-neutral rounded-full filter blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[1360px] mx-auto px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Headline - 2 Lines */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-hero-lg font-extrabold text-deep-green mb-6 leading-tight">
            AI Built
            <br />
            For Tax Work
          </h1>

          {/* Supporting Description */}
          <div className="space-y-4 mb-8">
            <p className="text-lg md:text-xl text-deep-green/80 font-medium max-w-2xl mx-auto">
              For CAs, CSs and tax professionals: research, analyse, draft and advise.
            </p>
            
            {/* Trust Points */}
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center text-sm md:text-base text-deep-green/70">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-highlight-green text-white text-base font-bold rounded-lg hover:bg-[#78bd41] transition-all duration-200 transform hover:translate-y-[-2px] shadow-lg">
              Try VIDUR
            </button>
            <button className="px-8 py-4 bg-white text-deep-green text-base font-bold rounded-lg hover:bg-soft-neutral transition-all duration-200 transform hover:translate-y-[-2px] shadow-lg border-2 border-deep-green/20">
              Book a personalized demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
