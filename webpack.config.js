/**
 * Webpack config
 *
 * @author CodeX Team (team@ifmo.su)
 * @copyright CodeX 2017
 */

const webpack = require('webpack');

/**
 * Get package params
 */
const pkg = require('./package');

/**
 * Define entry point
 */
const entry = './src/moduleDispatcher.js';

/**
 * @return {String} Bundle header with Module description
 */
const bundleComment = require('./bundleComment.js');

/**
 * Set bundle params
 *
 * filename       - main bundle file from package.json
 * library        - module name from package.json
 * libraryTarget  - "umd" is a way for your library to work with all the module
 *                  definitions (and where aren't modules at all).
 *                  It will work with CommonJS, AMD and as global variable.
 */
const output = {
  filename: pkg.main,
  library: pkg.exportModuleName,
  libraryTarget: 'umd',
  libraryExport: 'default'
};


const useModule = {
  rules: [
    /**
     * Process JS files
     */
    {
      test : /\.js$/,
      use : [
           /** Babel loader */
          {
            loader: 'babel-loader',
            options: {
              presets: [ 'env' ]
            }
          },
           /** ES lint For webpack build */
          {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          }
        ]
    }
  ]
};

/**
 * List of plugins to run
 */
const plugins = [

  /** Minify JS and CSS */
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true
  }),

  /** Block biuld if errors found */
  new webpack.NoEmitOnErrorsPlugin(),

  /**
   * Add comments before output file lib/moduleDispatcher.js
   * @type {String} — bundleComment
   */
  new webpack.BannerPlugin({
    banner: bundleComment
  })

];

/**
 * Final webpack config
 */
const config = {
  entry: entry,
  output: output,
  module: useModule,
  plugins: plugins,
  watch: true
};

module.exports = config;
