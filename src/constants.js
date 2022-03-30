export const COLORS = {
  white: "hsl(0deg 0% 100%)",
  offblack: "hsl(24deg 5% 6%)",
  copy: {
    100: "hsla(210, 9%, 96%, 1)",
    200: "hsla(218, 9%, 83%, 1)",
    300: "hsla(221, 9%, 66%, 1)",
    400: "hsla(221, 10%, 50%, 1)",
    500: "hsla(222, 20%, 33%, 1)",
    600: "hsla(221, 51%, 16%, 1)",
  },
  primary: {
    100: "hsla(252, 33%, 97%, 1)",
    200: "hsla(252, 36%, 95%, 1)",
    300: "hsla(250, 36%, 84%, 1)",
    400: "hsla(250, 35%, 67%, 1)",
    500: "hsla(250, 35%, 56%, 1)",
    600: "hsla(250, 43%, 45%, 1)",
  },
  accent: {
    100: "hsla(49, 85%, 97%, 1)",
    200: "hsla(50, 85%, 95%, 1)",
    300: "hsla(50, 85%, 84%, 1)",
    400: "hsla(50, 86%, 69%, 1)",
    500: "hsla(50, 86%, 58%, 1)",
    600: "hsla(50, 93%, 48%, 1)",
  },
  error: {
    400: "hsla(0, 84%, 77%, 1)",
  },
};

export const WEIGHTS = {
  normal: 400,
  medium: 500,
  bold: 700,
};

export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
    (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};

export const FAMILIES = {
  serif:
    '"Iowan Old Style", "Apple Garamond", "Baskerville", "Times New Roman", "Droid Serif", Times, "Source Serif Pro", serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  sansSerif:
    '"-apple-system", "BlinkMacSystemFont", "avenir next", "avenir", "segoe ui", "helvetica neue", "helvetica", "Ubuntu", "roboto", "noto", arial, "sans-serif"',
};
