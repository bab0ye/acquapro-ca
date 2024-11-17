/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066cc',
          dark: '#004d99',
        },
        secondary: {
          DEFAULT: '#00cc66',
          dark: '#009933',
        },
        metallic: {
          DEFAULT: '#71797E',
          light: '#A8A9AD',
        }
      }
    },
  },
  plugins: [],
}