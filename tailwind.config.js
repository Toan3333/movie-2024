/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        main: "#080A1A",
        subMain: "#f20000",
        dry: "#0b0f29",
        start: "#ffb000",
        text: "#c0c0c0",
        border: "#4b5563",
        dryGray: "#e0d5d5",
      },
      fontSize: {
        small: "14px",
        title: "18px",
      },
    },
  },
  plugins: [],
};
