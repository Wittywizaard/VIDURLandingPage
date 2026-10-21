'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function TrustedByProfessionals() {
  const [stats, setStats] = useState({
    professionals: 0,
    experts: 0,
    templates: 0,
    prompts: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const animateCount = (key: keyof typeof stats, target: number, duration: number) => {
            const increment = Math.ceil(target / (duration / 30));
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setStats(prev => ({ ...prev, [key]: target }));
                clearInterval(timer);
              } else {
                setStats(prev => ({ ...prev, [key]: current }));
              }
            }, 30);
          };

          animateCount('professionals', 25000, 1500);
          animateCount('experts', 250, 1200);
          animateCount('templates', 10000, 1800);
          animateCount('prompts', 5000, 1600);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const professionals = [
    {
      title: 'Chartered Accountants',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      description: 'Tax planning, auditing, and compliance workflows'
    },
    {
      title: 'Company Secretaries',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      description: 'Corporate governance and regulatory compliance'
    },
    {
      title: 'Legal Professionals',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      description: 'Legal research, drafting, and case preparation'
    },
    {
      title: 'Tax & Audit Teams',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: 'Enterprise tax advisory and audit documentation'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-soft-neutral">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-green mb-3 md:mb-4">
            Trusted by tax & corporate professionals
          </h2>
          <p className="text-base md:text-lg text-deep-green/80 max-w-2xl mx-auto">
            Built for the way you work.
          </p>
        </motion.div>

        {/* Logo Carousel - Infinite Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 overflow-hidden"
        >
          <div className="relative">
            {/* Infinite scrolling logos */}
            <div className="flex items-center gap-6 md:gap-12 animate-scroll">
              {/* First set of logos */}
              {['ICAI', 'Aditya Birla', 'Kotak', 'Bharat', 'ONE MG', 'ICSI', 'ICAI', 'Aditya Birla', 'Kotak', 'Bharat', 'ONE MG', 'ICSI'].map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-32 h-16 md:w-40 md:h-20 bg-white rounded-lg border border-deep-green/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
                >
                  <span className="text-xs md:text-sm font-bold text-deep-green/70">{logo}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-soft-neutral to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-soft-neutral to-transparent pointer-events-none z-10"></div>
            
            <p className="text-center text-xs md:text-sm text-deep-green/60 mt-4 md:mt-6">
              <a href="#" className="hover:text-highlight-green transition-colors inline-flex items-center gap-1">
                Explore solutions
                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </p>
          </div>
        </motion.div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 2));
            }
          }
          
          .animate-scroll {
            display: flex;
            animation: scroll 30s linear infinite;
            width: fit-content;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-20">
          {[
            { value: stats.professionals, label: 'CAs and lawyers using VIDUR', suffix: '+' },
            { value: stats.experts, label: 'Experts and publishers', suffix: '+' },
            { value: stats.templates, label: 'AI templates', suffix: '+' },
            { value: stats.prompts, label: 'Prompts to get you started', suffix: '+' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-soft-neutral rounded-xl p-4 md:p-6 text-center"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-deep-green mb-1 md:mb-2">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-xs md:text-sm font-medium text-deep-green/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Categories - Interactive with Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {professionals.map((prof, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="relative bg-white rounded-2xl p-4 md:p-6 hover:shadow-2xl transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-highlight-green/40 overflow-hidden"
            >
              {/* Animated gradient background on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(135, 206, 80, 0.05) 0%, rgba(13, 86, 73, 0.05) 100%)'
                }}
              />
              
              {/* Animated pulse effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-highlight-green/20 to-deep-green/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative z-10">
                {/* Icon with rotation animation */}
                <motion.div 
                  className="text-deep-green mb-3 md:mb-4 group-hover:text-highlight-green transition-colors"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {prof.icon}
                </motion.div>
                
                {/* Title */}
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-deep-green mb-2 group-hover:text-highlight-green transition-colors">
                  {prof.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs md:text-sm text-deep-green/70 leading-relaxed">
                  {prof.description}
                </p>

                {/* Animated arrow */}
                <motion.div
                  className="mt-3 md:mt-4 flex items-center gap-2 text-xs md:text-sm font-medium text-deep-green group-hover:text-highlight-green"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  <span>Learn more</span>
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
