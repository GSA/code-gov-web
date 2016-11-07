/**
 * @author: @AngularClass
 */

const webpack = require('webpack');
const helpers = require('./helpers');

const DefinePlugin = require('webpack/lib/DefinePlugin');

/*
 * Webpack Plugins
 */
// problem with copy-webpack-plugin
const AssetsPlugin = require('assets-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const HtmlElementsPlugin = require('./html-elements-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

/*
 * Webpack Constants
 */
const HMR = helpers.hasProcessFlag('hot');
const METADATA = {
  title: 'Code.gov',
  baseUrl: '/',
  isDevServer: helpers.isWebpackDevServer()
};

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function (options) {
  // TODO: Used by `@angularclass/hmr-loader` below. Feels bad, might
  // want to upgrade to latest hmr-loader and pull out env dependency
  // (or move this definition out of common)
  isProd = ['production', 'staging'].includes(options.env);

  return {

    /*
     * Cache generated modules and chunks to improve performance for multiple incremental builds.
     * This is enabled by default in watch mode.
     * You can pass false to disable it.
     *
     * See: http://webpack.github.io/docs/configuration.html#cache
     */
    //cache: false,

    /*
     * The entry point for the bundle
     * Our Angular.js app
     *
     * See: http://webpack.github.io/docs/configuration.html#entry
     */

    entry: {
      'polyfills': './src/polyfills.browser.ts',
      'vendor': './src/vendor.browser.ts',
      'main': './src/main.browser.ts'
    },

    resolve: {

      /*
       * An array of extensions that should be used to resolve modules.
       *
       * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
       */
      extensions: ['.ts', '.js', '.json'],

      // An array of directory names to be resolved to the current directory
      modules: [helpers.root('src'), 'node_modules'],

    },

    module: {

      rules: [

        /*
        * Typescript loader support for .ts and Angular 2 async routes via .async.ts
        * Replace templateUrl and stylesUrl with require()
        *
        * See: https://github.com/s-panferov/awesome-typescript-loader
        * See: https://github.com/TheLarkInn/angular2-template-loader
        */
        {
          test: /\.ts$/,
          loaders: [
           '@angularclass/hmr-loader?pretty=' + !isProd + '&prod=' + isProd,
           'awesome-typescript-loader',
           'angular2-template-loader'
          ],
          exclude: [/\.(spec|e2e)\.ts$/]
        },

        /*
        * Json loader support for *.json files.
        *
        * See: https://github.com/webpack/json-loader
        */
        {
          test: /\.json$/,
          loader: 'json-loader'
        },

        /*
        * to string and css loader support for *.css files
        * Returns file content as string
        *
        */

        {
          test: /\.css$/,
          include: helpers.root('src', 'app'),
          loader: 'raw!postcss'
        },

        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loader: 'raw!postcss!sass'
        },

        /* Raw loader support for *.html
        * Returns file content as string
        *
        * See: https://github.com/webpack/raw-loader
        */
        {
          test: /\.html$/,
          loader: 'raw-loader',
          exclude: [helpers.root('src/index.html')]
        },

        /* File loader for supporting images, for example, in CSS files.
        */
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          loader: 'file'
        },

        {
          test: /\.(woff|woff2|ttf|eot)$/,
          loader: 'url-loader?limit=100000'
        },
      ],
    },

    plugins: [
     new AssetsPlugin({
       path: helpers.root('dist'),
       filename: 'webpack-assets.json',
       prettyPrint: true
     }),

     new ForkCheckerPlugin(),

     new CommonsChunkPlugin({
       name: ['polyfills', 'vendor'].reverse()
     }),

     new ContextReplacementPlugin(
       // The (\\|\/) piece accounts for path separators in *nix and Windows
       /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
       helpers.root('src') // location of your src
     ),

     new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'assets',
      }
     ]),

     new ScriptExtHtmlWebpackPlugin({
       defaultAttribute: 'defer'
     }),

     new HtmlElementsPlugin({
       headTags: require('./head-config.common')
     }),

     new LoaderOptionsPlugin({
      options: {
        sassLoader: {
          includePaths: [
            require('bourbon').includePaths,
            require('bourbon-neat').includePaths
          ]
        }
      }
     })
    ],

    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  };
}
