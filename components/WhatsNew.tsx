'use client';

import { motion } from 'framer-motion';

export default function WhatsNew() {
  const features = [
    {
      title: 'Professional GSTAT Appeal Toolkit',
      description: 'Comprehensive tools for preparing and managing GST appeals with automated form generation, case law research, and precedent analysis.',
      image: '⚖️',
      link: 'Learn More',
      url: 'https://drive.google.com/file/d/1CvjE-UMXv3Q01X-G-SHpsi-mNs7atsgo/view?usp=drive_link'
    },
    {
      title: 'Contribute your knowledge',
      description: 'Import and integrate your firm\'s internal knowledge base, templates, and expertise directly into VIDUR for personalized AI assistance.',
      image: '📖',
      link: 'Learn More'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-deep-green mb-4">
            What's New in VIDUR
          </h2>
        </motion.div>

        {/* Features */}
        <div className="space-y-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-6 lg:gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h3 className="text-xl md:text-2xl font-bold text-deep-green mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-black mb-4 leading-relaxed">
                  {feature.description}
                </p>
                {feature.url ? (
                  <motion.a
                    href={feature.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-deep-green text-sm font-semibold hover:text-deep-green/80 transition-colors"
                  >
                    {feature.link}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                ) : (
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-deep-green text-sm font-semibold hover:text-deep-green/80 transition-colors"
                  >
                    {feature.link}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <div className="aspect-video bg-white rounded-xl border border-deep-green/10 shadow-md overflow-hidden group hover:border-highlight-green/30 transition-all duration-300">
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
                    <div className="aspect-video bg-white rounded-xl border border-deep-green/10 flex items-center justify-center shadow-md overflow-hidden group hover:border-highlight-green/30 transition-all duration-300">
                      <div className="text-center p-6">
                        <div className="text-6xl mb-3 group-hover:scale-110 transition-transform duration-300">
                          {feature.image}
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Decorative element */}
                  <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-highlight-green/10 rounded-full -z-10"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
