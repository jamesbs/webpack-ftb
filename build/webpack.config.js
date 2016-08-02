const webpack = require('webpack');
const paths = require('./paths');
const pathLiteral = require('./utils/path-literal');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const process = require('process');
const proj = pathLiteral(paths.project);


module.exports = {
  context: paths.project, 

  entry: proj`./src/index.ts`,

  output: {
    path: 'dist',
    filename: 'app.js',
    pathinfo: true
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|tif|ttf)$/,
        loaders: [
          {
            loader: 'url-loader',
            query: {
              name: '[path][name].[ext]',
              context: './src'
            }
          }
        ]
      },
      { 
        test: /\.css$/, 
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            query: { 
              modules: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ]
};