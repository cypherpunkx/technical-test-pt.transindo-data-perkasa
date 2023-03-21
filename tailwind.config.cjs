/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "desaturated-dark-cyan": "hsl(180, 29%, 50%)",
        "dark-grayin-cyan": "hsl(180, 8%, 52%)",
      },
      backgroundColor: {
        "desaturated-dark-cyan": "hsl(180, 29%, 50%)",
        "dark-grayin-cyan": "hsl(180, 8%, 52%)",
        "light-grayin-cyan": "hsl(180, 52%, 96%)",
      },
      borderColor: {
        "desaturated-dark-cyan": "hsl(180, 29%, 50%)",
      },
      fontFamily: {
        sans: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
