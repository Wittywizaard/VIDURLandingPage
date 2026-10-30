'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CoreJobs() {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = [
    {
      id: 1,
      label: '01 / DOCUMENT INTELLIGENCE',
      title: 'Analyse Any Document',
      tabTitle: 'Analyse Any Document',
      description: 'Upload notices, orders, workings and multiple files - including scanned PDFs - and ask questions across the complete matter.',
      note: 'Even the scan you would normally avoid.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      demoFiles: [
        { name: 'Notice.pdf', type: 'Source document' },
        { name: 'Order_scanned.pdf', type: 'Scanned document' },
        { name: 'Supporting_workings.pdf', type: 'Supporting document' }
      ]
    },
    {
      id: 2,
      label: '02 / PROFESSIONAL DRAFTING',
      title: 'Draft Professionally',
      tabTitle: 'Draft Professionally',
      description: 'Generate professional-quality legal documents, opinions, and correspondence with built-in templates and AI assistance.',
      note: 'From notices to detailed opinions.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      demoFiles: []
    },
    {
      id: 3,
      label: '03 / CONTEXTUAL ADVICE',
      title: 'Advise With Context',
      tabTitle: 'Advise With Context',
      description: 'Get AI-powered recommendations and insights based on relevant case law, statutes, and professional knowledge.',
      note: 'Backed by trusted sources.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      demoFiles: []
    }
  ];

  const activeJob = jobs[activeTab];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-green mb-4">
            Discover What VIDUR Can Do
          </h2>
        </motion.div>

        {/* Tabs Container */}
        <div className="flex justify-center pb-8">
          {/* Tabs - Sliding Segmented Control */}
          <div className="inline-flex bg-white rounded-full p-1.5 gap-1 shadow-2xl border border-gray-100">
            {jobs.map((job, index) => (
              <button
                key={job.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-deep-green text-white shadow-md'
                    : 'text-black hover:text-gray-900'
                }`}
              >
                {job.tabTitle}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0a3d32] rounded-3xl p-6 md:p-10 shadow-xl"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - Description */}
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {activeJob.title}
              </h3>
              <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed">
                {activeJob.description}
              </p>
              <button className="bg-white text-deep-green px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-105 active:scale-95 group">
                Start Free Trial
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Right Side - Demo Interface */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-black">
              {activeTab === 0 ? (
                // Document Analysis Demo — full-bleed video
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
                  <video
                    className="absolute inset-0 w-full h-full object-cover scale-[1.12]"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  >
                    <source src="/analyse-document-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                // Placeholder for other tabs
                <div className="h-full flex items-center justify-center py-12 bg-white">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      {activeJob.icon}
                    </div>
                    <p className="text-gray-500 text-sm">Demo interface coming soon</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
