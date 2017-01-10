/**
 * Created by v.litvak on 10.01.2017.
 */
let webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './ui/index.jsx'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/client',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './client',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};