require('dotenv').config();
const Webpack = require('webpack');

// Webpack Plugins
const Clean = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PostcssImport = require('postcss-import');
const PostcssExtend = require('postcss-extend');
const PostssCustomMedia = require("postcss-custom-media")
const PostcssMediaMinMax = require('postcss-media-minmax');
const PostcssNext = require('postcss-cssnext');
const path = require('path');
const vendorDeps = require('./package').dependencies || {};

const BASE_PATH = __dirname;

const { BLOG_HOST, BLOG_PORT, JEKYLL_HOST, JEKYLL_PORT } = process.env;
const PROXY_TARGET = `http://${JEKYLL_HOST}:${JEKYLL_PORT}`;
const PUBLIC_PATH = '/assets/';
const IS_DEBUG = process.env.NODE_ENV !== 'production';

const postcssOptions = {
  plugins: () => [
    PostcssImport,
    PostssCustomMedia(),
    PostcssMediaMinMax(),
    /* eslint new-cap: 0*/
    PostcssNext({
      browsers: ['last 2 versions', '> 5%'],
    }),
  ],
};

const webpackConfig = {
  name: 'front-ui',
  target: 'web',
  context: BASE_PATH,
  entry: {
    app: './_styles',
    //vendor: Object.keys(vendorDeps),
  },
  output: {
    path: path.join(BASE_PATH, 'assets'),
    publicPath: '/',
    filename: '[name].js',
    sourceMapFilename: '[name].map.js',
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    alias: {
      styles: path.resolve(__dirname, './_styles'),
    },
    extensions: ['.js', 'json', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[local]',
            },
          },
          {
            loader: 'postcss-loader',
            options: postcssOptions,
          },
        ],
      },
    ],
  },
  plugins: [],
  watchOptions: {
    poll: true,
  },
  devtool: IS_DEBUG ? 'cheap-source-map' : 'source-map',
  devServer: {
    contentBase: './',
    host: BLOG_HOST,
    port: BLOG_PORT,
    hot: true,
    publicPath: PUBLIC_PATH,
    stats: {
      cached: true,
      cachedAssets: true,
      chunks: true,
      chunkModules: false,
      colors: true,
      hash: false,
      reasons: true,
      timings: true,
      version: false,
    },
    proxy: {
      '/': {
        target: PROXY_TARGET,
        secure: false,
        bypass: function bypass(req, res) {
          if (/^\/assets\/[A-Za-z0-9-]+\.css/.test(req.url)) {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write('// This is a fake CSS content... :)');
            res.end();
            return true;
          }
          return false;
        },
      },
    },
    historyApiFallback: true,
  },
};

if (IS_DEBUG) {
  webpackConfig.plugins.push(
    new Webpack.HotModuleReplacementPlugin()
  );
}
if (!IS_DEBUG) {
  delete webpackConfig.devServer;

  webpackConfig.module.rules.forEach(rule => {
    if (rule.test.test('.css')) {
      rule.use = ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              //localIdentName: '[hash:base64:8]',
              localIdentName: '[local]',
            },
          },
          {
            loader: 'postcss-loader',
            options: postcssOptions
          }
        ]
      });
    }
  });

  webpackConfig.plugins.push(
    /*
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),
    */
    new Clean([path.join(BASE_PATH, 'assets')]),
    new ExtractTextPlugin('styles.css'),
    new Webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new Webpack.optimize.UglifyJsPlugin({
      sourceMap: webpackConfig.devtool && (webpackConfig.devtool.indexOf("sourcemap") >= 0 || webpackConfig.devtool.indexOf("source-map") >= 0),
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  );

  if (webpackConfig.entry.vendor && webpackConfig.entry.vendor.length === 0) {
    delete webpackConfig.entry.vendor;
  }
}

module.exports = webpackConfig;
