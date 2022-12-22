const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { resolve } = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: resolve(__dirname, "src/index.html") }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.mp3$/i,
        loader: "file-loader",
        options: { name: "audio/[name].[ext]" },
      },
    ],
  },
  devServer: {
    port: 9999,
  },
};
