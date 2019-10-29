const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')

module.exports = withPlugins([
  [withSass, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]__IFDS_TELLER__[hash:base64:5]",
    }
  }]
])
