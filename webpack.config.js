const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');
const path = require('path');


module.exports = {
   entry: './index.js',
   target: 'node',
   externals: [nodeExternals()],
   mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
   output: {
      libraryTarget: 'commonjs',
      path: path.resolve(__dirname, '.webpack'),
      filename: 'index.js',
   },
   module: {
      rules: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"]
         },
        {
          test: /.json$/,
          loaders: ['json']
        }
      ]
   }
};
