const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,tsx,jsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                Inter: ["Inter", ...defaultTheme.fontFamily.sans],
            },
            screens: {
                'sm' : {'max' : '450px'} ,
            },
        },
    },
    plugins: [],
};
