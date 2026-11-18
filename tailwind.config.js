/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { ink: "#0c0d10", steel: "#16181d", gold: "#d4a84b", sand: "#f4f1ea" },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeUp: { "0%": { opacity: 0, transform: "translateY(28px)" }, "100%": { opacity: 1, transform: "none" } },
        zoom: { "0%": { transform: "scale(1.12)" }, "100%": { transform: "scale(1)" } },
      },
      animation: { fadeUp: "fadeUp .9s ease both", zoom: "zoom 2.5s ease-out both" },
    },
  },
  plugins: [],
};
