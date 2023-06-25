import { darken, lighten } from 'polished'
const colors = require('./colors.json')

const accent = 0.2
const generateColor = (color) => ({
  base: color,
  light: lighten(accent, color),
  dark: darken(accent, color),
})
const generateBackground = (color) => ({
  level0: color,
  level1: lighten(0.015, color),
  level2: lighten(0.03, color),
  level3: lighten(0.045, color),
})

export default {
  margin: 20,
  padding: 20,

  // Base box or text shadow length.
  shadowLength: 4,

  // Base animation duration in ms.
  animTime: 700,

  // The opacity to apply to elements when needed.
  alpha: 1,
  // The color variation.
  accent,

  // Every color has a `base`, `light` and `dark` variation.
  color: {
    primary: generateColor(colors.waterslide),
    secondary: generateColor(colors.jade),
    header: generateColor(colors.foamgreen),
    control: generateColor(colors.foamgreen),
    success: generateColor(colors.lime),
    alert: generateColor(colors.red),
    disabled: generateColor(colors.black),
  },

  // Every background color has level colors from 0 until 3
  // as `level0`, `level1`...
  background: {
    primary: generateBackground(colors.black),
    secondary: generateBackground(colors.acadia),
    header: generateBackground(colors.black),
    control: generateBackground(colors.black),
    success: generateBackground(colors.blackForest),
    alert: generateBackground(colors.diesel),
    disabled: generateBackground(colors.foamgreen),
  },

  typography: {
    lineHeight: 1.7,
    headerSizes: {
      h1: 30,
      h2: 26,
      h3: 23,
      h4: 20,
      h5: 18,
      h6: 18,
    },
    fontSize: 18,
    headerFontFamily: '"Space Ranger Expanded Italic", "sans-serif"',
    fontFamily: '"Orbitron", "sans-serif"',
  },

  code: {
    fontSize: 18,
    fontFamily:
      'Monaco, "Bitstream Vera Sans Mono", "Lucida Console", Terminal, monospace',
    background: colors.black,
    color: colors.butterflyBlue,
    comment: colors.blueBayoux,
    keyword: colors.wisteria,
    operator: colors.brandeisBlue,
    function: colors.mediumPurple,
    variable: colors.butterflyBlue,
    selector: colors.butterflyBlue,
    value: colors.caribbeanGreen,
  },

  // Number of columns inside a row
  columns: 12,

  // Until the number in device screen width the breakpoint is taken.
  // E.g. Until the `small` number is viewport small, from `small + 1` is medium.
  // After `large` one it is `xlarge`.
  responsive: {
    small: 600,
    medium: 768,
    large: 1200,
  },
}
