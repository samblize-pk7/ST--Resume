const defaultTheme = require("tailwindcss/defaultTheme");
// const tailwindMdBase = require("@geoffcodesthings/tailwind-md-base/src/index");
const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js",
      "content/**/*.md",
    ],
  },
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1440px",
    },
    fontFamily: {
      behdad: ["Behdad"],
    },

    extend: {
      colors: {
        rose: colors.rose,
      },
      backgroundOpacity: ["active"],
      spacing: {
        "90": "23rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
