module.exports = {
  entry: './public/src/main.js',
  output: {
    filename: 'main.js',
    path: './public/build/js/'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loaders: ["html"]
      }
    ]
  }
};