/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        edmanDark: "#1f1f1f",
        edmanGray: "#2a2a2a",
        edmanGold: "#c6a052",
        edmanLightGold: "#e6c37a"
      }
    },
  },
  plugins: [],
}