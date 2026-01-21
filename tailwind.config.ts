import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                neonOrange: "#FF5F1F",
                signalYellow: "#FFD700",
                concreteDark: "#2C2C2C",
            },
            fontFamily: {
                stencil: ['"Black Ops One"', "system-ui"],
                sans: ['Montserrat', "sans-serif"],
                marker: ['"Permanent Marker"', "cursive"],
                digit: ['VT323', "monospace"],
            },
            backgroundImage: {
                "concrete-pattern": "url('https://www.transparenttextures.com/patterns/concrete-wall.png')",
            },
        },
    },
    plugins: [],
};
export default config;
