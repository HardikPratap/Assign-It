/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDelay: {
        "-300": "-300ms",
        "-100": "-100ms",
        1000: "1000ms",
        3000: "3000ms",
        5000: "5000ms",
      },
    },
  },
  plugins: [],
};
