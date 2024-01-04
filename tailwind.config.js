/** @type {import('tailwindcss').Config} */
export default {
  content: {
  relative: true,
  files: ['./src/*.{html,js}', './index.html', './src/**/*.{vue,js,ts,jsx,tsx}', "./node_modules/tw-elements/dist/js/**/*.js"],
 },
  plugins: [""],
  theme: {
    extend: {
      zIndex: {
        '60': '60',
        '90': '90',
        '100': '100',
        '99999': '99999'
      },
      fontFamily: {
        'acumin': ['Acumin Variable Concept'],
        'open-sans' : ['Open Sans', 'sans-serif'],
        'rock': ['Rock Salt', 'cursive']
      },
      colors: {
        primary: '#1A1A1A',
        light: '#212121',
        black: "#000000",
        white: "#FFFFFF",
        bg_primary: '#FF9400'
      },
      rotate: {
        '50': '50deg',
      },
      animation: {
        slideup: 'slideup 1s ease-in-out',
        slidedown: 'slidedown 1s ease-in-out',
        slideleft: 'slideleft 1s ease-in-out',
        slideright: 'slideright 1s ease-in-out',
        wave: 'wave 1.2s linear infinite',
        slowfade: 'slowfade 2.2s ease-in-out',
      },
      keyframes: {
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: 'translateY(25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slidedown: {
          from: { opacity: 0, transform: 'translateY(-25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slideleft: {
          from: { opacity: 0, transform: 'translateX(-20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideright: {
          from: { opacity: 0, transform: 'translateX(20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        wave: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
      },
    },
  },
};
