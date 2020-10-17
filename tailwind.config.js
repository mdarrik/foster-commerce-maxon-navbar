module.exports = {
  /**Turns on future utils to make migration easier */
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: [],
  theme: {
    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      xxl: "1680px",
      "sm-max": { max: "539px" },
      "md-max": { max: "719px" },
      "lg-max": { max: "959px" }
    },

    fontFamily: {
      display: ["Rajdhani", "Helvetica", "Arial", "sans-serif"],
      body: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      robocon: ["Roboto Condensed", "Helvetica", "Arial", "sans-serif"],
      notokr: ["Noto Sans KR", "Helvetica", "Arial", "sans-serif"],
      notojp: ["Noto Sans JP", "Helvetica", "Arial", "sans-serif"],
      nototc: ["Noto Sans TC", "Helvetica", "Arial", "sans-serif"],
      notopa: ["Noto Sans PA", "Helvetica", "Arial", "sans-serif"]
    },

    fontSize: {
      xxs: "0.625rem", // 10px
      xs: "0.75rem", // 12px
      "2sm": "0.8125rem", // 13px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.375rem", // 22px
      "3xl": "1.5rem", // 24px
      "4xl": "1.563rem", // 25px
      "5xl": "1.625rem", // 26px
      "5.5xl": "1.75rem", // 28px
      "6xl": "1.875rem", // 30px
      "6.2xl": "2rem", // 32px
      "6.5xl": "2.188rem", // 35px
      "7xl": "2.5rem", // 40px
      "7.2xl": "2.75rem", // 44px
      "8xl": "3.125rem", // 50px
      "9xl": "5rem" // 80px
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      charcoal: "#1C232B",
      "black-50": "rgba(0, 0, 0, .5)",
      white: "#fff",
      "brand-primary": "#BF0606",
      "brand-secondary": "#40474D",
      primary: {
        "500": "#BF0606",
        "600": "#AA0404",
        "700": "#930606",
        "800": "#7E0404",
        "900": "#640303"
      },
      secondary: {
        "50": "#B6BDC3",
        "100": "#AAB0B5",
        "200": "#92989D",
        "300": "#586067",
        "400": "#4B5258",
        "500": "#40474D",
        "600": "#33393E",
        "700": "#282D31",
        "800": "#1A1E21",
        "900": "#141519"
      },
      gray: {
        "200": "hsla(216, 18%, 97%, 1)",
        "300": "hsla(210, 16%, 93%, 1)",
        "400": "hsla(213, 22%, 84%, 1)",
        "500": "hsla(213, 4%, 57%, 1)",
        "600": "hsla(204, 5%, 42%, 1)",
        "700": "hsla(208, 9%, 28%, 1)",
        "800": "hsla(210, 9%, 20%, 1)",
        "900": "hsla(210, 9%, 18%, 1)"
      },
      orange: {
        "900": "hsla(28, 100%, 36%, 1)",
        "800": "hsla(30, 100%, 39%, 1)",
        "700": "hsla(33, 100%, 41%, 1)",
        "600": "hsla(35, 100%, 43%, 1)",
        "500": "hsla(37, 100%, 45%, 1)",
        "400": "hsla(37, 100%, 50%, 1)",
        "300": "hsla(37, 100%, 55%, 1)",
        "200": "hsla(37, 100%, 60%, 1)",
        "100": "hsla(37, 100%, 65%, 1)",
        "50": "hsla(37, 100%, 75%, 1)"
      },
      red: {
        light: "hsla(2, 64%, 58%, 1)",
        dark: "hsla(2, 47%, 48%, 1)"
      },
      green: {
        light: "hsla(120, 25%, 55%, 1)",
        dark: "hsla(120, 21%, 42%, 1)"
      },
      teal: {
        light: "hsla(194, 66%, 61%, 1)",
        dark: "hsla(194, 45%, 50%, 1)"
      },
      blue: {
        "900": "hsla(208, 62%, 23%, 1)",
        "800": "hsla(208, 69%, 26%, 1)",
        "700": "hsla(208, 73%, 30%, 1)",
        "600": "hsla(208, 80%, 37%, 1)",
        "500": "hsla(208, 55%, 47%, 1)",
        "400": "hsla(208, 55%, 47%, 1)",
        "300": "hsla(208, 51%, 57%, 1)",
        "200": "hsla(208, 55%, 67%, 1)",
        "100": "hsla(207, 83%, 84%, 1)",
        "50": "hsla(208, 79%, 87%, 1)"
      },
      purple: {
        "400": "hsla(240, 19%, 60%, 1)"
      }
    },

    extend: {
      spacing: {
        "2px": "0.125rem",
        "7": "1.75rem",
        "14": "3.5rem",
        "17": "4.25rem",
        "26": "6.5rem",
        "28": "7rem",
        "30": "7.5rem"
      },

      maxWidth: {
        "4/5": "80%"
      }
    },

    borderRadius: {
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.8rem",
      full: "9999px"
    },

    boxShadow: {
      default: "0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)",
      md: "0 1px 8px -1px rgba(0, 0, 0, .1), 0 1px 6px -1px rgba(0, 0, 0, .1)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, .25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none"
    }
  },
  variants: {
    borderColor: ["responsive", "hover", "focus", "group-hover"]
  },
  plugins: []
};
