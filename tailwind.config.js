module.exports = {
    darkMode: 'class', // Active le dark mode via la classe 'dark'
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Outfit", "Inter", "ui-sans-serif", "system-ui"],
            },
            colors: {
                grayLight: '#F5F5F5',
                grayMedium: '#B0B0B0',
                grayDark: '#333333',
                offWhite: '#FAFAFA',
                softBlack: '#222222',
                blueGray: '#5A6D7A',
                beigeGray: '#D6D3CD',
                primary: '#14b8a6', // Teal moderne
                accent: '#6366f1', // Indigo
                secondary: '#f59e42', // Orange doux
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
