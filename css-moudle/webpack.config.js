var path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      { test: /\.s?css$/, loader: 'style-loader!css-loader?modules!sass-loader' },
    ]
  }
};
