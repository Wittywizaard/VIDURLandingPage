'use client';

import { motion } from 'framer-motion';

export default function TrustedKnowledge() {
  const sources = [
    {
      number: '01',
      label: 'BHARAT',
      title: 'Publisher reference works',
      description: 'Comprehensive legal and tax reference publications',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      number: '02',
      label: 'VIDUR',
      title: 'Knowledge from our team',
      description: 'Curated expertise from tax and legal professionals',
      bgColor: 'bg-soft-neutral',
      borderColor: 'border-deep-green/20'
    },
    {
      number: '03',
      label: 'ICSI',
      title: 'Corporate reference material',
      description: 'Authoritative corporate law and secretarial practice',
      bgColor: 'bg-soft-neutral',
      borderColor: 'border-deep-green/20'
    },
    {
      number: '04',
      label: 'ICAI',
      title: 'Accounting & audit guidance',
      description: 'Official standards and technical resources',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ];

  return (
    <section id="knowledge" className="py-20 bg-soft-neutral overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs md:text-sm font-bold text-deep-green/60 uppercase tracking-wider mb-2">
            A PROFESSIONAL REFERENCE SHELF
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-green mb-4">
            Trusted Knowledge & Sources
          </h2>
          <p className="text-base md:text-lg text-deep-green/70 max-w-3xl">
            Built on verified professional knowledge from India's most trusted resources
          </p>
        </motion.div>

        {/* Continuous Scrolling Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-6 animate-book-scroll"
              style={{ width: 'fit-content' }}
            >
              {/* Duplicate sources for seamless loop */}
              {[...sources, ...sources, ...sources].map((source, index) => (
                <motion.div
                  key={index}
                  className={`flex-shrink-0 w-[280px] md:w-[320px] h-[380px] md:h-[400px] ${source.bgColor} rounded-2xl p-8 border-2 ${source.borderColor} flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                  whileHover={{ scale: 1.02, y: -8 }}
                >
                  {/* Label */}
                  <div className="text-xs font-bold text-deep-green/50 uppercase tracking-wider mb-4">
                    {source.label}
                  </div>

                  {/* Book Placeholder */}
                  <div className="flex-1 flex items-center justify-center mb-6">
                    <div className="w-40 h-56 bg-white rounded-lg shadow-md border border-deep-green/10 flex items-center justify-center">
                      <div className="text-center px-4">
                        <div className="text-xs text-deep-green/40 mb-2">
                          {source.label}
                        </div>
                        <div className="w-12 h-1 bg-deep-green/20 mx-auto"></div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="text-xs text-deep-green/50 font-medium mb-1">
                      {source.number} / {source.label}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-deep-green mb-2 group-hover:text-highlight-green transition-colors leading-snug">
                      {source.title}
                    </h3>
                    <p className="text-xs md:text-sm text-deep-green/60 leading-relaxed">
                      {source.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-soft-neutral to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-soft-neutral to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 md:px-8 py-3 md:py-4 border border-deep-green/10 shadow-sm">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-highlight-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="text-sm md:text-base text-deep-green font-medium">
              Verified and continuously updated by experts
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes bookScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-33.333%));
          }
        }
        
        .animate-book-scroll {
          animation: bookScroll 40s linear infinite;
        }
        
        .animate-book-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
