const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: "node",
  mode: 'development',
  entry: ["./server/server.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "src")
        ],
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
    ]
  },
  externals: [nodeExternals()],
};
