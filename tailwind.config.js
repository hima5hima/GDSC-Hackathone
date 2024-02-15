/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#1976D2",
        mainDark: "#005fbe",
        textShade: "#92929D",
        bgColor: "#1976D20D",
        btnHoverBg: "#F5F5F5",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
