const { series, parallel } = require("gulp");

const {
  devSetEnv,
  devClean,
  devFonts,
  devCss,
  devHtml,
  devJs,
  devIncludeJs,
  devImg,
  devSvg,
  devServe,
  devWatcher,
} = require("./gulp/dev");

const {
  buildSetEnv,
  buildClean,
  buildFonts,
  buildCss,
  buildComponentsCss,
  buildHtml,
  buildJs,
  buildImg,
  buildServe,
  buildSvg,
  buildMinCss,
} = require("./gulp/build");

const {
  docsClean,
  docsCss,
  docsHtml,
  docsJs,
  docsIncludeJs,
  docsImg,
  docsServe,
  docsRevision,
  docsRevisionRewrite,
  docsSvg,
} = require("./gulp/docs");

const { fonts2src, fontsScss } = require("./gulp/fonts");

// Dev
exports.devClean = devClean;
exports.default = series(
  devSetEnv,
  devSvg,
  parallel(devFonts, devCss, devHtml, devJs, devIncludeJs, devImg),
  parallel(devServe, devWatcher)
);

// Build
exports.build = series(
  buildSetEnv,
  buildClean,
  buildSvg,
  parallel(buildFonts, buildCss, buildComponentsCss, buildMinCss, buildHtml, buildJs, buildImg),
  parallel(buildServe)
);

// Docs
exports.docs = series(
  docsClean,
  docsSvg,
  parallel(docsCss, docsHtml, docsJs, docsIncludeJs, docsImg),
  docsRevision,
  docsRevisionRewrite,
  parallel(docsServe)
);

// Fonts
exports.fonts = series(fonts2src, fontsScss);
exports.fonts2src = fonts2src;
exports.fontsScss = fontsScss;