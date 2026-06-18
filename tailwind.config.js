/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E62A1', // From the header image blue tone
          dark: '#144675',
          light: '#287FCA',
        },
        secondary: {
          DEFAULT: '#52A7D2', // The light blue from the Sign Up button / badge
        },
        background: '#0B2D4F', // Dark background of header
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}