'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
  const videoTestimonials = [
    {
      type: 'video',
      videoId: 'bvsion3esc2bab1'
    },
    {
      type: 'video',
      videoId: 'jpnl036ocolzzi2'
    },
    {
      type: 'video',
      videoId: 'jnb42g8fb7gpdoh'
    }
  ];

  const textTestimonials = [
    {
      type: 'text',
      quote: 'VIDUR has transformed how we handle complex tax research. The source-backed responses give us confidence in our advisory work.',
      author: 'Rajesh Kumar',
      designation: 'Chartered Accountant, Mumbai',
      title: 'Streamlining Legal Research',
    },
    {
      type: 'text',
      quote: 'The AI understands Indian legal context better than any tool I\'ve used. It\'s like having an experienced colleague available 24/7.',
      author: 'Priya Sharma',
      designation: 'Company Secretary, Delhi',
      title: 'VIDUR: A Game Changer for Team Productivity',
    },
    {
      type: 'text',
      quote: 'Document analysis and drafting that used to take hours now takes minutes. VIDUR has made our practice significantly more efficient.',
      author: 'Anil Desai',
      designation: 'Tax Partner, Bangalore',
      title: 'VIDUR: A Game-Changer for Tax and Regulatory Professionals',
    }
  ];

  // Interleave videos and text testimonials
  const allTestimonials = [];
  const maxLength = Math.max(videoTestimonials.length, textTestimonials.length);
  
  for (let i = 0; i < maxLength; i++) {
    if (videoTestimonials[i]) allTestimonials.push(videoTestimonials[i]);
    if (textTestimonials[i]) allTestimonials.push(textTestimonials[i]);
  }

  return (
    <section className="py-10 md:py-12 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-deep-green mb-2">
            What Professionals Say About VIDUR
          </h2>
          <p className="text-sm md:text-base text-black max-w-2xl mx-auto">
            Stories from the professionals who use VIDUR.
          </p>
        </motion.div>

        {/* Continuous Scrolling Testimonials */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-5 animate-testimonial-scroll">
              {/* Duplicate testimonials for seamless loop */}
              {[...allTestimonials, ...allTestimonials, ...allTestimonials].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-[280px] md:w-[300px] bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden"
                  whileHover={{ y: -4 }}
                >
                  {testimonial.type === 'video' ? (
                    /* Video Testimonial */
                    <div className="relative w-full h-[360px] bg-black overflow-hidden">
                      <iframe
                        src={`https://fast.wistia.net/embed/iframe/${testimonial.videoId}?videoFoam=true&playerColor=0a3d32`}
                        className="w-full h-full"
                        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                        allowFullScreen
                        style={{ 
                          border: 'none'
                        }}
                      ></iframe>
                    </div>
                  ) : (
                    /* Text Testimonial */
                    <div className="p-5 flex flex-col h-[360px] justify-between">
                      {/* Quote */}
                      <div className="flex-1 flex flex-col justify-center">
                        <p className="text-sm md:text-base text-black leading-relaxed line-clamp-5">
                          {testimonial.quote}
                        </p>
                      </div>

                      {/* Author Info at Bottom */}
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-deep-green to-highlight-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                            {testimonial.author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-deep-green">
                              {testimonial.author}
                            </p>
                            <p className="text-xs text-gray-600">
                              {testimonial.designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes testimonialScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-33.333%));
          }
        }
        
        .animate-testimonial-scroll {
          display: flex;
          animation: testimonialScroll 80s linear infinite;
          width: max-content;
        }
        
        .animate-testimonial-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
