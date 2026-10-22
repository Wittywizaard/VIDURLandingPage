'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'VIDUR has transformed how we handle complex tax research. The source-backed responses give us confidence in our advisory work.',
      author: 'Rajesh Kumar',
      designation: 'Chartered Accountant, Mumbai',
      title: 'Streamlining Legal Research',
      story: 'Read story'
    },
    {
      quote: 'The AI understands Indian legal context better than any tool I\'ve used. It\'s like having an experienced colleague available 24/7.',
      author: 'Priya Sharma',
      designation: 'Company Secretary, Delhi',
      title: 'VIDUR: A Game Changer for Team Productivity',
      story: 'Read story'
    },
    {
      quote: 'Document analysis and drafting that used to take hours now takes minutes. VIDUR has made our practice significantly more efficient.',
      author: 'Anil Desai',
      designation: 'Tax Partner, Bangalore',
      title: 'VIDUR: A Game-Changer for Tax and Regulatory Professionals',
      story: 'Read story'
    },
    {
      quote: 'The GSTAT appeal toolkit alone has saved our firm hundreds of hours. Every feature is built with professional practice in mind.',
      author: 'Meera Patel',
      designation: 'Legal Counsel, Ahmedabad',
      title: 'Transforming Legal Workflows',
      story: 'Read story'
    },
    {
      quote: 'For last few months, I\'ve been using VIDUR and one thing for sure, it\'s a great innovation for the field of tax and regulatory professionals.',
      author: 'Venkatesh',
      designation: 'Partner Multi Family Office - 360 One',
      title: 'Innovation in Tax Practice',
      story: 'Read story'
    },
    {
      quote: 'As a corporate professional working with most valued clients, collaboration has been streamlined, and I\'m able to focus my time on more strategic work.',
      author: 'Puneet Songar',
      designation: 'Law Firm Partner',
      title: 'Strategic Focus with VIDUR',
      story: 'Read story'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-soft-neutral overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-green mb-3 md:mb-4">
            What Professionals Say About VIDUR
          </h2>
          <p className="text-base md:text-lg text-deep-green/70 max-w-2xl mx-auto">
            Real stories from the professionals who use VIDUR.
          </p>
        </motion.div>

        {/* Continuous Scrolling Testimonials */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-testimonial-scroll">
              {/* Duplicate testimonials for seamless loop */}
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-[320px] md:w-[380px] bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-deep-green/10"
                  whileHover={{ scale: 1.02, y: -8 }}
                >
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <svg className="w-10 h-10 text-highlight-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-deep-green mb-3 group-hover:text-highlight-green transition-colors leading-snug min-h-[60px]">
                    {testimonial.title}
                  </h3>

                  {/* Quote */}
                  <p className="text-sm md:text-base text-deep-green/70 leading-relaxed mb-6 line-clamp-4">
                    "{testimonial.quote}"
                  </p>

                  {/* Read story link */}
                  <button className="text-sm font-bold text-highlight-green hover:text-deep-green transition-colors inline-flex items-center gap-2 mb-6">
                    {testimonial.story}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Author Info with Avatar */}
                  <div className="flex items-center gap-3 pt-4 border-t border-deep-green/10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-deep-green to-highlight-green flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm md:text-base font-bold text-deep-green">
                        {testimonial.author}
                      </p>
                      <p className="text-xs md:text-sm text-deep-green/60">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-soft-neutral to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-soft-neutral to-transparent pointer-events-none z-10"></div>
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
          animation: testimonialScroll 60s linear infinite;
          width: max-content;
        }
        
        .animate-testimonial-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
