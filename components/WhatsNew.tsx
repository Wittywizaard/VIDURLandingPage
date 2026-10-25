'use client';

import { motion } from 'framer-motion';

export default function WhatsNew() {
  const features = [
    {
      number: '01',
      title: 'Professional GSTAT Appeal Toolkit',
      description: 'Comprehensive tools for preparing and managing GST appeals with automated form generation, case law research, and precedent analysis.',
      image: '⚖️',
      link: 'Learn More',
      url: 'https://drive.google.com/file/d/1CvjE-UMXv3Q01X-G-SHpsi-mNs7atsgo/view?usp=drive_link'
    },
    {
      number: '02',
      title: 'Contribute your knowledge',
      description: 'Import and integrate your firm\'s internal knowledge base, templates, and expertise directly into VIDUR for personalized AI assistance.',
      image: '📖',
      link: 'Learn More'
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
            What's New in VIDUR
          </h2>
          <p className="text-lg text-deep-green/80 max-w-2xl mx-auto">
            Continuously evolving features designed for professional excellence
          </p>
        </motion.div>

        {/* Features */}
        <div className="space-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="inline-block mb-4">
                  <span className="text-xs font-bold text-white bg-deep-green px-3 py-1 rounded-full">
                    {feature.number}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-deep-green mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-deep-green/70 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                {feature.url ? (
                  <motion.a
                    href={feature.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-highlight-green font-bold hover:text-deep-green transition-colors"
                  >
                    {feature.link}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                ) : (
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-highlight-green font-bold hover:text-deep-green transition-colors"
                  >
                    {feature.link}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                )}
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="relative">
                  {index === 0 ? (
                    // Video for GSTAT Toolkit
                    <div className="aspect-video bg-white rounded-2xl border-2 border-deep-green/10 shadow-lg overflow-hidden group hover:border-highlight-green/30 transition-all duration-300">
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls={false}
                        preload="auto"
                        style={{ 
                          pointerEvents: 'none'
                        }}
                      >
                        <source src="/gstat-toolkit-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    // Emoji for other features
                    <div className="aspect-video bg-gradient-to-br from-soft-neutral to-white rounded-2xl border-2 border-deep-green/10 flex items-center justify-center shadow-lg overflow-hidden group hover:border-highlight-green/30 transition-all duration-300">
                      <div className="text-center p-8">
                        <div className="text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">
                          {feature.image}
                        </div>
                        <p className="text-deep-green/60 font-medium">
                          Professional {feature.title}
                        </p>
                      </div>
                    </div>
                  )}
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-highlight-green/20 rounded-full filter blur-2xl -z-10"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
