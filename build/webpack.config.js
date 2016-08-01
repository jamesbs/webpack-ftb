const webpack = require('webpack');
const paths = require('./paths');
const pathLiteral = require('./utils/path-literal');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const proj = pathLiteral(paths.project);

module.exports = {
  entry: proj`./src/index.js`,

  output: {
    path: 'dist',
    filename: 'app.js',
    pathinfo: true
  },

  devtool: 'source-map',

  module: {
    loaders: [
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