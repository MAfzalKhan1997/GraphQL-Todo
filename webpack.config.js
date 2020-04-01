const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
      // {
      //   test: /\.(woff|woff2|eot|ttf|svg)$/,
      //   loader: "file-loader?name=fonts/[name].[ext]"
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "client/index.html"
    })
  ]
};
