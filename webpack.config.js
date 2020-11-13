const path = require('path'); //importing module path from node


module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.m?js|jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  mode: 'development'
  // }, watch: true


};
