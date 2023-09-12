/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ["Roboto", 'cursive']
      },
      backgroundImage: {
        'intro-image': "url('./assets/images/landing-page-intro.jpg')",
        'animated-img': "url('./assets/images/animated-img.png')"
      },
    }
  },
  plugins: [],
})