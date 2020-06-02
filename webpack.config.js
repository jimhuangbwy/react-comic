const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'comic-app': './src/comic-app.js',
  },
  output: {
    path: path.resolve(__dirname, 'assets', 'js'),
    filename: "[name].bundle.js"
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
