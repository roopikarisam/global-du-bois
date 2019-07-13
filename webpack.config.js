const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    about: './src/about.js',
    citations: './src/citations.js',
    credits: './src/credits.js',
    letters: './src/letters.js',
    networks: './src/networks.js',
    travels: './src/travels.js'
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'cheap-eval-source-map', //don't use in production just dev
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]

};
