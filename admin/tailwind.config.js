// tailwind.config.js
module.exports = {
  purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        500: "500px",
      },
      spacing: {
        400: "400px",
        450: "450px",
        550: "550px",
        "100vh": "100vh",
        "100vw": "100vw",
        "50vh": "50vh",
        "50vw": "50vw",
        "30vw": "30vw",
        "35vw": "35vw",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
