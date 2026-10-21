'use client';

import { motion } from 'framer-motion';

export default function LearningResources() {
  const resources = [
    {
      type: 'Upcoming',
      title: 'Explore Webinars',
      description: 'Professional development sessions on tax, legal, and regulatory topics',
      action: 'View Schedule',
      icon: '📅'
    },
    {
      type: 'Recordings',
      title: 'Past Webinars',
      description: 'Access our library of recorded sessions and expert presentations',
      action: 'Browse Recordings',
      icon: '🎥'
    }
  ];

  return (
    <section id="webinars" className="py-24 bg-soft-neutral">
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
            Learn with Practitioners
          </h2>
          <p className="text-lg text-deep-green/80 max-w-2xl mx-auto">
            Educational webinars and sessions led by experienced tax and legal professionals
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-highlight-green/30 group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-soft-neutral rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-highlight-green/10 transition-colors">
                {resource.icon}
              </div>

              {/* Type Badge */}
              <div className="inline-block mb-3">
                <span className="text-xs font-bold text-highlight-green bg-highlight-green/10 px-3 py-1 rounded-full">
                  {resource.type}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-bold text-deep-green mb-3 group-hover:text-highlight-green transition-colors">
                {resource.title}
              </h3>
              <p className="text-deep-green/70 mb-6">
                {resource.description}
              </p>

              {/* Action */}
              <motion.div
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-deep-green font-bold group-hover:text-highlight-green transition-colors"
              >
                {resource.action}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
