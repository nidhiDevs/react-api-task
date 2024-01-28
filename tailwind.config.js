/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        lcolor: "#f6f6f6"
      }
    },
    fontFamily:{
      "barlow": ["Barlow", 'sans-serif']
    },
    
  },
  plugins: [],
}

