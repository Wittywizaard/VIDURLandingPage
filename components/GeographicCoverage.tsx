'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function GeographicCoverage() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let start = 0;
            const end = 170;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);

            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Try to play video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          // Auto-play was prevented, which is expected on some browsers
        });
      }
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-[#1a2832]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Live in {count}+ Cities
            </h2>
            <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Empowering professionals across India, from leading metropolitan firms to independent practices, with smarter research, seamless drafting, and AI-powered solutions.
            </p>
          </motion.div>

          {/* Right Side - India Map Video in Square Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Square box container with clean white background */}
              <div className="relative aspect-square bg-white rounded-[40px] border border-gray-200/80 shadow-2xl overflow-hidden p-0">
                <video
                  ref={videoRef}
                  className="block w-full h-full object-contain"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="Animated map showing VIDUR's presence across India"
                  style={{ 
                    pointerEvents: 'none',
                    display: 'block',
                    minHeight: 0
                  }}
                >
                  <source src="/india-map-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
