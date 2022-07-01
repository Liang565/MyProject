// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        500: "500px",
        "80vw": "80vw",
      },
      height: {
        800: "800px",
        1000: "1000px",
      },
      spacing: {
        400: "400px",
        450: "450px",
        550: "550px",
        800: "800px",
        700: "700px",
        1000: "1000px",
        800: "800px",
        "100vh": "100vh",
        "100vw": "100vw",
        "50vh": "50vh",
        "50vw": "50vw",
        "30vw": "30vw",
        "35vw": "35vw",
        "50%": "50%",
        "80vw": "80vw",
        "90vw": "90vw",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
