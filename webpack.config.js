const path = require('path');
const webpack = require('webpack');

const resolve = path.resolve,
    join = path.join;

const rootDir = resolve(__dirname);
const srcDir = join(rootDir, 'src');
const libDir = join(rootDir, 'lib');
const buildDir = join(rootDir, 'build');

module.exports = {
    entry: join(libDir, 'index.js'),
    module: {
        rules: [
            {
                test: /\.js$/,
                include: libDir,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    output: {
        path: buildDir,
        filename: 'index.bundle.js'
    }
};