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
              {/* Badge for highlighted plan */}
              {plan.highlight && (
                <div className="inline-block mb-3">
                  <span className="text-xs font-bold bg-highlight-green text-dark-accent px-3 py-1 rounded-full">
                    RECOMMENDED
                  </span>
                </div>
              )}

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
                    ? 'bg-highlight-green text-dark-accent hover:bg-[#78bd41] shadow-lg'
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
