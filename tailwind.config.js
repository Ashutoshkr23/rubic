/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        "bg-black": "rgba(24, 26, 27, 1)",
        "bg-grey": "rgba(38, 40, 42, 1)",
        "bg-green": "rgba(0, 226, 142, 1)",
        "bg-grey-light": "rgba(60, 62, 64, 1)",
        "bg-grey-div": "rgba(38, 40, 41, 1)",
        "bg-grey-option": "rgba(65, 67, 69, 1)",
        "bg-grey-settings": "rgba(48, 50, 52,1)",


      },
      colors:{
        "f-green": "rgba(0, 226, 142, 1)",
      }
    },
  },
  plugins: [require("daisyui")],
}
