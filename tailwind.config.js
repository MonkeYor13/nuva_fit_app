/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        modoLight: "#FFFFFF",
        modoDark: "#262626",
        unActive: "#9C9C9C",
      },
      fontFamily: {
        fuenteRegular: ["Inter_18pt-Regular", "sans-serif"],
        fuenteBold: ["Inter_18pt-Bold", "sans-serif"],
      },

    },
  },
  plugins: [],
};
