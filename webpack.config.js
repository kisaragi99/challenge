const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
        open: true,
        port: 9000,
        contentBase: path.join(__dirname, 'public'),
    },
};
const esLintPlugin = (isDev) => isDev ? [] : [new ESLintPlugin({ extensions: ['js', 'jsx'] })];

module.exports = ({ development }) => ({
    mode: development ? 'development' : 'production',
    devtool: development ? 'inline-source-map' : 'source-map',
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/[hash][ext]'
    },
    module: {
        rules: [
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[name]__[local]--[hash:base64:5]",
                            }
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        ...esLintPlugin(development),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new CopyPlugin({
            patterns: [{
                from: './public',
                noErrorOnMissing: true,
            }],
        }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    ...devServer(development),
});
