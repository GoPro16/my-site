var ComponentDirectoryPlugin = require("component-directory-webpack-plugin");
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [new ComponentDirectoryPlugin(true)],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'babel-loader'
      },{
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      },{
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },
  performance: { hints: false },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};