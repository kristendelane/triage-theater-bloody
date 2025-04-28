/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        colors: {
          erbg: "#1A1A1A",
          ertan: "#FF6B6B",
        },
        fontFamily: {
          spooky: ["Creepster", "cursive"],
        },
      },
    },
    plugins: [],
  };
  