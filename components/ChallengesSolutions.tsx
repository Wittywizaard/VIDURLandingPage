'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ChallengesSolutions() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const comparisons = [
    {
      challenge: 'Generic AI responses without legal authority',
      solution: 'Every VIDUR response includes verified source citations from authoritative legal and tax publications'
    },
    {
      challenge: 'Outdated information from general AI models',
      solution: 'Real-time access to current Indian tax laws, regulations, and professional guidance'
    },
    {
      challenge: 'No understanding of Indian practice context',
      solution: 'Purpose-built for Indian CA, CS, and legal professional workflows and requirements'
    },
    {
      challenge: 'Security concerns with sensitive client data',
      solution: 'Enterprise-grade security with role-based access and confidential data handling'
    },
    {
      challenge: 'Complex tools requiring extensive training',
      solution: 'Intuitive interface designed specifically for professional tax and legal work'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-soft-neutral/30">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-deep-green mb-3">
            AI Should Help, Not Create Risk
          </h2>
          <p className="text-sm md:text-base text-black max-w-2xl mx-auto">
            See how VIDUR addresses the everyday challenges professionals face with generic AI tools
          </p>
        </motion.div>

        {/* Desktop: Two-Column Comparison */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {/* Left Panel: Challenges */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-deep-green/5"
          >
            <h3 className="text-xs md:text-sm font-bold text-deep-green/50 uppercase tracking-wider mb-6">
              THE EVERYDAY CHALLENGE
            </h3>
            <div className="space-y-3">
              {comparisons.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 ${
                    selectedIndex === index
                      ? 'bg-gradient-to-r from-highlight-green/5 to-deep-green/5 shadow-md border-2 border-highlight-green/40'
                      : 'bg-transparent border-2 border-transparent hover:bg-soft-neutral/30 hover:border-deep-green/10'
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`flex-shrink-0 w-6 h-6 rounded-full mt-0.5 flex items-center justify-center transition-all duration-300 ${
                        selectedIndex === index 
                          ? 'bg-highlight-green shadow-lg shadow-highlight-green/30' 
                          : 'bg-deep-green/10'
                      }`}
                      animate={selectedIndex === index ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {selectedIndex === index && (
                        <motion.svg 
                          className="w-3.5 h-3.5 text-white" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </motion.svg>
                      )}
                    </motion.div>
                    <p className={`text-sm md:text-base font-medium leading-relaxed ${selectedIndex === index ? 'text-deep-green' : 'text-deep-green/60'}`}>
                      {item.challenge}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right Panel: Solutions */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-deep-green via-deep-green to-dark-accent rounded-3xl p-8 md:p-10 text-white shadow-2xl overflow-hidden"
          >
            {/* Premium background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-40 h-40 bg-highlight-green rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-xs md:text-sm font-bold text-white/70 uppercase tracking-wider mb-8">
                WHAT VIDUR CHANGES
              </h3>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border-2 border-white/20 shadow-xl">
                    <div className="flex items-start gap-4 md:gap-5">
                      <motion.div 
                        className="flex-shrink-0"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 200,
                          damping: 15
                        }}
                      >
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-highlight-green rounded-full flex items-center justify-center shadow-lg shadow-highlight-green/30">
                          <svg className="w-6 h-6 md:w-7 md:h-7 text-deep-green" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </motion.div>
                      <div className="flex-1 pt-1">
                        <p className="text-base md:text-lg font-medium leading-relaxed">
                          {comparisons[selectedIndex].solution}
                        </p>
                      </div>
                    </div>

                    {/* Premium animated underline */}
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="h-1 bg-gradient-to-r from-highlight-green via-highlight-green/50 to-transparent mt-6 rounded-full origin-left"
                    />
                  </div>

                  {/* Floating indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute -bottom-3 right-6 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-medium"
                  >
                    {selectedIndex + 1} of {comparisons.length}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Mobile: Stacked Pairs */}
        <div className="lg:hidden space-y-4 md:space-y-6">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-deep-green/10"
            >
              {/* Challenge */}
              <div className="bg-white p-5 md:p-6">
                <p className="text-xs font-bold text-deep-green/50 uppercase tracking-wider mb-2">
                  Challenge
                </p>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-deep-green/10 mt-0.5"></div>
                  <p className="text-sm md:text-base font-medium text-deep-green">{item.challenge}</p>
                </div>
              </div>
              
              {/* Solution */}
              <div className="bg-gradient-to-br from-deep-green to-dark-accent p-5 md:p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-highlight-green rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10">
                  <p className="text-xs font-bold text-white/60 uppercase tracking-wider mb-3">
                    VIDUR Solution
                  </p>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-highlight-green rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-deep-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base font-medium leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
