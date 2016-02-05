/*eslint-env node*/
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output:{
        path: './public',
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    devServer: {
        inline: true,
        contentBase: './public'
    },
    eslint:{
        configFile: '.eslintrc'
    },
    module:{
        preLoaders: [
            {
                test: /(\.js$|\.jsx$)/,
                exclude: /(node_modules|bower_components)/,
                loader: 'eslint-loader'
            }
        ],
        loaders: [
        {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query:{
                presets: ['react', 'es2015']
            }
        }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            DEBUG: process.env.NODE_ENV !== 'production',
            PRODUCTION: process.env.NODE_ENV === 'production'
            // Make sure FIREBASE_URL, BING_KEY, MAPZEN_MATRIX_KEY are defined
            // when using webpack with the option --define "key"="value".
            // They will not be defined here.
        })
    ]
};