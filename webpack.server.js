const path = require("path");

const SERVER_DIR = path.resolve(__dirname, "ServerApp");
const BUILD_DIR = path.resolve(__dirname, "build");

const webpackNodeExternals = require("webpack-node-externals");

const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const Dotenv = require("dotenv-webpack");

const config = {
  target: "node",
  plugins: [new Dotenv()],
  entry: SERVER_DIR + "/Server.js",
  output: {
    path: BUILD_DIR,
    filename: "serverbundle.js",
  },
  externals: [webpackNodeExternals()],
};

const x = merge(baseConfig, config);
console.log(x);
//module.exports = config;

module.exports = merge(baseConfig, config);
