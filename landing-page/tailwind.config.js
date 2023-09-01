/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'intro-image': "url('./assets/images/landing-page-intro.jpg')",
        'animated-img': "url('./assets/images/animated-img.png')"
      }
    },
  },
  plugins: [],
}

