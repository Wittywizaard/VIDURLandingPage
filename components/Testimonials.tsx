'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
  const videoTestimonials = [
    {
      type: 'video',
      videoId: '1DX-TItGvuAtj_JvwrcU1DapWNvW3HmHm'
    },
    {
      type: 'video',
      videoId: '1mHeQATw__g4nB9j-rygCN_2DoKFDVx1t'
    },
    {
      type: 'video',
      videoId: '1ZIkzpDsy53-Pe8YT_lE0qH8844uE60Dm'
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
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
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
            <div className="flex gap-4 animate-testimonial-scroll">
              {/* Duplicate testimonials for seamless loop */}
              {[...allTestimonials, ...allTestimonials, ...allTestimonials].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer border border-deep-green/10 overflow-hidden"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  {testimonial.type === 'video' ? (
                    /* Video Testimonial */
                    <div className="relative w-full h-[400px] md:h-[450px] bg-black overflow-hidden">
                      <div className="absolute inset-0" style={{ bottom: '-60px' }}>
                        <iframe
                          src={`https://drive.google.com/file/d/${testimonial.videoId}/preview`}
                          className="w-full h-full"
                          allow="encrypted-media"
                          style={{ 
                            border: 'none',
                            height: 'calc(100% + 60px)',
                            pointerEvents: 'auto'
                          }}
                        ></iframe>
                      </div>
                    </div>
                  ) : (
                    /* Text Testimonial */
                    <div className="p-5">
                      {/* Title */}
                      <h3 className="text-base md:text-lg font-bold text-deep-green mb-2 group-hover:text-highlight-green transition-colors leading-snug">
                        {testimonial.title}
                      </h3>

                      {/* Quote */}
                      <p className="text-xs md:text-sm text-black leading-relaxed mb-4 line-clamp-3">
                        {testimonial.quote}
                      </p>

                      {/* Author Info with Avatar */}
                      <div className="flex items-center gap-2 pt-3 border-t border-deep-green/10">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-deep-green to-highlight-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-deep-green">
                            {testimonial.author}
                          </p>
                          <p className="text-xs text-deep-green/60">
                            {testimonial.designation}
                          </p>
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
