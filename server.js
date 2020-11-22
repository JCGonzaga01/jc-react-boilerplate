const express = require("express");
const path = require("path");

const app = express();

if (process.env.NODE_ENV !== "production") {
  const webpack = require("webpack");
  const WebpackDevMiddleware = require("webpack-dev-middleware");
  const webpackConfig = require("./webpack.config.js");
  app.use(WebpackDevMiddleware(webpack(webpackConfig)));
} else {
  // This is for test running the build folder
  // app.use(express.static("build"));
  // app.get("*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "build/index.html"));
  // });
}

app.listen(process.env.port || 8080, () => console.log("Listening"));
