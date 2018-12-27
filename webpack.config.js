var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/* module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}; */
module.exports = {
  entry: {
    'page1': './src/index.js'/* ,
    'page2': './src/home.js',
    'page3': './src/products.js' */
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: "[name]/build/bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      
      filename: './index.html'
    })/* ,
    new HtmlWebpackPlugin({
      inject: true,
    
      filename: './home.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
    
      filename: './products.html'
    }) */
  ]
};
