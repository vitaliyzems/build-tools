const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { resolve } = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "main.bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({ template: resolve(__dirname, "index.html") }),
    new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [{ test: /\.mp3$/i, use: "file-loader" }],
  },
  devServer: {
    port: 9999,
  },
};
