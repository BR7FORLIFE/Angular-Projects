/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './src/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        ibm: ['"IBM Plex Sans"', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
