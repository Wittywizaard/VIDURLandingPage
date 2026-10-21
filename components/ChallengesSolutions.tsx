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
    <section className="py-24 bg-white">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-section-lg font-bold text-deep-green mb-4">
            AI Should Help, Not Create Risk
          </h2>
          <p className="text-lg text-deep-green/80 max-w-3xl mx-auto">
            See how VIDUR addresses the everyday challenges professionals face with generic AI tools
          </p>
        </motion.div>

        {/* Desktop: Two-Column Comparison */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {/* Left Panel: Challenges */}
          <div className="bg-soft-neutral rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-deep-green mb-6 pb-4 border-b-2 border-deep-green/10">
              THE EVERYDAY CHALLENGE
            </h3>
            <div className="space-y-3">
              {comparisons.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    selectedIndex === index
                      ? 'bg-white shadow-lg border-2 border-highlight-green/50'
                      : 'bg-white/50 border-2 border-transparent hover:border-deep-green/20 hover:shadow-md'
                  }`}
                  whileHover={{ x: selectedIndex === index ? 0 : 4 }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-full mt-1 flex items-center justify-center ${
                        selectedIndex === index ? 'bg-highlight-green' : 'bg-deep-green/20'
                      }`}
                    >
                      {selectedIndex === index && (
                        <svg className="w-4 h-4 text-dark-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <p className={`font-medium ${selectedIndex === index ? 'text-deep-green' : 'text-deep-green/70'}`}>
                      {item.challenge}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Panel: Solutions */}
          <div className="bg-gradient-to-br from-deep-green to-dark-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 pb-4 border-b-2 border-white/20">
              WHAT VIDUR CHANGES
            </h3>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-highlight-green/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-highlight-green rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-dark-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-medium leading-relaxed">
                      {comparisons[selectedIndex].solution}
                    </p>
                  </div>
                </div>

                {/* Connecting line animation */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="h-0.5 bg-highlight-green/50 mt-6 origin-left"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: Stacked Pairs */}
        <div className="lg:hidden space-y-6">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border-2 border-deep-green/10"
            >
              {/* Challenge */}
              <div className="bg-soft-neutral p-6">
                <p className="text-xs font-bold text-deep-green/60 uppercase tracking-wider mb-2">
                  Challenge
                </p>
                <p className="font-medium text-deep-green">{item.challenge}</p>
              </div>
              
              {/* Solution */}
              <div className="bg-gradient-to-br from-deep-green to-dark-accent p-6 text-white">
                <p className="text-xs font-bold text-white/60 uppercase tracking-wider mb-2">
                  VIDUR Solution
                </p>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-highlight-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="font-medium">{item.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
