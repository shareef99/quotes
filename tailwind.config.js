const colors = require("tailwindcss/colors");

module.exports = {
    purge: {
        content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
        options: {
            safelist: ["bg-red-400"],
        },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            animation: {
                fadeIn: "fadeIn 1s ease",
            },
            keyframe: {
                fadeIn: {
                    "50%": {
                        opacity: "0.5",
                    },
                },
            },
            colors: {
                blueGray: colors.blueGray,
                coolGray: colors.coolGray,
                trueGray: colors.trueGray,
                warmGray: colors.warmGray,
                orange: colors.orange,
                amber: colors.amber,
                lime: colors.lime,
                emerald: colors.emerald,
                teal: colors.teal,
                cyan: colors.cyan,
                lightBlue: colors.lightBlue,
                violet: colors.violet,
                fuchsia: colors.fuchsia,
                rose: colors.rose,
            },
        },

        screens: {
            sm: "520px",
            md: "768px",
            lg: "991px",
            xl: "1200px",
        },
        maxWidth: {
            0: "0",
            "1/4": "25%",
            "1/2": "50%",
            "6/10": "60%",
            "3/4": "75%",
            "9/10": "90%",
            full: "100%",
        },
        minWidth: {
            0: "0",
            "1/4": "25%",
            "1/2": "50%",
            "6/10": "60%",
            "3/4": "75%",
            "9/10": "90%",
            full: "100%",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
