const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = (env) => {
  return {
    mode: env.mode ?? "production",
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
            filename: "images/[hash][ext]",
          },
          // use: {
          //   loader: "image-webpack-loader",
          // },
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
        new HtmlMinimizerPlugin(),
      ],
    },
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
      assetModuleFilename: "images/[hash][ext]",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
        filename: 'index.html',
        // inject: true,
      }),
    
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
    ],
    devServer: {
      watchFiles: ["public/index.html"],
      static: path.resolve(__dirname, "./dist"),
      hot: true,
      open: true,
    },
    watchOptions: {
      poll: 1000,
      ignored: "/node_modules/",
    },
  };
};
