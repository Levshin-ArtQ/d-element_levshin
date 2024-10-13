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
        // {
        //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
        //   type: 'asset/resource',
        //   use: {
        //     loader: "url-loader",
        //     // options: {
        //     //   name: "[name].[ext]",
        //     //   outputPath: "./assets/fonts/",
        //     // },
        //   },
        // },
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: {
            loader: "file-loader",
            // include: path.resolve(__dirname, "./src/assets/fonts"),
            options: {
              name: "[name].[ext]",
              outputPath: "/fonts/",
              esModule: false,
            },
          },
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [new CssMinimizerPlugin(), new HtmlMinimizerPlugin()],
    },
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
      // assetModuleFilename: "images/[hash][ext]",
      // assetModuleFilename: "assets/fonts/[name][ext]",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
        filename: "index.html",
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
      port: 8100,
    },
    watchOptions: {
      poll: 1000,
      ignored: "/node_modules/",
    },
  };
};
