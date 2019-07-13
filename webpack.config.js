const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
    filename: '[name].bundle.js',
    path: path.resolve('dist'),
    publicPath: '/'
  },
  devtool: 'cheap-eval-source-map', //don't use in production just dev
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index']
      }),
      new HtmlWebpackPlugin({
        filename: 'about.html',
       chunks: ['about']
      }),
      new HtmlWebpackPlugin({
        filename: 'citations.html',
       chunks: ['citations']
      }),
      new HtmlWebpackPlugin({
        filename: 'credits.html',
        chunks: ['credits']
      }),
      new HtmlWebpackPlugin({
        filename: 'letters.html',
       chunks: ['letters']
      }),
      new HtmlWebpackPlugin({
        filename: 'networks.html',
       chunks: ['networks']
      }),
      new HtmlWebpackPlugin({
        filename: 'travels.html',
       chunks: ['travels']
      }),
  ]
};
