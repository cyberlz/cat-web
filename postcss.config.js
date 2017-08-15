module.exports = {
  plugins: () => [
      require('postcss-import')(),
      require("autoprefixer")({
        browsers: ['last 10 Chrome versions','last 5 Firefox versions','Safari >= 6','ie > 8']
      }),
      require('cssnano')()
  ]
};
