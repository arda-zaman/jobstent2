const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./server/index.html",
  filename: "./index.html",
  publicPath: "/"
});

module.exports = () => {
  const isProduction = process.env.NODE_ENV === "production" ? true : false;
  console.log("ISPRODUCTION::", isProduction);
  return {
    target: 'web',
    entry: ["@babel/polyfill", "./src/index.js"],
    mode: isProduction ? 'production' : 'development',
    output: {
      path: path.resolve('dist/public'),
      filename: 'client_bundle.js',
      publicPath: '/'
    },
    devtool: isProduction ? "" : "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
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
                outputPath: "/assets",
                publicPath: '/assets',
                name(file) {
                  return '[name]_[hash].[ext]'
                },
              },
            }
          ]
        }
      ]
    },
    plugins: [htmlPlugin]
  }
};