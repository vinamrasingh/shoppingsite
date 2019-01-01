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
    'page1': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: "[name]/build/bundle.js"
  },

  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      
      filename: './index.html'
    })
  ]
};
