/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinner: {
          transform: "rotate(360deg)",
        },
      },
      animation: {
        spinner: "spinner 1slinear infinite",
      },
    },
  },
  plugins: [],
}