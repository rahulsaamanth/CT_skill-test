/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url(./assets/background.jpg)",
        historyBackground: "url(./assets/historyBackground.png)",
      },
    },
  },
  plugins: [],
}
