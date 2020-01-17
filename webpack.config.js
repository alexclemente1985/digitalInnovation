const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            resolve: {
              extensions: [".js", ".jsx"]
            },
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: ['style-loader','css-loader']
            }
        
        ]
      },
      plugins: [
          new HtmlWebPackPlugin({
              template: "./public/index.html",
              filename: "./index.html"
          })
      ]
   
};
