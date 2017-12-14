const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const resolve = path.resolve, join = path.join;

const rootDir = resolve(__dirname);
const srcDir = join(rootDir, "src");
const buildDir = join(rootDir, "build");

module.exports = {
    entry: join(srcDir, "index.js"),
    module: {
        rules: [
            {
                test: /\.js$/,
                include: srcDir,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["flow"]
                    }
                }
            },
            {
                test: /\.css$/,
                include: srcDir,
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
        path: buildDir,
        filename: "index.bundle.js"
    },
    devServer: {
        contentBase: buildDir
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
    ]
};