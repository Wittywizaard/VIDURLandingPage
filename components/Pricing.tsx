'use client';

import { motion } from 'framer-motion';

export default function Pricing() {
  const plans = [
    {
      category: 'Regular Plans',
      description: 'For individual practitioners and small firms',
      features: [
        'Source-backed AI research',
        'Professional templates',
        'Document analysis',
        'Knowledge base access',
        'Mobile and desktop access'
      ],
      action: 'View Current Plans',
      highlight: false
    },
    {
      category: 'Corporate Plans',
      description: 'For enterprises and large professional practices',
      features: [
        'Everything in Regular Plans',
        'Team collaboration tools',
        'Custom knowledge integration',
        'Priority support',
        'Dedicated account manager',
        'Advanced security features'
      ],
      action: 'Talk to the VIDUR Team',
      highlight: true
    }
  ];

  return (
    <section id="pricing" className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-deep-green mb-2">
            Pricing
          </h2>
          <p className="text-sm md:text-base text-black max-w-2xl mx-auto">
            Professional AI tools designed for practices of all sizes
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl p-6 border transition-all duration-300 ${
                plan.highlight
                  ? 'bg-gradient-to-br from-deep-green to-dark-accent text-white border-highlight-green shadow-xl'
                  : 'bg-white border-gray-200 hover:border-highlight-green/50 hover:shadow-lg'
              }`}
            >
              {/* Content wrapper for glassmorphism */}
              <div className={plan.highlight ? 'relative z-10' : ''}>
              {/* Badge for highlighted plan - or placeholder for alignment */}
              <div className="mb-3" style={{ minHeight: '28px' }}>
                {plan.highlight && (
                  <motion.div 
                    className="inline-block"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="relative inline-flex items-center gap-1.5 text-xs font-bold bg-highlight-green text-dark-accent px-4 py-1.5 rounded-full shadow-lg">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      RECOMMENDED
                      <span className="absolute inset-0 rounded-full bg-highlight-green animate-ping opacity-20"></span>
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Category */}
              <h3 className={`text-xl md:text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-deep-green'}`}>
                {plan.category}
              </h3>

              {/* Description */}
              <p className={`text-sm mb-6 ${plan.highlight ? 'text-white/90' : 'text-black'}`}>
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg 
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-highlight-green' : 'text-highlight-green'}`}
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className={`text-sm ${plan.highlight ? 'text-white/95' : 'text-black'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-lg text-sm font-semibold transition-all duration-200 transform hover:translate-y-[-2px] ${
                  plan.highlight
                    ? 'bg-white text-deep-green hover:bg-gray-50 shadow-lg'
                    : 'bg-white text-deep-green border border-deep-green hover:bg-deep-green hover:text-white'
                }`}
              >
                {plan.action}
              </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
