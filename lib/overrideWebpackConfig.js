const overrideWebpackConfig = ({
  webpackConfig,
  pluginOptions
}) => {
  const {
    svgDirectory,
    svgSpriteLoaderOptions,
    svgoLoaderOptions
  } = pluginOptions

  if (svgDirectory === undefined || typeof svgDirectory !== 'string') {
    throw new Error(PATH_TO_SVG_ERROR_MSG)
  }

  const params = {
    test: SVG_REGEX,
    use: [
      {
        loader: require.resolve('svg-sprite-loader'),
        options: {
          ...svgSpriteLoaderOptions
        }
      },
      require.resolve('svg-transform-loader'),
      {
        loader: require.resolve('svgo-loader'),
        options: {
          ...svgoLoaderOptions
        }
      }
    ]
  }

  const rules = webpackConfig.module.rules[1].oneOf

  const index = rules.findIndex(rule => (
    typeof rule.test === 'object' && rule.test.toString() === SVG_REGEX.toString()
  ))

  if (index > 0) {
    rules[index].exclude = SVG_REGEX
    rules.splice(index, 0, params)
  }

  return webpackConfig
}

module.exports = overrideWebpackConfig
