/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "orange" : "#ff523b",
        "baby-pink" : "#ffd6d6",
      },
      fontFamily: {
        "poppins" : ['Poppins', 'sans-serif'],
      }
    
    },
  },
  plugins: [],
}

