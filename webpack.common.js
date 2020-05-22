const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js',
    vendor: './src/vendor.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          'html-loader', //require assets linked in html
        ],
      },
      {
        test: /\.(svg|png|jpg|jpe)$/,
        use: {
          loader: 'file-loader', //require assets linked in html
          options: {
            name: '[name]-[hash].[ext]',
            outputPath: 'assets/images',
          },
        },
      },
    ],
  },
};
