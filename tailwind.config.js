/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#4f5ecd',
          600: '#3949ab',
          700: '#303f9f',
          800: '#283593',
          900: '#1a237e',
          950: '#0e1257',
        },
        secondary: {
          50: '#f5f6f7',
          100: '#e5e7eb',
          200: '#cfd3db',
          300: '#aeb4c3',
          400: '#8890a6',
          500: '#6b748e',
          600: '#565d75',
          700: '#464c5f',
          800: '#3d4151',
          900: '#363947',
          950: '#24252f',
        },
        accent: {
          50: '#f0f8ff',
          100: '#deeeff',
          200: '#b4d7ff',
          300: '#75b4ff',
          400: '#358eff',
          500: '#0a6cff',
          600: '#0047ff',
          700: '#0036ff',
          800: '#002dcc',
          900: '#0030a1',
          950: '#00205c',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'shimmer': 'shimmer 2s infinite linear',
        'marquee': 'marquee var(--duration, 30s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--duration, 30s) linear infinite',
        'blink': 'blink 1s step-end infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-50%))' }
        },
        'marquee-reverse': {
          from: { transform: 'translateX(calc(-50%))' },
          to: { transform: 'translateX(0)' }
        }
      },
    },
  },
  plugins: [],
};