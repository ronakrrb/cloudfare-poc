const path =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// This is main configuration object that tells Webpackw what to do. 
module.exports = {
    //path to entry paint
    entry: '/src/index.jsx',
    //path and filename of the final output
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.min.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: require.resolve("babel-loader"),
                    options: {
                        presets: [
                            [require.resolve("@babel/preset-env"), { modules: false }],
                            require.resolve("@babel/preset-react"),
                        ],
                        plugins: [[require.resolve("@babel/plugin-transform-react-jsx")]],
                    },
                },
            },            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "/live.html",
            filename: "./index.html"
         })
    ],    
    //default mode is production
    mode: 'development'
}