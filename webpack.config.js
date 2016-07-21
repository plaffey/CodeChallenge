var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: [
    "./src/index.js"
  ],
  externals: {
    jquery: "jQuery"
  },
  plugins: [
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery"
    })
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: "bundle.js"
  },
  resolve: {
    root: __dirname,
    alias: {
      applicationStyles: "app/styles/style.css"
    },
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-1"]
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, "./node_modules/foundation-sites/scss")
    ]
  },
  devtool: "cheap-module-eval-source-map"
};
