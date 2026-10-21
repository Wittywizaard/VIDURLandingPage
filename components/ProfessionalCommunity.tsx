'use client';

import { motion } from 'framer-motion';

export default function ProfessionalCommunity() {
  const highlights = [
    {
      title: 'Event Highlights',
      description: 'Professional development sessions and industry events featuring VIDUR',
      status: 'Coming Soon',
      image: '🎯'
    },
    {
      title: 'Nandini Feature',
      description: 'Advanced capabilities for enhanced professional workflows',
      status: 'Coming Soon',
      image: '✨'
    },
    {
      title: 'Professional Community',
      description: 'Connect with peers, share insights, and grow your practice',
      status: 'Coming Soon',
      image: '🤝'
    }
  ];

  return (
    <section className="py-24 bg-soft-neutral">
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
            VIDUR in the Professional Community
          </h2>
          <p className="text-lg text-deep-green/80 max-w-2xl mx-auto">
            Join our growing community of tax and legal professionals
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-highlight-green/30 cursor-pointer"
            >
              {/* Image Area */}
              <div className="aspect-video bg-gradient-to-br from-deep-green/10 to-highlight-green/10 flex items-center justify-center text-6xl relative overflow-hidden">
                <div className="relative z-10">{item.image}</div>
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-deep-green to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Status Badge */}
                <div className="inline-block mb-3">
                  <span className="text-xs font-bold text-highlight-green bg-highlight-green/10 px-3 py-1 rounded-full">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-deep-green mb-3 group-hover:text-highlight-green transition-colors">
                  {item.title}
                </h3>
                <p className="text-deep-green/70 mb-4">
                  {item.description}
                </p>

                {/* Arrow indicator */}
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center text-sm font-bold text-deep-green group-hover:text-highlight-green transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
