/**
 *  @type {import('webpack').Configuration}
 */

module.exports = {
  entry: {
    'emojiCook.min': './src/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: '/node_modules'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    library: 'emojiCook',
    libraryTarget: 'umd',
  },
  mode: 'production'
}