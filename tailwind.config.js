/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent"
      },
      fontFamily: {
        "baloo-bhai": ['"Baloo Bhai 2"', "sans-serif"],
        "baloo-bhaijaan": ['"Baloo Bhaijaan 2"', "sans-serif"],
        "readex-pro": ['"Readex Pro"', "sans-serif"]
      },
      transitionProperty: {
        all: "all"
      }
    }
  }
};
