const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
        extensions: ['*', '.js', '.vue', '.json'],
        descriptionFiles: ['package.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            exclude: /(node_modules)/,
            loader: 'vue-loader'
          }, {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: 'babel-loader'
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};