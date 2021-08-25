const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('production'),
    }),
    new BundleAnalyzerPlugin(),
  ],
};

// module.exports = {
//   mode: 'production',
//   devtool: 'source-map',
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env.name': JSON.stringify('production'),
//     }),
//   ],
// };
