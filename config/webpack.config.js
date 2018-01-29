const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const paths = require('./paths');

module.exports = {
    entry: paths.indexJS,
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [paths.src, paths.config],
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "flow"],
                    }
                }
            },
            {
                test: /\.css$/,
                include: paths.src,
                use: ExtractTextPlugin.extract({
                    fallback: {
                        loader: require.resolve('style-loader'),
                        options: {
                            hmr: false,
                        },
                    },
                    use: [
                        {
                            loader: require.resolve('css-loader'),
                            options: {
                                importLoaders: 1,
                                minimize: true,
                            }
                        }
                    ]
                })
            }
        ]
    },
    output: {
        path: paths.build,
        filename: "index.bundle.js"
    },
    devServer: {
        contentBase: paths.build,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "p5 Example",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            }
        }),
        new ExtractTextPlugin("index.css")
    ],
    resolve: {
        modules: ["node_modules", paths.src],
    },
};