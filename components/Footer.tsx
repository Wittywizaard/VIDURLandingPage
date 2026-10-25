'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(1039045);

  useEffect(() => {
    // Simulate visitor counter increment
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gradient-to-br from-[#021a13] via-[#052f23] to-[#031f18] text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-highlight-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16 md:py-20 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10 mb-12">
          
          {/* Column 1: Brand & Description - Spans 2 columns on large screens */}
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/vidur-logo.png" 
                alt="VIDUR" 
                className="h-12 w-auto object-contain mix-blend-lighten mb-4"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
              />
              <p className="text-sm text-white/70 leading-relaxed mb-4 max-w-md">
                VIDUR is the #1 AI Platform for Tax & Corporate Law Professionals. Our AI-powered research, drafting, and advisory tools empower CAs and lawyers across India.
              </p>
              <p className="text-xs text-white/60 italic">
                AI. Vision. Intellect.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-white mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-highlight-green hover:scale-110 transition-all duration-200 flex items-center justify-center group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-white group-hover:text-deep-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-highlight-green hover:scale-110 transition-all duration-200 flex items-center justify-center group"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5 text-white group-hover:text-deep-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-highlight-green hover:scale-110 transition-all duration-200 flex items-center justify-center group"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-white group-hover:text-deep-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-highlight-green hover:scale-110 transition-all duration-200 flex items-center justify-center group"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-white group-hover:text-deep-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-highlight-green hover:scale-110 transition-all duration-200 flex items-center justify-center group"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 text-white group-hover:text-deep-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Visitor Counter */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Visitor Counter</h4>
              <div className="inline-flex items-center gap-1 bg-black/30 px-3 py-2 rounded-lg font-mono text-sm">
                {visitorCount.toString().split('').map((digit, idx) => (
                  <span key={idx} className="bg-black/50 px-2 py-1 rounded text-highlight-green font-bold">
                    {digit}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Features */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-highlight-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Features
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                'AI Research',
                'Smart Drafting',
                'Legal Advisory',
                'Case Law Search',
                'Document Analysis',
                'Tax Calculator',
                'GST Compliance',
                'Notice Response',
                'Appeal Toolkit'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-highlight-green transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="text-highlight-green opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Use Cases */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-highlight-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Use Cases
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                'Tax Professionals',
                'Corporate Lawyers',
                'CA Firms',
                'Law Firms',
                'Corporate Legal Teams',
                'Tax Consultants',
                'Compliance Officers',
                'Legal Advisors'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-highlight-green transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="text-highlight-green opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-highlight-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Resources
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                'Knowledge Hub',
                'Case Studies',
                'Webinars',
                'Help Center',
                'API Documentation',
                'Video Tutorials',
                'Blog',
                'Updates',
                'FAQs'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-highlight-green transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="text-highlight-green opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Company */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-highlight-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Company
            </h3>
            <ul className="space-y-2.5 text-sm mb-6">
              {[
                'About Us',
                'Careers',
                'Contact Us',
                'Enterprise',
                'Pricing',
                'VIDUR Demo',
                'Partners',
                'Press Kit'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-highlight-green transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="text-highlight-green opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Download App */}
            <div>
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-highlight-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Download App
              </h4>
              <div className="space-y-2">
                <a 
                  href="#" 
                  className="block bg-white/10 hover:bg-white/20 rounded-lg p-2.5 transition-all duration-200 hover:scale-105"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-[10px] text-white/70">Download on the</p>
                      <p className="text-xs font-bold text-white">App Store</p>
                    </div>
                  </div>
                </a>
                <a 
                  href="#" 
                  className="block bg-white/10 hover:bg-white/20 rounded-lg p-2.5 transition-all duration-200 hover:scale-105"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-[10px] text-white/70">GET IT ON</p>
                      <p className="text-xs font-bold text-white">Google Play</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Company Info Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-highlight-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Office Locations
              </h4>
              <div className="space-y-3 text-white/70">
                <div>
                  <p className="text-xs text-white/50 mb-1">Registered Office</p>
                  <p>2A/3, S/F Front Side, Asif Ali Road, Turkman Gate</p>
                  <p>New Delhi - 110002</p>
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-1">Corporate Office</p>
                  <p>Plot No-31, Ground Floor, Sector-32</p>
                  <p>Gurgaon, Haryana - 122001</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-highlight-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </h4>
              <div className="space-y-3 text-white/70">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-highlight-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+918130719992" className="hover:text-highlight-green transition-colors">
                    +91 8130719992
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-highlight-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:Support@Vidur.In" className="hover:text-highlight-green transition-colors">
                    Support@Vidur.In
                  </a>
                </div>
                <div className="mt-4">
                  <p className="text-xs text-white/50 mb-1">Company</p>
                  <p>VIDUR (Represented By KonproxTech Private Limited)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/60">
            © 2026 KonproxTech Private Limited. All Rights Reserved
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a href="#" className="text-white/60 hover:text-highlight-green transition-colors">
              Terms
            </a>
            <span className="text-white/30">|</span>
            <a href="#" className="text-white/60 hover:text-highlight-green transition-colors">
              Privacy & Cookie Policy
            </a>
            <span className="text-white/30">|</span>
            <a href="#" className="text-white/60 hover:text-highlight-green transition-colors">
              Legal
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-6 bg-deep-green hover:bg-[#0a3d32] text-white font-bold rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-50"
      >
        <div className="flex items-center justify-center gap-2 p-4">
          <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.130-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
            Chat With Us
          </span>
        </div>
      </a>
    </footer>
  );
}
