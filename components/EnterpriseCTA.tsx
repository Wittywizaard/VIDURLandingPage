'use client';

import { motion } from 'framer-motion';

export default function EnterpriseCTA() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left - Heading */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
                Trusted by Tax & Corporate Law professionals
              </h2>
            </div>
            
            {/* Right - Description and CTA */}
            <div>
              <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
                Get a personalized demo, and see how teams like yours research, draft, and advise with VIDUR.
              </p>
              <button className="bg-deep-green hover:bg-deep-green/90 text-white px-6 py-3 rounded-full text-base font-semibold transition-all inline-flex items-center gap-2">
                Book demo
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
