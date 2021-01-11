module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
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
        maxWidth: {
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
