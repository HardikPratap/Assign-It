/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "text-neutral-200",
        secondary: "text-neural-400",
        third: "text-neural-600",
      },
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
