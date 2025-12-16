/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js,tsx,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'xxsm': '450px',
        'lsm': '500px',
        'xsm': '600px',
        'sm': '640px',   
        'md': '768px',  
        'lg': '1024px', 
        'xl': '1280px',
      }
    },
  },
  plugins: [],
}