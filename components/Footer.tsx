'use client';

export default function Footer() {
  const footerLinks = {
    Platform: [
      'Overview',
      'Features',
      'Integrations',
      'Templates',
      'Knowledge Base'
    ],
    Resources: [
      'Documentation',
      'Webinars',
      'Blog',
      'Case Studies',
      'Help Center'
    ],
    Company: [
      'About Us',
      'Careers',
      'Partners',
      'Press',
      'Contact'
    ],
    Legal: [
      'Terms of Service',
      'Privacy Policy',
      'Cookie Policy',
      'Security'
    ]
  };

  return (
    <footer className="bg-dark-accent text-white">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              {/* Logo Icon */}
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M20 5L8 35H14L20 20L26 35H32L20 5Z" fill="url(#footer-logo-gradient)" />
                  <defs>
                    <linearGradient id="footer-logo-gradient" x1="8" y1="5" x2="32" y2="35" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#87CE50" />
                      <stop offset="100%" stopColor="#FFFFFF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-white tracking-tight leading-none">
                  VIDUR
                </span>
                <span className="text-[10px] font-medium text-white/60 tracking-wider leading-none">
                  AI FOR TAX WORK
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Sophisticated AI workspace for tax, legal, corporate, and regulatory work across India.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {['twitter', 'linkedin', 'youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-highlight-green hover:text-dark-accent transition-all duration-200 flex items-center justify-center"
                  aria-label={social}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/70 hover:text-highlight-green transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Email</h4>
              <a href="mailto:support@vidur.in" className="text-sm text-white/70 hover:text-highlight-green transition-colors">
                support@vidur.in
              </a>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Phone</h4>
              <a href="tel:+911234567890" className="text-sm text-white/70 hover:text-highlight-green transition-colors">
                +91 123 456 7890
              </a>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Office</h4>
              <p className="text-sm text-white/70">
                Mumbai, Maharashtra, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © 2026 VIDUR AI. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-highlight-green transition-colors">
              Terms
            </a>
            <a href="#" className="text-white/60 hover:text-highlight-green transition-colors">
              Privacy
            </a>
            <a href="#" className="text-white/60 hover:text-highlight-green transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
