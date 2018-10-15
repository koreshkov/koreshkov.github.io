const webpack       = require('webpack');
const path          = require('path');

const env = process.env.NODE_ENV;

module.exports = {
    mode: env || 'development',
    entry: {
        'app': './js/app.js',
        'vendor': ['vue']
    },
    output: {
        'path': path.resolve('./content/js/'),
        'filename': '[name].bundle.js'
    },
    devtool: 'source-maps',
    resolve: {
        modules: ['node_modules'],
        descriptionFiles: ['package.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: 'babel-loader'
        }]
    }
};