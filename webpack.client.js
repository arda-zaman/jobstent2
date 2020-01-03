const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./server/index.html",
  filename: "./index.html",
  publicPath: "/"
});

const clean = new CleanWebpackPlugin({
  cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, "dist")]
});

module.exports = {
  target: 'web',
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve('dist/public'),
    filename: 'client_bundle.js',
    publicPath: '/'
  },
  devtool: "source-map",
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|functions/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
            },
          }
        ]
      }
    ]
  },
  plugins: [htmlPlugin, clean]
};