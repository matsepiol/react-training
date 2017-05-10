var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: {
    app: SRC_DIR + '/app/index.js',
    vendor: ['bootstrap']
  },
  output: {
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "vendor.bundle.js"})
  ],
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
            presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
      	test: /\.scss?/,
      	include: SRC_DIR,
      	loader: 'style-loader!css-loader!sass-loader',

      },
      {
        test: /\.json?/,
        include: SRC_DIR,
        loader: 'json-loader'
      }
    ]
  }
};

module.exports = config;