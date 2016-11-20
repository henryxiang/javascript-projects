var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var path = require('path');

module.exports = {
  entry: {
    bundle: './src/main.jsx',
    vendors: ['react', 'react-dom', 'mobx', 'mobx-react']
  },
  output: {
    path: './dist',
    filename: "[name].js"
  },
  devServer: {
    inline: true,
    port: 8000,
    contentBase: './dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // {
      //   test: /\.css$/,
      //   // loader: "style-loader!css-loader"
      //   loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      //   // loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader")
      // },
      {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
      // {
      //   test: /\.scss$/,
      //   //loader: "style-loader!css-loader!sass-loader"
      //   loaders: ["style", "css", "sass"]
      // },
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
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new ExtractTextPlugin("css/styles.css", {allChunks: true})
  ],
  postcss: [autoprefixer],
  // sassLoader: {
  //   data: '@import "theme/_config.scss";',
  //   includePaths: [path.resolve(__dirname, './src/app')]
  // },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.scss'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  }
}
