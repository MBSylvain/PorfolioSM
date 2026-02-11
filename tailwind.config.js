module.exports = {
    darkMode: 'class', // Active le dark mode via la classe 'dark'
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui"],
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
        },
    },
    plugins: [],
};
