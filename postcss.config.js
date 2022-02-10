const cssnano = require("cssnano");
const pxtovw = require("postcss-px-to-viewport");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const IN_PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    pxtovw({
      unitToConvert: "px",
      viewportWidth: 375,
      unitPrecision: 5,
      propList: ["*"],
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: undefined,
      include: undefined,
      landscape: false,
      landscapeUnit: "vw",
      landscapeWidth: 568,
    }),
    IN_PRODUCTION &&
      cssnano({
        "cssnano-preset-advanced": {
          zindex: false,
          autoprefixer: false,
        },
      }),
  ],
};
