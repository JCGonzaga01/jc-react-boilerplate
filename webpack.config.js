var webpack = require("webpack");
var path = require("path");
var TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

var BUILD_DIR = path.join(__dirname, "build");
var APP_DIR = path.join(__dirname, "src");

var config = {
  entry: APP_DIR + "/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[hash].min.js",
    publicPath: "/",
    // To handle map files from rxjs
    sourceMapFilename: "[name].js.map",
  },
  // To remove warnings from map files
  devtool: "eval-cheap-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "./tsconfig.json"),
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
        logLevel: "INFO",
        baseUrl: APP_DIR,
      }),
    ],
  },
  devServer: {
    contentBase: BUILD_DIR,
    compress: true,
    port: 3000,
    disableHostCheck: false,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: true,
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/assets/favicon.ico",
      template: APP_DIR + "/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: true } },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "assets",
              publicPath: "assets",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
};

module.exports = config;
