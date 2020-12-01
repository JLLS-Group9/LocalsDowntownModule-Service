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
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ]
  },
  mode: 'production'
  // }, watch: true

//'css-loader' 'style-loader'
};
