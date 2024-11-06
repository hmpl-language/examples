const path = require("path");

module.exports = {
  mode: "development",
  entry: "./main.js",
  output: {
    filename: "./[name].js",
    path: path.join(__dirname, "dist"),
    assetModuleFilename: "[path][name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.hmpl$/i,
        use: {
          loader: "hmpl-loader",
          options: {
            memo: true,
            autoBody: {
              formData: true,
            },
          },
        },
      },
    ],
  },
};
