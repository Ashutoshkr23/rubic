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
        "bg-white-dim": "rgba(246, 246, 246,1)",
        "bg-dark": "rgba(0, 0, 0, 1)",
        "bg-white": "rgba(255, 255, 255, 1)",
        "bg-white-setting": "rgba(250, 250, 250, 1)",
        "bg-white-set-options": "rgba(242, 242, 242, 1)",
        "bg-red": "rgba(235, 64, 52, 1)",




      },
      colors:{
        "f-green": "rgba(0, 226, 142, 1)",
        "f-red": "rgba(235, 64, 52,1)",
        "border-light": "rgba(52, 52, 52, 1)",
        
      }
    },
  },
  plugins: [require("daisyui")],
}
