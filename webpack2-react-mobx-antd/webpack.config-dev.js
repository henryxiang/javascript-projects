const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry: {
    app: './src/app',
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
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
          publicPath: '/build'
        })
      },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
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

// const doConfig = (env) => {
//   if (!env.prod) {
//     config.devtool = '';
//   }
//   return config;
// };

// module.exports = doConfig;
module.exports = config;