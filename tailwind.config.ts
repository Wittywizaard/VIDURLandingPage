import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // VIDUR Official Brand Colors
        'deep-green': '#0D5649',
        'dark-accent': '#064E44',
        'highlight-green': '#87CE50',
        'soft-neutral': '#F4F7F6',
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['60px', { lineHeight: '1.1', fontWeight: '800' }],
        'hero-lg': ['76px', { lineHeight: '1.1', fontWeight: '800' }],
        'section': ['38px', { lineHeight: '1.2', fontWeight: '700' }],
        'section-lg': ['52px', { lineHeight: '1.2', fontWeight: '700' }],
        'card': ['20px', { lineHeight: '1.3', fontWeight: '700' }],
        'card-lg': ['26px', { lineHeight: '1.3', fontWeight: '700' }],
      },
    },
  },
  safelist: [
    'text-white',
    'text-deep-green',
    'text-dark-accent',
    'text-highlight-green',
    'bg-white',
    'bg-deep-green',
    'bg-dark-accent',
    'bg-highlight-green',
    'bg-soft-neutral',
  ],
  plugins: [],
};

export default config;
