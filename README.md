# VIDUR AI - Premium Enterprise Legal-Tech Website

A sophisticated, modern landing page for VIDUR AI, the premium enterprise legal-tech platform trusted by tax and legal professionals across India.

## Overview

This is a complete redesign of the VIDUR AI landing page, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. The design emphasizes professional authority, clarity, and interactive storytelling while maintaining strict brand consistency.

## Tech Stack

- **Framework**: Next.js 16.4+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: Montserrat (500, 700, 800 weights)

## Brand Guidelines

### Color Palette
- **Deep Green** (`#0D5649`) - Primary brand authority
- **Dark Accent** (`#064E44`) - Depth, headers, footer
- **Highlight Green** (`#87CE50`) - Primary action, active states
- **White** (`#FFFFFF`) - Content surfaces, contrast
- **Soft Neutral** (`#F4F7F6`) - Background differentiation

### Typography
- **Font Family**: Montserrat exclusively
- **Weights**: Medium (500), Bold (700), ExtraBold (800)

## Features

### Sections (In Order)
1. **Header & Navigation** - Sticky navigation with dropdown menus
2. **Hero** - Cinematic hero with gradient background
3. **Geographic Coverage** - 170+ cities with animated counter
4. **Trusted by Professionals** - Statistics and professional categories
5. **Trusted Knowledge** - Authoritative sources showcase
6. **Professional Community** - Event highlights and features
7. **Challenges & Solutions** - Interactive comparison panel
8. **Book Demo** - High-conversion demo booking section
9. **Testimonials** - Professional testimonials carousel
10. **What's New** - Latest product features
11. **Learning Resources** - Webinars and educational content
12. **Pricing** - Regular and Corporate plans
13. **Final CTA** - Start with VIDUR conversion section
14. **Footer** - Comprehensive footer with links

### Interactive Elements
- Smooth scroll animations
- Animated statistics counters
- Interactive challenge/solution comparison
- Testimonial carousel with navigation
- Hover states and micro-interactions
- Mobile-responsive navigation

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with Montserrat font
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── GeographicCoverage.tsx
│   ├── TrustedByProfessionals.tsx
│   ├── TrustedKnowledge.tsx
│   ├── ProfessionalCommunity.tsx
│   ├── ChallengesSolutions.tsx
│   ├── BookDemo.tsx
│   ├── Testimonials.tsx
│   ├── WhatsNew.tsx
│   ├── LearningResources.tsx
│   ├── Pricing.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
└── package.json
```

## Design Principles

### Visual Language
- **Premium & Authoritative**: Enterprise-focused design
- **Structured Layouts**: 12-column grid system
- **Generous Whitespace**: 8px-based spacing
- **Precise Alignment**: Sharp, professional composition
- **Restrained Motion**: Purposeful, refined animations

### Interactions
- Scroll-reveal animations (8-16px movement, 400-600ms)
- Subtle card hover effects (2-4px elevation)
- Smooth state transitions
- Reduced motion support for accessibility

### Accessibility
- WCAG 2.2 AA compliance target
- Semantic HTML structure
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Reduced motion preferences respected

## Responsive Breakpoints

- **Mobile**: 360px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## Performance

- Optimized images and assets
- Lazy loading for below-fold content
- Efficient animations (GPU-accelerated transforms)
- Code splitting and tree shaking
- Target LCP: < 2.5s

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - VIDUR AI

## Contact

For questions or support regarding this implementation, contact the development team.

---

**Built with precision for professional excellence.**
