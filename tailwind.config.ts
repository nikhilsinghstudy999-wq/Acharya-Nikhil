import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cosmic: {
          900: '#0A0E27',
          800: '#141A3A',
          700: '#1C2352',
        },
        gold: '#D4AF37',
        accent: '#7B2FBE',
        cyan: '#00F0FF',
        orange: {
          400: '#F97316',
          500: '#EA580C',
          600: '#C2410C',
          700: '#9A3412',
        },
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Inter', 'sans-serif'],
        devanagari: ['Tiro Devanagari', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse-slower': 'spin-reverse 25s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          to: { transform: 'rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
