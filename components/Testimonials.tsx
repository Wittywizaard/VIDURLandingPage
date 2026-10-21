'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: 'VIDUR has transformed how we handle complex tax research. The source-backed responses give us confidence in our advisory work.',
      author: 'Rajesh Kumar',
      designation: 'Chartered Accountant, Mumbai',
      story: 'Read story'
    },
    {
      quote: 'The AI understands Indian legal context better than any tool I\'ve used. It\'s like having an experienced colleague available 24/7.',
      author: 'Priya Sharma',
      designation: 'Company Secretary, Delhi',
      story: 'Read story'
    },
    {
      quote: 'Document analysis and drafting that used to take hours now takes minutes. VIDUR has made our practice significantly more efficient.',
      author: 'Anil Desai',
      designation: 'Tax Partner, Bangalore',
      story: 'Read story'
    },
    {
      quote: 'The GSTAT appeal toolkit alone has saved our firm hundreds of hours. Every feature is built with professional practice in mind.',
      author: 'Meera Patel',
      designation: 'Legal Counsel, Ahmedabad',
      story: 'Read story'
    }
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="py-24 bg-soft-neutral">
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
            What Professionals Say After Using VIDUR
          </h2>
          <p className="text-lg text-deep-green/80 max-w-2xl mx-auto">
            Real experiences from tax and legal professionals across India
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-deep-green/10"
          >
            {/* Quote Icon */}
            <div className="mb-6">
              <svg className="w-12 h-12 text-highlight-green" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Quote */}
            <p className="text-xl md:text-2xl text-deep-green font-medium leading-relaxed mb-8">
              "{testimonials[currentIndex].quote}"
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-bold text-deep-green">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-deep-green/70">
                  {testimonials[currentIndex].designation}
                </p>
                <button className="mt-3 text-sm font-bold text-highlight-green hover:text-deep-green transition-colors inline-flex items-center gap-2">
                  {testimonials[currentIndex].story}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border-2 border-deep-green/20 hover:border-highlight-green hover:bg-highlight-green/10 transition-all duration-200 flex items-center justify-center group"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-deep-green group-hover:text-highlight-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-highlight-green'
                      : 'w-2 bg-deep-green/20 hover:bg-deep-green/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border-2 border-deep-green/20 hover:border-highlight-green hover:bg-highlight-green/10 transition-all duration-200 flex items-center justify-center group"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-deep-green group-hover:text-highlight-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
