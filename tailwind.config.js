/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark': '#0F172B',
      'gray-light': '#FAFAFA',
      'gray-dark': '#F5F5F5',
      'orange': '#E45447',
      'font-second': '#7C7B7B',
      'font-primary': '#0F172B'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

