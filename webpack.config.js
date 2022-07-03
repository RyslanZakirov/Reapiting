const TerserWebpackPlugin = require("terser-webpack-plugin")
const HTMLWebpackPlugin = require("html-webpack-plugin")

const path = require("path")

module.exports = {

    mode: "development",
    entry: path.join(__dirname, "src", "index.jsx"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "res")
    },
    devtool: "source-map",
    devServer: {
        port: 8080,
        hot: true,
        compress: true,
        // static: {
        //     directory: path.join(),
        // }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            },
            {
                test: /\.(css|sass|scss)$/,
                use: ["style-laoder", "css-loader", "sass-loder"]
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: "file-reader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "images"
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [
            ".jsx", ".js", ".css", ".scss"
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "src/index.html",
            filename: "result.html"
        })
    ],
    optimization: {
        minimizer: [
            new TerserWebpackPlugin()
        ],
        minimize: true
    }

}