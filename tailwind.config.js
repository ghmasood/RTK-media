/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        customShimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimShim: "customShimmer  2.5s infinite",
      },
    },
  },
  plugins: [],
};
