const path = require("path");
const Dotenv = require("dotenv-webpack");

const APP_DIR = path.resolve(__dirname, "ClientApp");
const PUBLIC_DIR = path.resolve(__dirname, "public");

const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const config = {
  entry: APP_DIR + "/Index.tsx",
  plugins: [new Dotenv()],
  devServer: {
    static: PUBLIC_DIR,
    port: 9000,
    open: true,
    historyApiFallback: true,
  },
  output: {
    path: PUBLIC_DIR,
    filename: "clientbundle.js",
  },
};

const x = merge(baseConfig, config);
console.log(x);
//module.exports = config;

module.exports = x;
