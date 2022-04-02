import { createGlobalStyle } from "styled-components";
import { COLORS, WEIGHTS, FAMILIES } from "../../constants";

const GlobalStyles = createGlobalStyle`
  /*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
*, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  ol, ul {
    list-style: none;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }

  /* DESIGN TOKENS */
  html {
    --color-white: ${COLORS.white};
    --color-offblack: ${COLORS.offblack};
    --color-copy-100: ${COLORS.copy[100]};
    --color-copy-200: ${COLORS.copy[200]};
    --color-copy-300: ${COLORS.copy[300]};
    --color-copy-400: ${COLORS.copy[400]};
    --color-copy-500: ${COLORS.copy[500]};
    --color-copy-600: ${COLORS.copy[600]};
    --color-primary-100: ${COLORS.primary[100]};
    --color-primary-200: ${COLORS.primary[200]};
    --color-primary-300: ${COLORS.primary[300]};
    --color-primary-400: ${COLORS.primary[400]};
    --color-primary-500: ${COLORS.primary[500]};
    --color-primary-600: ${COLORS.primary[600]};
    --color-accent-100: ${COLORS.accent[100]};
    --color-accent-200: ${COLORS.accent[200]};
    --color-accent-300: ${COLORS.accent[300]};
    --color-accent-400: ${COLORS.accent[400]};
    --color-accent-500: ${COLORS.accent[500]};
    --color-accent-600: ${COLORS.accent[600]};
    --color-error-400: ${COLORS.error[400]};
    --font-weight-normal: ${WEIGHTS.normal};
    --font-weight-medium: ${WEIGHTS.medium};
    --font-weight-bold: ${WEIGHTS.bold};
    --font-family-serif: ${FAMILIES.serif};
    --font-family-sans-serif: ${FAMILIES.sansSerif};
    --shadow-color: 249deg 15% 53%;
    --shadow-elevation-low:
      0.6px 0.6px 1.3px hsl(var(--shadow-color) / 0),
      2.2px 2.3px 4.8px hsl(var(--shadow-color) / 0.53);
    --shadow-elevation-medium:
      0.6px 0.6px 1.3px hsl(var(--shadow-color) / 0),
      11.2px 11.5px 24.1px hsl(var(--shadow-color) / 0.74);
    --shadow-elevation-high:
      0.6px 0.6px 1.3px hsl(var(--shadow-color) / 0),
      10.1px 18.6px 38.9px hsl(var(--shadow-color) / 0.25),
      30.8px 58.3px 122.1px hsl(var(--shadow-color) / 0.5);
    font-family: 'Plus Jakarta Text', var(--font-family-sans-serif);
    font-weight: var(--font-weight-normal);
    scrollbar-width: thin;
    scrollbar-color: var(--color-copy-300) var(--color-white);
  }

  /*
    Remove default button styles. We'll provide our own at the
    component level
  */
  button {
    display: block;
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    text-align: left;
    font: inherit;
    color: inherit;
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  h1, h2, h3, h4 {
    font-family: 'Plus Jakarta Display', var(--font-family-sans-serif);
    line-height: 1.2;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: var(--color-white);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 1000px;
    background-color: var(--color-copy-300);
    border: 2px solid var(--color-white);
  }
`;
export default GlobalStyles;
