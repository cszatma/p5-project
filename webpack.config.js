const path = require('path');
const webpack = require('webpack');

const resolve = path.resolve,
    join = path.join;

const rootDir = resolve(__dirname);
const srcDir = join(rootDir, 'src');
const buildDir = join(rootDir, 'build');

module.exports = {
    entry: join(srcDir, 'index.js'),
    module: {
        rules: [
            {
                test: /\.js$/,
                include: srcDir,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['flow']
                    }
                }
            }
        ]
    },
    output: {
        path: buildDir,
        filename: 'index.bundle.js'
    },
    devServer: {
        contentBase: buildDir
    }
};