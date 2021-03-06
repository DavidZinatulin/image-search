const webpack = require('webpack');
const path = require('path');

const isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';
const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './build');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
    context: sourcePath,
    entry: {
        app: './main.jsx'
    },
    output: {
        path: outPath,
        filename: 'bundle.js',
        chunkFilename: '[chunkhash].js'
    },
    target: 'web',
    resolve: {
        extensions: ['.js', '.jsx'],
        mainFields: ['module', 'browser', 'main'],
        alias: {
            app: path.resolve(__dirname, 'src/app/'),
            assets: path.resolve(__dirname, 'src/assets/')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [{
                    loader: 'babel-loader',
                    options: {presets: ["@babel/preset-env", "@babel/preset-react"]}
                }].filter(Boolean)
            },
            {
                test: /\.scss$/,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('postcss-import')({addDependencyTo: webpack}),
                                require('postcss-url')(),
                                require('postcss-preset-env')({
                                    /* use stage 2 features (defaults) */
                                    stage: 2,
                                }),
                                require('postcss-reporter')(),
                                require('postcss-browser-reporter')({
                                    disabled: isProduction
                                }),
                                require('autoprefixer')()
                            ]
                        }
                    },
                    {loader: 'sass-loader'},
                    {loader: 'import-glob-loader'}
                ]
            },
            {test: /\.html$/, use: 'html-loader'},
            {test: /\.(a?png|svg)$/, use: 'url-loader?limit=10000'},
            {test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/, use: 'file-loader'}
        ]
    },
    optimization: {
        splitChunks: {
            name: true,
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    priority: -10
                }
            }
        },
        runtimeChunk: true
    },
    performance: {
        hints: false
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
            DEBUG: false
        }),
        new webpack.DefinePlugin({
            'UNSPLASH_DOMAIN': JSON.stringify('https://unsplash.com'),
            'APP_NAME': JSON.stringify('image-search'),
            'APP_ACCESS': JSON.stringify('85a50f15e68b34857485776e608edfe5c46c5369709f02fcfb3174d326299399'),
            'APP_SECRET': JSON.stringify('b9486f308cbac374f031ead01e993df5854b96de1374f74fd60e19ad82b8c599')
        }),
        new WebpackCleanupPlugin(),
        new MiniCssExtractPlugin({
            filename: '[contenthash].css',
            disable: !isProduction
        }),
        new HtmlWebpackPlugin({
            template: 'assets/index.html'
        }),
    ],
    devServer: {
        contentBase: sourcePath,
        hot: true,
        inline: true,
        historyApiFallback: true,
        stats: 'minimal',
        clientLogLevel: 'warning'
    },
    node: {
        // workaround for webpack-dev-server issue
        // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
        fs: 'empty',
        net: 'empty'
    }
};
