/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}', // Tailwind analizará tus archivos Angular
  ],
  theme: {
    extend: {
      fontFamily: {
        ibm: ['"IBM Plex Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
