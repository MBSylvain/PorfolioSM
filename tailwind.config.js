module.exports = {
  darkMode: "class", // Active le dark mode via la classe 'dark'
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "ui-sans-serif", "system-ui"],
      },
      colors: {
        grayLight: "#F5F5F5",
        grayMedium: "#B0B0B0",
        grayDark: "#333333",
        offWhite: "#FAFAFA",
        softBlack: "#f3f5f7",
        blueGray: "#52606d",
        beigeGray: "#d9dee3",
        primary: "#2457ff",
        accent: "#0f172a",
        secondary: "#e85d3f",
      },
      animation: {
        blob: "blob 7s infinite",
        "gradient-x": "gradient-x 15s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
