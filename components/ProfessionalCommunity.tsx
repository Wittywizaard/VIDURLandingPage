'use client';

import { motion } from 'framer-motion';

export default function ProfessionalCommunity() {
  const highlights = [
    {
      title: 'Event Highlights',
      description: 'Professional development sessions and industry events featuring VIDUR',
      status: 'Coming Soon',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      title: 'Nandini Feature',
      description: 'Advanced capabilities for enhanced professional workflows',
      status: 'Coming Soon',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Professional Community',
      description: 'Connect with peers, share insights, and grow your practice',
      status: 'Coming Soon',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: 'from-purple-500/20 to-pink-500/20'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white via-soft-neutral to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-highlight-green/5 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-deep-green/5 rounded-full"></div>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header - More premium styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-deep-green/10 to-highlight-green/10 text-deep-green text-sm font-bold uppercase tracking-wider rounded-full border border-deep-green/20">
              Community & Events
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-deep-green mb-6 leading-tight">
            VIDUR in the
            <br />
            <span className="bg-gradient-to-r from-deep-green via-highlight-green to-deep-green bg-clip-text text-transparent">
              Professional Community
            </span>
          </h2>
          <p className="text-xl text-deep-green/70 max-w-3xl mx-auto leading-relaxed">
            Join our growing community of tax and legal professionals shaping the future of work
          </p>
        </motion.div>

        {/* Highlights Grid - Classy Synthesia-like cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card with glassmorphism effect */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:border-highlight-green/30 transition-all duration-500 hover:shadow-2xl hover:shadow-highlight-green/10">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Icon with gradient background */}
                  <div className="mb-6 relative">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} text-deep-green group-hover:scale-110 transition-transform duration-500`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="inline-block mb-4">
                    <span className="text-xs font-bold text-highlight-green bg-highlight-green/10 px-4 py-1.5 rounded-full border border-highlight-green/20">
                      {item.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-deep-green mb-4 group-hover:text-highlight-green transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-deep-green/70 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Arrow with animation */}
                  <motion.div
                    className="inline-flex items-center text-sm font-bold text-deep-green group-hover:text-highlight-green transition-colors"
                  >
                    <span className="mr-2">Explore</span>
                    <motion.svg 
                      className="w-5 h-5"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-highlight-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-deep-green/20 to-highlight-green/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
