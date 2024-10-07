const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.svg/,
        type: "asset/resource",
        generator: {
          filename: 'images/[hash][ext]'
        }
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: 'images/[hash][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./src/index.html`,
      filename: `index.html`,
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    watchFiles: ["src/*.html"],
    static: path.resolve(__dirname, "./dist"),
    hot: true,
    open: true,
  },
  watchOptions: {
    poll: 1000,
    ignored: "/node_modules/",
  },
};

