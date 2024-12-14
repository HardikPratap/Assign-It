/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e2e8f0",
        secondary: "#94a3b8",
        third: "#475569",
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

// border border-white/5 bg-neutral-900
