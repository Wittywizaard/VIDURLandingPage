'use client';

import { motion } from 'framer-motion';

type Source = {
  publisher: string;
  title: string;
  subtitle: string;
  year: string;
  /** Cover base color */
  cover: string;
  /** Accent line / spine tip */
  accent: string;
  /** Light text on dark covers vs dark text on parchment */
  ink: 'light' | 'dark';
};

const sources: Source[] = [
  {
    publisher: 'Bharat',
    title: 'Income Tax Act',
    subtitle: 'Comments & Referencer',
    year: '2025',
    cover: '#6B1E1E',
    accent: '#C9A227',
    ink: 'light',
  },
  {
    publisher: 'VIDUR',
    title: 'Knowledge Desk',
    subtitle: 'Tax & Legal Briefings',
    year: 'Series',
    cover: '#0D5649',
    accent: '#87CE50',
    ink: 'light',
  },
  {
    publisher: 'ICSI',
    title: 'Corporate Law',
    subtitle: 'Secretarial Practice',
    year: 'Guide',
    cover: '#1B3A4B',
    accent: '#D4A574',
    ink: 'light',
  },
  {
    publisher: 'ICAI',
    title: 'Audit of Banks',
    subtitle: 'Guidance Note',
    year: '2024',
    cover: '#145A32',
    accent: '#E8C547',
    ink: 'light',
  },
  {
    publisher: 'GST',
    title: 'GST Acts',
    subtitle: 'Rules & Notifications',
    year: '2025',
    cover: '#3D2914',
    accent: '#C4A484',
    ink: 'light',
  },
  {
    publisher: 'MCA',
    title: 'Companies Act',
    subtitle: 'Ready Reckoner',
    year: '2013',
    cover: '#1A2F4A',
    accent: '#8FA8C8',
    ink: 'light',
  },
  {
    publisher: 'CBDT',
    title: 'Circulars',
    subtitle: 'Notifications Digest',
    year: 'Live',
    cover: '#2C1810',
    accent: '#B8956C',
    ink: 'light',
  },
  {
    publisher: 'Courts',
    title: 'Case Digests',
    subtitle: 'Tax & Corporate',
    year: 'Indexed',
    cover: '#0A3D32',
    accent: '#A8D5A2',
    ink: 'light',
  },
];

function BookCover({ source }: { source: Source }) {
  const light = source.ink === 'light';

  return (
    <div
      className="relative w-[118px] h-[168px] md:w-[132px] md:h-[188px] rounded-[3px] shadow-[4px_8px_24px_rgba(0,0,0,0.22)] overflow-hidden shrink-0 transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[6px_14px_28px_rgba(0,0,0,0.28)]"
      style={{ backgroundColor: source.cover }}
      aria-hidden="true"
    >
      {/* Spine edge */}
      <div
        className="absolute inset-y-0 left-0 w-[7px] md:w-2"
        style={{
          background: `linear-gradient(90deg, rgba(0,0,0,0.35) 0%, rgba(255,255,255,0.08) 45%, rgba(0,0,0,0.2) 100%)`,
        }}
      />
      {/* Spine accent stripe */}
      <div
        className="absolute top-0 bottom-0 left-[7px] md:left-2 w-[2px]"
        style={{ backgroundColor: source.accent }}
      />

      {/* Soft paper grain */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.4) 2px, rgba(255,255,255,0.4) 3px)',
        }}
      />

      {/* Top sheen */}
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

      {/* Cover content */}
      <div
        className={`absolute inset-0 pl-4 pr-3 py-4 md:pl-5 md:pr-3.5 md:py-5 flex flex-col ${
          light ? 'text-white' : 'text-[#1a1a1a]'
        }`}
      >
        <div
          className="text-[9px] md:text-[10px] font-semibold tracking-[0.18em] uppercase opacity-80"
          style={{ fontFamily: 'var(--font-book), Georgia, serif' }}
        >
          {source.publisher}
        </div>

        <div
          className="mt-3 mb-2.5 h-px w-10 opacity-70"
          style={{ backgroundColor: source.accent }}
        />

        <h3
          className="text-[15px] md:text-[17px] font-bold leading-[1.15] tracking-tight"
          style={{ fontFamily: 'var(--font-book), Georgia, serif' }}
        >
          {source.title}
        </h3>

        <p className="mt-1.5 text-[10px] md:text-[11px] leading-snug opacity-75">
          {source.subtitle}
        </p>

        <div className="mt-auto pt-3 flex items-end justify-between gap-2">
          <span
            className="text-[10px] md:text-[11px] font-semibold tracking-wide opacity-90"
            style={{ color: source.accent }}
          >
            {source.year}
          </span>
          <span className="text-[8px] uppercase tracking-[0.14em] opacity-50">
            Ref.
          </span>
        </div>
      </div>

      {/* Bottom edge depth */}
      <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
    </div>
  );
}

export default function TrustedKnowledge() {
  // Four copies for a seamless 25% translate loop
  const track = [...sources, ...sources, ...sources, ...sources];

  return (
    <section
      id="knowledge"
      className="py-16 md:py-20 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #F4F7F6 0%, #FFFFFF 42%, #F4F7F6 100%)',
        // Local book display face — legal/reference feel without changing site UI font
        ['--font-book' as string]: "'Source Serif 4', Georgia, 'Times New Roman', serif",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12 text-center"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-deep-green mb-2">
            Trusted Knowledge & Sources
          </h2>
          <p className="text-xs md:text-sm text-black/70 max-w-2xl mx-auto">
            Built on verified professional knowledge from India&apos;s most trusted
            tax, legal, and regulatory references
          </p>
        </motion.div>
      </div>

      {/* Full-bleed sliding shelf */}
      <div className="relative">
        {/* Shelf line */}
        <div className="pointer-events-none absolute left-0 right-0 bottom-[52px] md:bottom-[56px] h-px bg-gradient-to-r from-transparent via-deep-green/15 to-transparent" />
        <div className="pointer-events-none absolute left-0 right-0 bottom-[48px] md:bottom-[52px] h-3 bg-gradient-to-b from-black/[0.04] to-transparent" />

        <div className="overflow-hidden py-6 md:py-8">
          <div className="flex w-max animate-book-scroll gap-5 md:gap-7 px-4">
            {track.map((source, index) => (
              <div
                key={`${source.publisher}-${source.title}-${index}`}
                className="group flex flex-col items-center gap-3 w-[118px] md:w-[132px]"
              >
                <BookCover source={source} />
                <div className="text-center min-h-[36px]">
                  <div className="text-[10px] md:text-[11px] font-semibold text-deep-green/55 uppercase tracking-[0.14em]">
                    {source.publisher}
                  </div>
                  <div className="text-[11px] md:text-xs font-semibold text-deep-green leading-snug mt-0.5">
                    {source.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bookScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        .animate-book-scroll {
          animation: bookScroll 55s linear infinite;
          will-change: transform;
        }

        .animate-book-scroll:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-book-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
