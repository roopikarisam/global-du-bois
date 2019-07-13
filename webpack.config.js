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
        template: 'src/index.html',
        inject: 'body',
        chunks: ['index']
      }),
      new HtmlWebpackPlugin({
        filename: 'about.html',
        template: 'src/about.html',
        inject: 'body',
        chunks: ['about']
      }),
      new HtmlWebpackPlugin({
        filename: 'citations.html',
        template: 'src/citations.html',
        inject: 'body',
        chunks: ['citations']
      }),
      new HtmlWebpackPlugin({
        filename: 'credits.html',
        template: 'src/credits.html',
        inject: 'body',
        chunks: ['credits']
      }),
      new HtmlWebpackPlugin({
        filename: 'letters.html',
        template: 'src/letters.html',
        inject: 'body',
        chunks: ['letters']
      }),
      new HtmlWebpackPlugin({
        filename: 'networks.html',
        template: 'src/networks.html',
        inject: 'body',
        chunks: ['networks']
      }),
      new HtmlWebpackPlugin({
        filename: 'travels.html',
        template: 'src/travels.html',
        inject: 'body',
        chunks: ['travels']
      }),
  ]
};
