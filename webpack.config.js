/** @type {import('webpack').Configuration} */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      { test: /\.(js|ts)x?$/, exclude: /node_modules/, use: 'babel-loader' },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.txt$/,
        type: 'asset/source',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.tsx', '.ts'],

    plugins: [new TsconfigPathsPlugin()],
  },
  devServer: {
    static: {
      directory: './dist',
    },
    port: 4000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      showErrors: true,
      hash: true,
      title: 'Index HTML File Loader',
      filename: 'index.html',
      template: 'dist/index.html',
    }),
    new DotenvWebpackPlugin({
      path: './.env',
      safe: true,
    }),
  ],
};

module.exports = config;
