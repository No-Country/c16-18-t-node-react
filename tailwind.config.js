/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': '"Nunito Sans", sans-serif'
      },
      colors: {
        darkGreen1: "#2a512a",
        darkGreen2: "#237323",
        grayishGreen1: "#418541",
        grayishGreen2: "#5ca35c",
        grayishGreen3: "#aac76f",
        yellowGreen: "#a7d251",
        avocadoGreen: "#76902e"
      },
      backgroundImage: {
        heroImg: "url('./public/hero.png')"
      }
    },
  },
  plugins: [],
}