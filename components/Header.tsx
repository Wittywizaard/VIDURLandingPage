'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: 'Platform',
      hasDropdown: true,
      href: '#platform',
      sections: [
        {
          title: 'PRODUCTS',
          items: [
            { 
              name: 'AI Research Engine', 
              description: 'AI-powered tax and legal research',
              href: '#research' 
            },
            { 
              name: 'Document Intelligence', 
              description: 'Smart document analysis',
              href: '#documents' 
            },
            { 
              name: 'Knowledge Management', 
              description: 'Centralized knowledge base',
              href: '#knowledge' 
            }
          ]
        },
        {
          title: 'USE CASES',
          items: [
            { name: 'For CAs', href: '#cas' },
            { name: 'For CS Professionals', href: '#cs' },
            { name: 'For Tax Practitioners', href: '#tax' }
          ]
        }
      ]
    },
    {
      name: 'Resources',
      hasDropdown: true,
      href: '#resources',
      sections: [
        {
          title: 'LEARN',
          items: [
            { 
              name: 'Documentation', 
              description: 'Complete platform guides',
              href: '#docs' 
            },
            { 
              name: 'Webinars', 
              description: 'Live training sessions',
              href: '#webinars' 
            },
            { 
              name: 'Knowledge Base', 
              description: 'FAQs and tutorials',
              href: '#kb' 
            }
          ]
        }
      ]
    },
    {
      name: 'Why VIDUR',
      hasDropdown: false,
      href: '#why-vidur'
    },
    {
      name: 'Pricing',
      hasDropdown: false,
      href: '#pricing'
    },
    {
      name: 'Enterprise',
      hasDropdown: false,
      href: '#enterprise'
    },
    {
      name: 'API',
      hasDropdown: false,
      href: '#api'
    }
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* VIDUR Brand Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src="/vidur-logo.png" 
                alt="VIDUR" 
                className="h-14 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href || '#'}
                  className="text-base font-medium transition-colors text-black hover:text-deep-green flex items-center gap-1"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                
                {item.hasDropdown && openDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-2xl shadow-2xl py-6 px-6 border border-gray-100 min-w-[400px] z-50"
                  >
                    <div className="flex gap-8">
                      {item.sections?.map((section) => (
                        <div key={section.title} className="flex-1">
                          <h3 className="text-xs font-semibold text-black/70 uppercase tracking-wider mb-4">
                            {section.title}
                          </h3>
                          <div className="space-y-1">
                            {section.items?.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                              >
                                <div className="font-medium text-black group-hover:text-deep-green text-sm mb-0.5">
                                  {subItem.name}
                                </div>
                                {subItem.description && (
                                  <div className="text-xs text-black/60">
                                    {subItem.description}
                                  </div>
                                )}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-sm font-medium transition-colors text-black hover:text-deep-green">
              Log in
            </button>
            <button className="bg-deep-green hover:bg-deep-green/90 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all inline-flex items-center gap-2">
              Get started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="block h-0.5 w-full transition-all bg-deep-green"></span>
              <span className="block h-0.5 w-full transition-all bg-deep-green"></span>
              <span className="block h-0.5 w-full transition-all bg-deep-green"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href || '#'}
                    className="block text-deep-green font-medium text-sm py-2 hover:text-highlight-green transition-colors"
                    onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.hasDropdown && item.sections && (
                    <div className="ml-4 mt-2 space-y-3">
                      {item.sections.map((section) => (
                        <div key={section.title}>
                          <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">
                            {section.title}
                          </h4>
                          {section.items?.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-sm text-deep-green/80 py-1 hover:text-highlight-green"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <button className="block w-full text-left text-deep-green font-medium text-sm py-2">
                  Log in
                </button>
                <button className="bg-deep-green text-white w-full px-5 py-2.5 rounded-full text-sm font-medium">
                  Get started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
