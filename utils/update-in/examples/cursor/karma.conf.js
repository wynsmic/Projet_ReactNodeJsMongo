var path = require('path');

module.exports = function (config) {
  var configuration = {
    browsers: [ 'Chrome' ],
    frameworks: [ 'mocha', 'sinon-chai' ],
    reporters: [ 'mocha' ],

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    files: [
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
          { test: /node_modules\/update-in/, loader: 'babel' }
        ]
      },
      resolve: {
        alias: {
          'update-in': path.join(__dirname, '../../src/update-in')
        }
      }
    },

    webpackServer: {
      noInfo: true
    }
  };

  if(process.env.TRAVIS) {
    configuration.browsers = [ 'Chrome_travis_ci' ];
  }

  config.set(configuration);
};
