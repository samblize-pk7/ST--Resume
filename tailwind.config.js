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
    markdownBase: {
      wrapperClass: "content",
      h2: {
        fontSize: defaultTheme.fontSize["3xl"],
        fontWeight: defaultTheme.fontWeight.bold,
        marginTop: 0,
        marginBottom: defaultTheme.spacing[2],
      },

      h3: {
        fontSize: defaultTheme.fontSize["2xl"],
        fontWeight: defaultTheme.fontWeight.bold,
        marginTop: 0,
        marginBottom: defaultTheme.spacing[2],
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1240px",
      "2xl": "1440px",
    },
    colors: {
      transparent: "transparent",
      white: " white ",
      amber: colors.amber,
      blueGray: colors.blueGray,
      gray: colors.gray,

      rose: colors.rose,
      red: colors.red,
      lightBlue: colors.lightBlue,
      blue: colors.blue,
      violet: colors.violet,
      indigo: colors.indigo,
      green: colors.green,
      lime: colors.lime,
    },
    extend: {
      backgroundOpacity: ["active"],
    },
  },
};
