/**
 * Created By Nguyen Cong Thanh on 24/09/2019 11:28.
 *
 * Copyright Intelin 2019.
 */

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
