/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poly: ['var(--font-poly)', ...fontFamily.sans],
        inter: ['var(--font-inter)', ...fontFamily.sans],
      },
      colors: {
        navy: '#101C2D',
        'soft-white': '#FFF8F4',
        'comfort-blue': '#20b3ff',
        'showcase-grey': '#1b1f23',
        'deep-navy': '#0D1628',
        'panel-blue': '#010B3C',
        'background-white': '#D5D5D5',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-out': 'fadeOut 0.8s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
