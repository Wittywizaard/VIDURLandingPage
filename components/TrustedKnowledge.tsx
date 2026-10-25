'use client';

import { motion } from 'framer-motion';

export default function TrustedKnowledge() {
  const sources = [
    {
      number: '01',
      label: 'BHARAT',
      title: 'Publisher reference works',
      description: 'Income Tax Act 2025 with comprehensive commentary',
      bookStyle: 'bg-gradient-to-br from-red-900 to-red-700',
      bookContent: (
        <div className="w-full h-full flex flex-col items-center justify-center text-white p-4">
          <div className="text-center">
            <div className="text-xs font-bold mb-2">Bharat's</div>
            <div className="text-2xl font-bold mb-2">INCOME</div>
            <div className="text-2xl font-bold mb-2">TAX</div>
            <div className="text-xl font-bold mb-3">ACT, 2025</div>
            <div className="text-xs mb-2">With Comments & Referencer</div>
            <div className="text-xs">29 Nos 88 of 2025</div>
            <div className="text-xs mb-3">and 22 Nos Year F.A 2025</div>
            <div className="absolute bottom-4 right-4 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
              274th Edition
            </div>
          </div>
        </div>
      )
    },
    {
      number: '02',
      label: 'VIDUR',
      title: 'Knowledge from our team',
      description: 'Curated expertise from tax and legal professionals',
      bookStyle: 'bg-white border-2 border-dashed border-deep-green/30',
      bookContent: (
        <div className="w-full h-full flex flex-col items-center justify-center text-deep-green p-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">KNOWLEDGE</div>
            <div className="text-2xl font-bold mb-6">TEAM</div>
            <div className="text-xs text-deep-green/60 mt-auto">Approved cover</div>
            <div className="text-xs text-deep-green/60">to be supplied</div>
          </div>
        </div>
      )
    },
    {
      number: '03',
      label: 'ICSI',
      title: 'Corporate reference material',
      description: 'Authoritative corporate law and secretarial practice',
      bookStyle: 'bg-white border-2 border-dashed border-deep-green/30',
      bookContent: (
        <div className="w-full h-full flex flex-col items-center justify-center text-deep-green p-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">CORPORATE</div>
            <div className="text-2xl font-bold mb-6">REFERENCE</div>
            <div className="text-xs text-deep-green/60 mt-auto">Approved cover</div>
            <div className="text-xs text-deep-green/60">to be supplied</div>
          </div>
        </div>
      )
    },
    {
      number: '04',
      label: 'ICAI',
      title: 'Accounting & audit guidance',
      description: 'Official standards and technical resources',
      bookStyle: 'bg-gradient-to-br from-green-800 to-green-900',
      bookContent: (
        <div className="w-full h-full flex flex-col items-center justify-center text-white p-4">
          <div className="text-center">
            <div className="bg-yellow-100 text-black px-3 py-1 text-xs font-bold mb-4">Revised & Updated</div>
            <div className="text-base font-bold mb-4">Guidance Note on</div>
            <div className="text-lg font-bold mb-4">Audit of Banks (Revised 2024)</div>
            <div className="w-16 h-16 mx-auto my-4 bg-white rounded-full flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-red-600 rounded-full"></div>
            </div>
            <div className="text-xs mt-auto">The Institute of Chartered Accountants of India</div>
            <div className="text-xs font-bold">New Delhi</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="knowledge" className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 text-center"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-deep-green mb-3">
            Trusted Knowledge & Sources
          </h2>
          <p className="text-sm md:text-base text-black max-w-3xl mx-auto">
            Built on verified professional knowledge from India's most trusted resources
          </p>
        </motion.div>

        {/* Continuous Scrolling Carousel */}
        <div className="relative">
          <div className="overflow-hidden py-4">
            <div className="flex gap-3 animate-book-scroll">
              {/* Duplicate sources for seamless loop */}
              {[...sources, ...sources, ...sources, ...sources].map((source, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-[180px] md:w-[200px] bg-white rounded-2xl p-3 border border-gray-200/80 flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.02, y: -6 }}
                >
                  {/* Book Cover */}
                  <div className="flex-1 flex items-center justify-center mb-3">
                    <div className={`w-28 h-40 md:w-32 md:h-44 ${source.bookStyle} rounded-lg shadow-xl relative overflow-hidden transform transition-transform duration-300 group-hover:scale-105`}>
                      {source.bookContent}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <div className="text-xs text-deep-green/60 font-semibold mb-1 uppercase tracking-wide">
                      {source.label}
                    </div>
                    <h3 className="text-xs md:text-sm font-bold text-deep-green group-hover:text-highlight-green transition-colors leading-tight">
                      {source.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bookScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-25%));
          }
        }
        
        .animate-book-scroll {
          display: flex;
          animation: bookScroll 50s linear infinite;
          width: max-content;
        }
        
        .animate-book-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
