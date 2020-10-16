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
    extend: {
      fontFamily: {
        display: "Rajdhani,Helvetica,Arial,sans-serif",
        sans: "Roboto,Helvetica,Arial,sans-serif"
      }
    }
  },
  variants: {},
  plugins: []
};
