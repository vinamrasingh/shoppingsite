var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpackOption  = {
  entry: {
    'page1': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: "[name]/build/bundle.js"
  },
  devtool: "source-map",
  
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      
      filename: './index.html'
    })
  ]
};
module.exports = webpackOption;