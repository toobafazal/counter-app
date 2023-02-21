const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode:'production',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'index.js',
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
      },
  };