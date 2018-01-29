const path = require('path');

const rootDir = path.resolve(__dirname, '../');

const resolvePath = dir => path.resolve(rootDir, dir);

module.exports = {
    root: rootDir,
    src: resolvePath('src'),
    build: resolvePath('build'),
    static: resolvePath('static'),
    publicUrl: '',
    indexJS: resolvePath('src/index.js'),
    config: resolvePath('config'),
};