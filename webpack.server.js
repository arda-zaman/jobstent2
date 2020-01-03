const path = require("path");
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => {
  const isProduction = process.env.NODE_ENV === "production" ? true : false;

  return {
    target: "node",
    mode: isProduction ? 'production' : 'development',
    entry: ["./server/server.js"],
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [
            path.resolve(__dirname, "node_modules"),
          ],
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env'],
            }
          }
        },
        {
          test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                esModule: false,
                outputPath: path.resolve(__dirname, "dist/public"),
              },
            }
          ]
        }
      ]
    },
    externals: [nodeExternals()],
    plugins: [
      // new webpack.IgnorePlugin(/\.(css|less|png|jpg|jpeg|gif|ico|svg|.scss)$/),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, "dist")]
      })
    ]
  }
};
