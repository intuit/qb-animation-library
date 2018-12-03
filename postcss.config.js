module.exports = ctx => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  plugins: {
    cssnano: { reduceIdents: false }
  }
});
