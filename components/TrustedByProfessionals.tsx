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

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-soft-neutral">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-green">
            Trusted by tax & corporate professionals
          </h2>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12">
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
      </div>
    </section>
  );
}
