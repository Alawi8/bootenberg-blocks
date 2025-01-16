const path = require("path");

module.exports = {
  entry: "./js/index.js", // Main entry point
  watch: true,
  output: {
    filename: "bundle.js", // Output file
    path: path.resolve(__dirname, "assets/js")
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply loader to .js files
        exclude: /node_modules/, // Ignore node_modules
        use: {
          loader: "babel-loader" // Use Babel loader
        }
      }
    ],
  },
  externals: {
    "@wordpress/blocks": ["wp", "blocks"],
    "@wordpress/block-editor": ["wp", "blockEditor"],
    "@wordpress/components": ["wp", "components"],
    "@wordpress/i18n": ["wp", "i18n"],
  },
  mode: "production" // Change to "production" for production builds
};
