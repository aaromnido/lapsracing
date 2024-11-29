/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#DF4035',
          dark: '#091116',
        },
      },
    },
  },
  plugins: [],
};