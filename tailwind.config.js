/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
        'primary-blue' : '#1B4571',
        'secondary-blue' : '#0095FA',
        'tertiary-blue': '#F5F9FF',
        'accent' : '#DBA11C',
        'accent-hover': '#EDD291'
      }
    },
  },
  plugins: [],
}