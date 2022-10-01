/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'ORANGE' : '#f06449',
        'LIGHT' : '#ede6e3',
        'GREY' : '#dadad9',
        'DARK' : '#36382e',
        'BLUE' : '#5bc3eb'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
