const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    context: resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './index.jsx'
    ],
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            },
            // Loaders for other file types can go here
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
    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'src'),
        publicPath:'/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin() // читабельные модули в консоли
    ]
};
