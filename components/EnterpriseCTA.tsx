'use client';

import { motion } from 'framer-motion';

export default function EnterpriseCTA() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Heading */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                Trusted by Tax & Corporate Law professionals
              </h2>
            </div>
            
            {/* Right - Description and CTA */}
            <div className="text-center lg:text-left">
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
