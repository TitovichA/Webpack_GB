const { resolve } = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    }
};

const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, "dist"),
        filename: 'main.bundle.js'
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        // new MiniCssExtractPlugin ({
        //     filename: '[name].[contenthash].css'
        // }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),

    ],
    module: {
        rules: [

            //     { test: /\\.css$/,
            //         use: [MiniCssExtractPlugin.loader, "css-loader"]
            //     },
            //     { test: /\\.s[ac]ss$/i,
            //         use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            //     },
            // 
        ],

    },
    devServer: {
        port: 4200
    }
}