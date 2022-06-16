module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "sans-serif"],
      },
      animation: {
        fade: "fadeOut 0.5s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: theme("text.blue.500") },
          "100%": { backgroundColor: theme("text.transparent") },
        },
      }),
    },
  },
  plugins: [],
};
