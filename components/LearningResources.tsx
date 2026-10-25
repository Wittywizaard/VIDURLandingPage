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
    <section id="webinars" className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-deep-green mb-2">
            Learn with Practitioners
          </h2>
          <p className="text-sm md:text-base text-black max-w-2xl mx-auto">
            Educational webinars and sessions led by experienced tax and legal professionals
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-highlight-green/30 group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-soft-neutral rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-highlight-green/10 transition-colors">
                {resource.icon}
              </div>

              {/* Type Badge */}
              <div className="inline-block mb-2">
                <span className="text-xs font-bold text-highlight-green bg-highlight-green/10 px-3 py-1 rounded-full">
                  {resource.type}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-deep-green mb-2 group-hover:text-highlight-green transition-colors">
                {resource.title}
              </h3>
              <p className="text-sm text-black mb-4">
                {resource.description}
              </p>

              {/* Action */}
              <motion.div
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-deep-green text-sm font-semibold group-hover:text-highlight-green transition-colors"
              >
                {resource.action}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
