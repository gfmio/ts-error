const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const { CheckerPlugin } = require("awesome-typescript-loader");

const target = process.env.TARGET;
const cjs = target === "es3" || target === "es5";

module.exports = {
  mode: "development",
  entry: cjs ? "./cjs.ts" : "./es.ts",
  context: path.join(__dirname, "..", "..", "browser", "src"),
  output: {
    path: path.join(__dirname, "..", "..", "browser", "dist"),
    filename: path.join(".", "js", `app-${target.toLowerCase()}.js`),
    publicPath: path.join("."),
  },

  devtool: "source-map",

  resolve: {
    extensions: [".html", ".ts", ".tsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: `awesome-typescript-loader`,
        options: {
          configFileName: path.join(
            __dirname,
            "..",
            "ts",
            `tsconfig.browser.${target}.json`,
          ),
        },
      },
      {
        enforce: "pre",
        test: /.js$/,
        loader: "source-map-loader",
      },
    ],
  },

  plugins: [
    new HardSourceWebpackPlugin({
      cacheDirectory: path.join(
        __dirname,
        "..",
        "..",
        "..",
        "node_modules",
        ".cache",
        "[confighash]",
      ),
    }),
    new CheckerPlugin({
      configFileName: path.join(
        __dirname,
        "..",
        "ts",
        `tsconfig.browser.${target}.json`,
      ),
    }),
    new CopyWebpackPlugin([
      {
        from: "./html/*.html",
        to: "./[name].html",
      },
    ]),
  ],
};
