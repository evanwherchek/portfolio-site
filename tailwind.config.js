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
        ripple: 'ripple var(--duration, 2s) ease calc(var(--i, 0)*.2s) infinite',
        'glow-drift-1': 'glowDrift1 26s ease-in-out infinite',
        'glow-drift-2': 'glowDrift2 30s ease-in-out infinite',
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
        ripple: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { transform: 'translate(-50%, -50%) scale(0.9)' },
        },
        glowDrift1: {
          '0%, 100%': { transform: 'translate(-6%, -4%) scale(1)' },
          '50%': { transform: 'translate(4%, 6%) scale(1.15)' },
        },
        glowDrift2: {
          '0%, 100%': { transform: 'translate(5%, 4%) scale(1)' },
          '50%': { transform: 'translate(-5%, -6%) scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};
