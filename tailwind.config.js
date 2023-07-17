/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "475px" },
    },

    colors: {
      lightBlueColor: "#00abc7",
      colorWhite: "#fff",
      colorBlack: "#000000",
      colorLightBrown: "#BFEFD7",
      colorGray: "#C2C2C2",
      colorBackGround: "#080808",
      colorGrayDark: "#464646",
    },

    extend: {},
  },
  plugins: [],
};
