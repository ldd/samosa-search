module.exports = {
    entry: "./app/App.js",
    output:{
        path: "./public",
        filename: "bundle.js",
        publicPath: "/"
    },
    devtool: "source-map",
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
                loader: "eslint-loader"
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
    }
};