// import pxToRem from '@/utils/pxToRem';
/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
// const { fontFamily } = require("tailwindcss/defaultTheme");
// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
import * as colors from "tailwindcss/colors";
const PRIMARY = {
  primary: "#2712cb",
  secondary: "#d6eb14",
  tertiary: "#4F3954",
};

const NEUTRAL = {
  black: "#1d1d1d",
  white: "#FFFFFF",
  border: "#C9CFD9",
  bg: "#FAFAFA",
  commonBg: "F9FAFB",
  bodyText: "#64728C",
  sideBar: "#0F2657",
  greyBg: "#F9FAFB",
};

const ERROR = {
  150: "#910D2C",
  critical: "#DA1414",
  100: "#EF476F",
  50: "#FBD0DA",
};

const WARNING = {
  150: "#996B00",
  100: "#FFD166",
  50: "#FFF0CC",
};

const TINT = {
  250: "#82CAF2",
  200: "#B1DEF7",
  150: "#DFF1FC",
  100: "#E8F5FD",
  50: "#F1F9FE",
};

const SUCCESS = {
  500: "#039855",
  150: "#065031",
  100: "#0EAD69",
  50: "#D5FCEB",
};
const SHADE = {
  250: "#06293C",
  200: "#0B486A",
  150: "#106898",
  100: "#1587C6",
  50: "#26A3E8",
};

const GREY = {
  100: "#8A8A8A",
};

const BORDER = {
  primary: "#CDCED9",
  secondary: "#CDCED9",
};
const TEXT = {
  main: "#2E2C34",
  sub: "#5D5969",
  blue: "#19184E",
  offWhite: "#EBE7EF",
};

const palette = {
  brand: {
    ...PRIMARY,
  },
  success: {
    ...SUCCESS,
  },
  text: {
    ...TEXT,
  },
  shade: {
    ...SHADE,
  },
  tint: {
    ...TINT,
  },
  warning: {
    ...WARNING,
  },
  grey: {
    ...GREY,
  },
  error: {
    ...ERROR,
  },
  neutral: {
    ...NEUTRAL,
  },
  border: {
    ...BORDER,
  },
};
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},

    colors: {
      ...colors,
      ...palette,
    },
    fontFamily: {
      sans: ["Kumbh Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
      poppins: ["Poppins", "helvetica", "arial", "sans serif"],
    },
  },
  plugins: [],
};
