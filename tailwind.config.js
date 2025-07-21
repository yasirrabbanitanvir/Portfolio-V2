/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0CC0DF",
          secondary: "#facc15",
          accent: "#0097B2",
          neutral: "#44403c",
          "base-100": "#ffffff",
          info: "#fda4af",
          success: "#18b47b",
          warning: "#f0d447",
          error: "#f41042",
        },
      },
    ],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animationDuration: {
        "1s": "1s",
      },
    },
  },
  plugins: [require("daisyui")],
};
