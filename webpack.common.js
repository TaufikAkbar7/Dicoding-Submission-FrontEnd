const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/detailAgent.html',
      filename: 'detailAgent.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/detailWeapon.html',
      filename: 'detailWeapon.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/detailPlayer.html',
      filename: 'detailPlayer.html',
    }),
  ],
};
