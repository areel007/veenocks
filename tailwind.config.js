/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image-1': "url('./src/assets/images/pexels-chris-f-1283219.jpg')"
      }
    },
  },
  plugins: [],
}