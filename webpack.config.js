const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  // Your webpack configuration

  entry: './script.js', // Specify the entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Specify the output directory
    filename: 'bundle.js', // Specify the output bundle filename
  },

  mode: 'production',

  module: {
    rules: [
      {
        test: require.resolve('./script.js'), // Replace './script.js' with the path to the file that exports your function
        loader: 'expose-loader',
        options: {
          exposes: {
            globalName: 'submitQuiz',
            moduleLocalName: 'submitQuiz'
          }
        },
      },
    ],
  },

  plugins: [
    new Dotenv(),
  ],
};