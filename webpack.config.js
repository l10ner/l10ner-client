const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',

    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.jsx'
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  context: resolve(__dirname, 'src'),

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: [resolve(__dirname, 'node_modules')]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoader=1!postcss-loader'
        })
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: ['url-loader']
      },
      {
        test: /\.jsx?$/,
        use: ['eslint-loader'],
        enforce: 'pre',
        exclude: [resolve(__dirname, 'node_modules')],
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      resolve(__dirname, 'src')
    ],
    extensions: ['.js', '.jsx'],
    // alias: {
    //
    // }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('bundle.css'),
  ],
};
