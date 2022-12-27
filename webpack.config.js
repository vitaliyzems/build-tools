const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "src", "index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|gif)$/i,
        use: [
          {
            loader: "img-optimize-loader",
            options: {
              compress: {
                mode: "high",
                webp: true,
                gifsicle: true,
                disableOnDevelopment: false,
              },
            },
          },
        ],
      },
      {
        test: /\.mp3$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "audio/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.mp4$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "video/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 9999,
  },
};
