const colors = require("tailwindcss/colors");

module.exports = {
    purge: {
        content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
        options: {
            safelist: [
                "bg-blueGray-300",
                "bg-coolGray-300",
                "bg-trueGray-300",
                "bg-gray-300",
                "bg-warmGray-300",
                "bg-red-300",
                "bg-orange-300",
                "bg-amber-300",
                "bg-yellow-300",
                "bg-lime-300",
                "bg-green-300",
                "bg-emerald-300",
                "bg-teal-300",
                "bg-cyan-300",
                "bg-lightBlue-500",
                "bg-blue-300",
                "bg-indigo-300",
                "bg-violet-300",
                "bg-purple-300",
                "bg-fuchsia-300",
                "bg-pink-300",
                "bg-rose-300",
                "text-blueGray-500",
                "text-coolGray-500",
                "text-trueGray-500",
                "text-gray-500",
                "text-warmGray-500",
                "text-red-500",
                "text-orange-500",
                "text-amber-500",
                "text-yellow-500",
                "text-lime-500",
                "text-green-500",
                "text-emerald-500",
                "text-teal-500",
                "text-cyan-500",
                "text-lightBlue-300",
                "text-blue-500",
                "text-indigo-500",
                "text-violet-500",
                "text-purple-500",
                "text-fuchsia-500",
                "text-pink-500",
                "text-rose-500",
            ],
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
