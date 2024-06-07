/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.css",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      'intense': '0 20px 30px -10px rgba(0, 0, 0, 0.5), 0 10px 20px -10px rgba(0, 0, 0, 0.4)',
      'extra-intense': '0 30px 60px -15px rgba(0, 0, 0, 0.6), 0 15px 30px -15px rgba(0, 0, 0, 0.5)',
    },
    borderRadius: {
      'extra-lg': '2rem',  
      'super-lg': '3rem',  
    },
    extend: {fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'heading1': ['Fraunces', 'serif']
    },
    colors: {
      'custom-black-1': '#000000',
      'custom-black-2': '',
    }},
  },
  plugins: [],
}