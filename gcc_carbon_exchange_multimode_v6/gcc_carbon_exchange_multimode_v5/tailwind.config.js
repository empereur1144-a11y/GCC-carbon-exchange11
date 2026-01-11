/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'arabic-heading': ['Cairo', 'sans-serif'],
                'arabic-body': ['Almarai', 'sans-serif'],
                'institutional': ['Inter', 'sans-serif'],
            },
            colors: {
                'sovereign-green': {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                    DEFAULT: '#16a34a'
                },
                'sovereign-navy': '#0f172a',
            }
        },
    },
    plugins: [
        require('tailwindcss-logical'),
    ],
}
