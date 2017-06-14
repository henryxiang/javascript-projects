const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry: {
    app: './src/index',
    vendors: ['jquery', 'lodash']
  },
  output: {
    path: __dirname + '/build',
    filename: '[name]-[chunkhash].js'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: __dirname + '/build',
    port: 8000,
    open: true,
    compress: true,
    stats: 'errors-only'
  },
  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader'
      },
      {
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
          publicPath: '/build'
        })
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
      {
        test: /\.scss$/,
        loaders:"style-loader!css-loader!sass-loader"
      },
      {
        test: /\.gif$/,
        loader: "url-loader?mimetype=image/gif"
      },
      {
        test: /\.png$/,
        loader: "url-loader?mimetype=image/png"
      },
      {
        test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
        loader: "url-loader?mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
        loader: "url-loader?mimetype=application/font-[ext]"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      template: __dirname + '/src/index.ejs',
      filename: __dirname + '/build/index.html'
    }),
    new ExtractTextPlugin({
      filename: 'styles-[chunkhash].css',
      allChunks: true  
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['common', 'vendors'],
      filename: '[name]-[chunkhash].js'
    })
  ]
};

const doConfig = (env) => {
  if (!env.prod) {
    config.devtool = '';
  }
  return config;
};

module.exports = doConfig;