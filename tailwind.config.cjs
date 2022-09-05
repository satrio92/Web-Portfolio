/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        k2d: ['K2D']
      },
      colors: {
        "primary": "#302F49",
        "secondary": "#717394"
      }
    },
  },
  plugins: [],
}