module.exports = {
  darkMode: "class", // Active le dark mode via la classe 'dark'
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "ui-sans-serif", "system-ui"],
        display: ["Instrument Serif", "Georgia", "serif"],
        mono: ["DM Mono", "monospace"],
      },
      colors: {
        grayLight: "#F1EEE6",
        grayMedium: "#77786F",
        grayDark: "#242925",
        offWhite: "#FCFAF5",
        softBlack: "#F4F0E8",
        blueGray: "#69746E",
        beigeGray: "#D8D2C5",
        primary: "#C64F37",
        accent: "#1E2522",
        secondary: "#71836D",
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
