'use client';

import { motion } from 'framer-motion';

export default function TrustedKnowledge() {
  const sources = [
    {
      number: '01',
      title: 'BHARAT Publisher Reference Works',
      description: 'Comprehensive legal and tax reference publications from leading Indian publishers',
      image: '📚'
    },
    {
      number: '02',
      title: 'VIDUR Knowledge Team',
      description: 'Curated expertise from tax and legal professionals with decades of combined experience',
      image: '👥'
    },
    {
      number: '03',
      title: 'ICSI Corporate Reference Material',
      description: 'Authoritative corporate law and company secretarial practice resources',
      image: '🏢'
    },
    {
      number: '04',
      title: 'ICAI Accounting and Audit Guidance',
      description: 'Official standards, guidance notes, and technical resources from ICAI',
      image: '📊'
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
          <p className="text-sm font-bold text-highlight-green uppercase tracking-wider mb-4">
            AUTHORITATIVE SOURCES
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-section-lg font-bold text-deep-green mb-4">
            Trusted Knowledge & Sources
          </h2>
          <p className="text-lg text-deep-green/80 max-w-3xl mx-auto">
            VIDUR is built on verified professional knowledge from India's most trusted legal, tax, and corporate resources
          </p>
        </motion.div>

        {/* Sources Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {sources.map((source, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-soft-neutral rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-highlight-green/30 cursor-pointer"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-deep-green text-white rounded-full flex items-center justify-center font-bold text-sm">
                {source.number}
              </div>

              {/* Content */}
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-20 h-20 bg-white rounded-xl flex items-center justify-center text-4xl shadow-md group-hover:shadow-lg transition-shadow">
                  {source.image}
                </div>

                {/* Text */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl md:text-2xl font-bold text-deep-green mb-3 group-hover:text-highlight-green transition-colors">
                    {source.title}
                  </h3>
                  <p className="text-deep-green/70 leading-relaxed">
                    {source.description}
                  </p>
                </div>
              </div>

              {/* Hover Arrow */}
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                className="absolute bottom-6 right-6 text-deep-green group-hover:text-highlight-green transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-deep-green/5 rounded-full px-8 py-4 border border-deep-green/10">
            <svg className="w-6 h-6 text-highlight-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="text-deep-green font-medium">
              All sources verified and continuously updated by professional experts
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
