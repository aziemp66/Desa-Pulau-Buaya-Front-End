module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "noto-sans": ["Noto Sans", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "blue-dark": "#2b6474",
        "blue-light": "#759ba6",
        "cream-dark": "#bfb6a4",
        "cream-light": "#f5f5ef",
      },
    },
  },
  plugins: [],
};
