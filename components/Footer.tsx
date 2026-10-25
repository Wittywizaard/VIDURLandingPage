'use client';

import { useState, useEffect } from 'react';

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
    <footer className="bg-gradient-to-br from-deep-green via-[#1a5f3f] to-dark-accent text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-highlight-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
            <div>
              <img 
                src="/vidur-logo.png" 
                alt="VIDUR" 
                className="h-12 w-auto brightness-0 invert mb-4"
              />
              <p className="text-xs text-white/70 leading-relaxed">
                AI. Vision. Intellect.
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-sm font-bold text-white mb-3">Social Media</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-highlight-green hover:scale-110 transition-all duration-200 flex items-center justify-center group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-white group-hover:text-dark-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-highlight-green hover:scale-110 transition-all duration-200 flex items-center justify-center group"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-white group-hover:text-dark-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-highlight-green hover:scale-110 transition-all duration-200 flex items-center justify-center group"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-white group-hover:text-dark-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Visitor Counter */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Visitor Counter</h4>
              <div className="inline-flex items-center gap-1 bg-black/30 px-3 py-1.5 rounded-lg font-mono text-sm">
                {visitorCount.toString().split('').map((digit, idx) => (
                  <span key={idx} className="bg-black/50 px-2 py-1 rounded text-highlight-green font-bold">
                    {digit}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Connect With Us */}
          <div>
            <h3 className="text-base font-bold text-white mb-4">Connect With Us</h3>
            <div className="space-y-3 text-sm text-white/80">
              <div>
                <p className="text-xs text-white/60 mb-1">Company Name</p>
                <p className="text-white">VIDUR (Represented By KonproxTech Private Limited)</p>
              </div>
              <div>
                <p className="text-xs text-white/60 mb-1">Registered Office</p>
                <p>2A/3, S/F Front Side, Asif Ali Road, Turkman Gate,</p>
                <p>New Delhi (110002)</p>
              </div>
              <div>
                <p className="text-xs text-white/60 mb-1">Corporate Office Address</p>
                <p>Plot No-31, Ground Floor, Sector-32, Gurgaon,</p>
                <p>Haryana (122001)</p>
              </div>
              <div>
                <p className="text-xs text-white/60 mb-1">Phone</p>
                <a href="tel:+918130719992" className="text-white hover:text-highlight-green transition-colors">
                  +91 8130719992
                </a>
              </div>
              <div>
                <p className="text-xs text-white/60 mb-1">Email</p>
                <a href="mailto:Support(At)Vidur(Dot)In" className="text-white hover:text-highlight-green transition-colors">
                  Support(At)Vidur(Dot)In
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Download App */}
          <div>
            <h3 className="text-base font-bold text-white mb-4">Download App</h3>
            <div className="space-y-3">
              <a 
                href="#" 
                className="block bg-white/10 hover:bg-white/20 rounded-lg p-3 transition-all duration-200 hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-xs text-white/70">Download on the</p>
                    <p className="text-sm font-bold text-white">App Store</p>
                  </div>
                </div>
              </a>
              <a 
                href="#" 
                className="block bg-white/10 hover:bg-white/20 rounded-lg p-3 transition-all duration-200 hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-xs text-white/70">GET IT ON</p>
                    <p className="text-sm font-bold text-white">Google Play</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Column 4: Menu */}
          <div>
            <h3 className="text-base font-bold text-white mb-4">Menu</h3>
            <ul className="space-y-2 text-sm">
              {['Home', 'About Us', 'Enterprise', 'Pricing', 'Knowledge Hub', 'Updates', 'VIDUR Demo', 'GSTAT Appeal Tool'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-highlight-green transition-colors inline-flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/60">
            © 2024 KonproxTech Private Limited. All Rights Reserved
          </p>
          <div className="flex flex-wrap gap-4 text-xs">
            <a href="#" className="text-white/60 hover:text-highlight-green transition-colors">
              Terms
            </a>
            <span className="text-white/30">|</span>
            <a href="#" className="text-white/60 hover:text-highlight-green transition-colors">
              Privacy & Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Chat With Us Button - Expands on hover */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-6 bg-deep-green hover:bg-deep-green/90 text-white font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-300 flex items-center z-50"
      >
        <div className="flex items-center gap-2 p-4">
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
