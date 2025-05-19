/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#f5d485',
          DEFAULT: '#d4af37',
          dark: '#a8892b',
        },
        black: {
          light: '#252525',
          DEFAULT: '#121212',
          dark: '#080808',
        },
        success: {
          light: '#4ade80',
          DEFAULT: '#22c55e',
          dark: '#15803d',
        },
        warning: {
          light: '#fcd34d',
          DEFAULT: '#f59e0b',
          dark: '#b45309',
        },
        error: {
          light: '#f87171',
          DEFAULT: '#ef4444',
          dark: '#b91c1c',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f5d485, #d4af37, #a8892b)',
        'black-gradient': 'linear-gradient(135deg, #252525, #121212, #080808)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};