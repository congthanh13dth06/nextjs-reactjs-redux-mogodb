const path = require("path");
const fs = require('fs');
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'development',
  entry: "./src/app.server.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: `server.min.js`
  },
  node: {
    __dirname: false
  },
  externals: [nodeExternals()]
};
