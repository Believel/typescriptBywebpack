const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
    entry: './demo/main',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    devtool:'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './'),
        port: 3000,
        hot: true,
        inline: true,
        historyApiFallback: true

    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.NamedChunksPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}