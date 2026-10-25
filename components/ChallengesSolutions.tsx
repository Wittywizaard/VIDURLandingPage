'use client';

import { motion } from 'framer-motion';

export default function ChallengesSolutions() {
  const comparisons = [
    {
      challenge: 'Generic AI responses without legal authority',
      solution: 'Verified source citations from authoritative legal and tax publications'
    },
    {
      challenge: 'Outdated information from general AI models',
      solution: 'Real-time access to current Indian tax laws and regulations'
    },
    {
      challenge: 'No understanding of Indian practice context',
      solution: 'Purpose-built for Indian CA, CS, and legal professional workflows'
    },
    {
      challenge: 'Security concerns with sensitive client data',
      solution: 'Enterprise-grade security with role-based access control'
    },
    {
      challenge: 'Complex tools requiring extensive training',
      solution: 'Intuitive interface designed for professional tax and legal work'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-deep-green mb-3">
            AI Should Help, Not Create Risk
          </h2>
          <p className="text-sm md:text-base text-black max-w-2xl mx-auto">
            See how VIDUR addresses the everyday challenges professionals face with generic AI tools
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="space-y-6">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-4 md:gap-6"
            >
              {/* Challenge */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-300 mt-0.5 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                    {item.challenge}
                  </p>
                </div>
              </div>

              {/* Solution */}
              <div className="bg-deep-green rounded-2xl p-6 border border-deep-green">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-highlight-green mt-0.5 flex items-center justify-center shadow-sm">
                    <svg className="w-3.5 h-3.5 text-deep-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-white font-medium leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
