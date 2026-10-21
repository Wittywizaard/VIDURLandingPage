# VIDUR Brand Guidelines Reference

## Official Brand Identity

This reference ensures all future updates maintain brand consistency.

## Color Palette

### Primary Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| Deep Green | `#0D5649` | `rgb(13, 86, 73)` | Primary brand authority, headers, main text |
| Dark Accent | `#064E44` | `rgb(6, 78, 68)` | Depth, footer, dark panels, shadows |
| Highlight Green | `#87CE50` | `rgb(135, 206, 80)` | CTAs, active states, emphasis, accents |
| White | `#FFFFFF` | `rgb(255, 255, 255)` | Content surfaces, contrast, light backgrounds |
| Soft Neutral | `#F4F7F6` | `rgb(244, 247, 246)` | Background differentiation, cards, secondary surfaces |

### Color Usage Rules

**✅ Correct Usage:**
- Deep Green for headlines on light backgrounds
- Dark Accent for footer and dark sections
- Highlight Green for primary CTAs and active states
- White for text on dark backgrounds
- Soft Neutral for alternating section backgrounds

**❌ Incorrect Usage:**
- Do NOT use orange, blue, purple, pink, or yellow
- Do NOT use neon or bright accent colors
- Do NOT make Highlight Green a dominant background color
- Do NOT use colors outside the official palette

### Color Combinations

**Recommended Pairings:**
- Deep Green text + White background
- White text + Deep Green background
- Highlight Green button + Dark Accent text
- Dark Accent background + White text

**Contrast Requirements:**
- Body text: Minimum 4.5:1 contrast ratio
- Large text: Minimum 3:1 contrast ratio
- Interactive elements: Minimum 3:1 against background

## Typography

### Font Family
**Montserrat** - Exclusively, no exceptions

**Approved Weights:**
- Medium (500) - Body text, navigation, labels
- Bold (700) - Section headings, card titles
- ExtraBold (800) - Hero headlines, major headings

**❌ Do NOT Use:**
- Inter, Poppins, Roboto, Open Sans
- Serif fonts (Georgia, Times, etc.)
- Display fonts
- Any font other than Montserrat

### Typography Scale

#### Desktop

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Headline | 60-76px | ExtraBold (800) | 1.1 |
| Section Headline | 38-52px | Bold (700) | 1.2 |
| Subsection Headline | 28-32px | Bold (700) | 1.3 |
| Card Headline | 20-26px | Bold (700) | 1.3 |
| Body Large | 18-20px | Medium (500) | 1.6 |
| Body Regular | 15-18px | Medium (500) | 1.6 |
| Navigation | 13-15px | Medium (500) | 1.4 |
| Labels/Eyebrows | 11-13px | Bold (700) | 1.2 |

#### Mobile

Scale down appropriately:
- Hero: 40-48px
- Section: 28-36px
- Card: 18-22px
- Body: 15-16px

### Typography Best Practices

**✅ Do:**
- Use generous line spacing (1.5-1.6 for body)
- Break headlines thoughtfully
- Maintain hierarchy consistently
- Use sentence case for most content
- Use uppercase sparingly for labels

**❌ Don't:**
- Mix fonts from different families
- Use excessive uppercase
- Cram text without whitespace
- Ignore responsive scaling
- Use tiny font sizes (<14px for body)

## Spacing System

### Base Unit: 8px

All spacing should follow 8px increments:
- 0.5 = 4px
- 1 = 8px
- 2 = 16px
- 3 = 24px
- 4 = 32px
- 6 = 48px
- 8 = 64px
- 12 = 96px
- 16 = 128px
- 24 = 192px

### Section Spacing
- Section padding vertical: 96px (py-24)
- Section padding horizontal: 24-32px (px-6 lg:px-8)
- Max content width: 1360px

### Component Spacing
- Cards: 16-24px padding
- Buttons: 12-16px vertical, 20-32px horizontal
- Grid gaps: 24-32px
- Element margins: 8-24px

## Design Principles

### Visual Language
1. **Premium & Authoritative** - Enterprise-focused, serious, credible
2. **Structured** - Clear grid, precise alignment, organized
3. **Spacious** - Generous whitespace, breathing room
4. **Precise** - Sharp edges, clean lines, intentional
5. **Restrained** - Purposeful motion, controlled interactions

### Layout Standards
- Use 12-column responsive grid
- Center content in max-width container (1360px)
- Maintain consistent margins
- Align all elements to grid
- Create clear visual hierarchy

### Component Style
- Rectangular cards with 8-12px corner radius
- Subtle borders (1-2px, low opacity)
- Minimal shadows (light, controlled)
- No excessive glassmorphism
- No heavy blur effects

## Interaction Design

### Animation Principles
1. **Purposeful** - Every animation serves a function
2. **Restrained** - Subtle, professional, controlled
3. **Fast** - Complete within 200-600ms
4. **Smooth** - Use easing (ease-in-out)
5. **Respectful** - Honor reduced motion preferences

### Animation Types

**Scroll Reveal:**
- Distance: 8-16px vertical
- Duration: 400-600ms
- Opacity: 0 → 1
- Easing: ease-out

**Card Hover:**
- Movement: 2-4px
- Duration: 160-240ms
- Effect: Subtle elevation or border
- Easing: ease-in-out

**Button Hover:**
- Color change: 200ms
- Scale: None or 1.02x maximum
- Arrow movement: 4-8px
- Easing: ease-in-out

**Navigation:**
- Dropdown: 200-300ms
- Mobile menu: 300ms
- Easing: ease-in-out

### Interactive States

**Buttons:**
- Default: Full color, clear text
- Hover: Slightly darker or elevated
- Active: Pressed appearance
- Disabled: 50% opacity, no cursor
- Focus: Visible outline (2px)

**Cards:**
- Default: Subtle border
- Hover: Border highlight + slight movement
- Active: Border highlight maintained
- Focus: Visible outline

## Icons & Graphics

### Icon Style
- Line icons only (no filled)
- Consistent stroke weight (1.5-2px)
- Single icon family throughout
- Same color as surrounding text
- Proper sizing (16-24px typically)

### Graphics
**✅ Use:**
- Real product screenshots
- Professional interface mockups
- Authentic legal imagery
- Clean vector graphics
- High-quality assets

**❌ Avoid:**
- Cartoon characters
- 3D mascots
- Decorative robots
- Generic stock photos
- Low-quality images

## Voice & Tone

### Writing Style
- Professional but approachable
- Clear and concise
- Authoritative without intimidation
- Technical but understandable
- Confident and direct

### Content Guidelines
- Focus on professional benefits
- Use real data and statistics
- Avoid marketing hyperbole
- Be specific and precise
- Emphasize trust and credibility

## Responsive Behavior

### Breakpoints
```css
Mobile: 0-767px
Tablet: 768-1023px
Desktop: 1024-1439px
Large: 1440px+
```

### Scaling Rules
- Typography scales proportionally
- Spacing reduces on smaller screens
- Components stack vertically on mobile
- Touch targets minimum 44x44px
- Maintain aspect ratios

## Accessibility Standards

### WCAG 2.2 AA Requirements
- Color contrast 4.5:1 (normal text)
- Color contrast 3:1 (large text)
- Keyboard navigation functional
- Focus indicators visible
- ARIA labels on interactive elements
- Semantic HTML structure
- Alt text on images
- Captions on video

### Implementation
- Use semantic HTML5 elements
- Provide skip links
- Maintain heading hierarchy
- Label form inputs
- Provide text alternatives
- Support screen readers

## Brand Personality

**VIDUR is:**
- Sophisticated
- Authoritative
- Trustworthy
- Professional
- Intelligent
- Composed
- Precise
- Reliable

**VIDUR is NOT:**
- Playful
- Casual
- Experimental
- Flashy
- Generic
- Entertainment-focused
- Decorative
- Trend-chasing

## Quality Standards

### Visual Quality
- Crisp, sharp rendering
- Proper anti-aliasing
- Smooth animations
- High-resolution assets
- Pixel-perfect alignment

### Code Quality
- Clean, organized code
- TypeScript types
- Component reusability
- Performance optimized
- Accessibility compliant

### Content Quality
- Error-free copy
- Consistent terminology
- Professional photography
- Accurate information
- Up-to-date content

## Review Checklist

Before publishing any design:
- [ ] Uses only Montserrat font
- [ ] Uses only official color palette
- [ ] Follows 8px spacing system
- [ ] Maintains visual hierarchy
- [ ] Has proper contrast ratios
- [ ] Includes hover states
- [ ] Supports keyboard navigation
- [ ] Has focus indicators
- [ ] Works on all screen sizes
- [ ] Respects reduced motion
- [ ] Uses professional imagery
- [ ] Maintains brand personality
- [ ] Has proper documentation

---

## Brand Compliance Contact

For questions about brand guidelines or approvals:
- Review this document first
- Check existing implementations
- Consult design team if needed

## Updates

This reference is based on the October 2026 brand specifications.
Any updates should be reflected in:
- `tailwind.config.ts` (colors)
- `app/layout.tsx` (fonts)
- Component implementations

---

**Version**: 1.0.0
**Last Updated**: October 21, 2026
**Status**: Official Reference
