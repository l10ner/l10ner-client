const { resolve, join } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: resolve(__dirname, 'src'),

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080/', // без 8080 ошибка в консоли от сокетов
    'webpack/hot/only-dev-server',
    'app/index.jsx'
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  // devtool: 'inline-source-map',

  devServer: {
    hot: true,
    // port: 8080,
    contentBase: join(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?importLoader=1!postcss-loader'
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
      resolve(__dirname, 'src'),
      resolve(__dirname, 'src/app'),
    ],
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('bundle.css'),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
