const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                }
            ],
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
                'url-loader?limit=10000',
                {
                    loader: 'img-loader',
                    options: {
                        plugins: [require('imagemin-pngquant')({
                            floyd: 0.5,
                            speed: 2
                        })]
                    }
                }
            ]
        }]
    },
    plugins: [new HtmlWebpackPlugin({ title: "Example How Webpack did it"}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': 'process.env.NODE_ENV',
        })],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true,
        open: true
    }
}