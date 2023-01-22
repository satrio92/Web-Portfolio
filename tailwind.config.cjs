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
        k2d: ['K2D'],
        fredoka: ['Fredoka'],
        impact: ['Impact']
      },
      colors: {
        "primary": "#FE5944",
        "secondary": "#FFFFFF",
        "primary-snow": "#F64D36",
        "primary-dark": "#EB3F29",
        "omugray": "#F3EAE8",
        "ringyellow": "#FFD33E"
      }
    },
  },
  plugins: [],
}