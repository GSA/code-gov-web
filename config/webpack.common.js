/**
 * @author: @AngularClass
 */

const webpack = require('webpack');
const helpers = require('./helpers');
const webpackMerge = require('webpack-merge');

const DefinePlugin = require('webpack/lib/DefinePlugin');
const AssetsPlugin = require('assets-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const IgnorePlugin = require('webpack/lib/IgnorePlugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CriticalCssPlugin = require('./critical-css-plugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const postcssCssnext = require('postcss-cssnext');
const postcssImport = require('postcss-import');
const SiteConfig = require('./code-gov-config.json');

module.exports = function (options) {

  let isProd = ['production', 'staging'].indexOf(options.env) > -1;

  /*
    Basically, if set API_URL environmental variable to stag,
    staging, or the actual url, use staging.  Otherwise, use
    production url.
  */
  let API_URL = process.env.API_URL;
  if (API_URL) {
    API_URL = API_URL.trim().toLowerCase();
    if (API_URL.startsWith("http") === false) {
      if (API_URL.startsWith("stag")) {
        API_URL = 'https://code-api-staging.app.cloud.gov/api/';
      } else {
        API_URL = 'https://code-api.app.cloud.gov/api/';
      }
    }
  } else {
    API_URL = 'https://code-api.app.cloud.gov/api/';
  }
  
  const METADATA = {
    API_URL,
    baseUrl: '/',
    isDevServer: helpers.isWebpackDevServer(),
    gtmAuth: isProd ? 'GTM-M9L9Q5' : 'GTM-MSJCVS',
    HMR: isProd ? false : helpers.hasProcessFlag('hot'),
    ENV: options.env,
    port: process.env.PORT || (isProd ? 8080 : 2700),
    host: process.env.HOST || 'localhost'
  };
  
  if (process.env.CODE_GOV_API_KEY) {
    METADATA.CODE_GOV_API_KEY = process.env.CODE_GOV_API_KEY;
  }

  const copyPluginOptions = [{
    from: 'src/assets',
    to: 'assets',
  }, {
    from: 'src/meta',
    to: '',
  }, {
    from: 'node_modules/monaco-editor/min/vs',
    to: 'vs',
  }];
  if (isProd) copyPluginOptions.push({ from: 'config/CNAME' })

  /**
   * Common Plugins
   */

  const commonPlugins = [
    new AssetsPlugin({
      path: helpers.root('dist'),
      filename: 'webpack-assets.json',
      prettyPrint: true
    }),
    new CheckerPlugin(),
    /**
      * Plugin: ContextReplacementPlugin
      * Description: Provides context to Angular's use of System.import
      *
      * See: https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin
      * See: https://github.com/angular/angular/issues/11580
      */
     new ContextReplacementPlugin(
       /**
        * The (\\|\/) piece accounts for path separators in *nix and Windows
        */
       /angular(\\|\/)core(\\|\/)@angular/,
       helpers.root('src'), // location of your src
       {
         /**
          * Your Angular Async Route paths relative to this root directory
          */
       }
     ),
    new CopyWebpackPlugin(copyPluginOptions),
    new LoaderOptionsPlugin({
      debug: isProd ? false : true,
      options: {
        postcss: [
          postcssImport({ addDependencyTo: webpack }),
          postcssCssnext({
            browsers: ['last 2 versions', 'ie >= 9'],
          }),
        ],
        sassLoader: {
          includePaths: []
        },
        tslint: {
          emitErrors: isProd ? true : false,
          failOnHint: isProd ? true : false,
          resourcePath: 'src'
        },
        htmlLoader: isProd ? {
          minimize: true,
          removeAttributeQuotes: false,
          caseSensitive: true,
          customAttrSurround: [
            [/#/, /(?:)/],
            [/\*/, /(?:)/],
            [/\[?\(?/, /(?:)/]
          ],
          customAttrAssign: [/\)?\]?=/]
        } : {},
      }
    }),
    new DefinePlugin({
      'ENV': JSON.stringify(METADATA.ENV),
      'HMR': METADATA.HMR,
      'process.env': {
        'CODE_GOV_API_KEY': JSON.stringify(METADATA.CODE_GOV_API_KEY),
        'API_URL': JSON.stringify(METADATA.API_URL),
        'ENV': JSON.stringify(METADATA.ENV),
        'NODE_ENV': JSON.stringify(METADATA.ENV),
        'HMR': METADATA.HMR,
      }
    })
//    htmlWebpackPlugin,
  ];

  /**
   * Prod-Specific Plugins
   */
  const prodPlugins = commonPlugins.concat([
    new WebpackMd5Hash(),
    new UglifyJsPlugin({
      uglifyOptions: {
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        output: {
          beautify: false,
          comments: false
        }
      }
    }),
    new NormalModuleReplacementPlugin(
      /angular2-hmr/,
      helpers.root('config/modules/angular2-hmr-prod.js')
    ),
    /**
     * Inline critical-path CSS in index.html, and asynchronously load remainder of stylesheet.
     */
    new CriticalCssPlugin({
      src: 'index.html'
    }),
  ]);

  /**
   * Dev-Specific Plugins
   */
  const devPlugins = commonPlugins.concat([
    new NamedModulesPlugin()
  ]);

  /**
   * Common Webpack Configuration for dev and prod
   */
  const commonConfig = {
    devtool: isProd ? 'source-map' : 'cheap-module-source-map',
    output: {
      path: helpers.root('dist'),
      filename: isProd ? '[name].[chunkhash].bundle.js' : '[name].bundle.js',
      sourceMapFilename: isProd ? '[name].[chunkhash].bundle.map' : '[name].map',
      chunkFilename: isProd ? '[id].[chunkhash].chunk.js' : '[id].chunk.js'
    },

    entry: {
      'polyfills': './src/polyfills.browser.ts',
      'vendor': './src/vendor.browser.ts',
      'main': './src/main.browser.ts',
      'styles': './src/styles/base/_all.scss',
    },

    resolve: {
      extensions: ['.ts', '.js', '.json', '.md'],
      modules: [helpers.root('src'), 'node_modules'],
    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          loaders: [
           '@angularclass/hmr-loader?pretty=' + !isProd + '&prod=' + isProd,
           'awesome-typescript-loader',
           'angular2-template-loader'
          ],
          exclude: [/\.(spec|e2e)\.ts$/]
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.css$/,
          include: helpers.root('src', 'app'),
          loader: 'raw-loader!postcss-loader'
        },
        {
          test: /\.scss$/,
          exclude: [ /node_modules/, /src\/styles/],
          loader: 'raw-loader!postcss-loader!sass-loader?sourceMap',
        },
        {
          test: /\.scss$/,
          include: /src\/styles/,
          loader: 'style-loader!css-loader!postcss-loader!resolve-url-loader!sass-loader?sourceMap',
        },
        {
          test: /\.scss$/,
          include: /node_modules/,
          loader: 'style-loader!css-loader!postcss-loader!resolve-url-loader!sass-loader?sourceMap',
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
          exclude: [helpers.root('src/index.html')]
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          loader: 'file-loader'
        },
        {
          test: /\.(woff|woff2|ttf|eot)$/,
          loader: 'url-loader?limit=100000'
        },
        {
          test: /\.md$/,
          use: [
            {
              loader: "html-loader"
            },
            {
              loader: "markdown-loader"
            }
          ]
        }
      ],
    },

    plugins: isProd ? prodPlugins : devPlugins,

    node: {
      global: true,
      crypto: 'empty',
      fs: 'empty',
      process: isProd ? false : true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  };

  if (isProd) {
    return commonConfig;
  } else {
    /**
     * For dev, add library names and devServer configuration.
     */
    return webpackMerge(commonConfig, {
      output: Object.assign({}, commonConfig.output, {
        library: 'ac_[name]',
        libraryTarget: 'var'
      }),
      devServer: {
        port: METADATA.port,
        host: METADATA.host,
        historyApiFallback: true,
        watchOptions: {
          aggregateTimeout: 300,
          poll: 1000
        },
        compress: true,
      }
    });


  }
}
