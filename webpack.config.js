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
            filename: "images/[name][ext]",
          },
          // use: {
          //   loader: "image-webpack-loader",
          // },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
          generator: {
            filename: "fonts/[name][ext]",
          },
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
        template: path.resolve(__dirname, 'src', 'index.html'),
        filename: 'index.html',
        inject: true,
      }),
    
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
    ],
    devServer: {
      watchFiles: ["src/index.html"],
      static: path.resolve(__dirname, "./dist"),
      hot: true,
      open: true,
      port: 8101,
    },
    watchOptions: {
      poll: 1000,
      ignored: "/node_modules/",
    },
  };
};
