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
      'gray': '#7C7B7B',
      'white': '#ffffff',
      'border-gray': '#D9D9D9',
      'active': '#676767'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

