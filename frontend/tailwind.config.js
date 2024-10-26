/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#FFCE1A',
        'secondary': "#0D0842",
        'blackBG': "#FF5841",
        'Favourite': '#FF5841'
      },
      fontFamily:{
        'primary': ["Montserrat", "sansserif"],
        'secondary': ["Nunito Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

