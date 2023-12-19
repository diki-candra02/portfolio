/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secodary: '#64748b',
        dark: '#0F172B',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

