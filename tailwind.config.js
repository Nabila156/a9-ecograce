/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        gummy: ["Sour Gummy", "sans-serif"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

