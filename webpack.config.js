const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`),
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    compress: false,
    open: false,
    // host: '192.168.0.162',
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
    ],
  },
  resolve: {
    alias: {
      utils: path.resolve(__dirname, `src/utils/`),
      mocks: path.resolve(__dirname, `src/mocks/`),
    },
    extensions: [`.js`, `.jsx`],
  },
  devtool: `source-map`,
};
