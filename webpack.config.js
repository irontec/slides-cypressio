"use strict";

const webpack = require("webpack"),
  path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  ImageminPlugin = require("imagemin-webpack-plugin").default;

const baseConfig = require("./content/config.json");

const optsIfDef = {
  plugins: baseConfig.plugins,
};

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist")
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, "content", "media"),
      to: 'media'
    }]),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    new HtmlWebpackPlugin({
      template: './src/index.tmpl',
      filename: 'index.html',
      chunks: ['app'],
      hash: true,
      minify: {
        collapseWhitespace: true
      },
      title: baseConfig.title
    }),
    ...(baseConfig.plugins.notes ? 
          [new HtmlWebpackPlugin({
            hash: true,
            excludeChunks: ['app'],
            template: 'node_modules/reveal.js/plugin/notes/notes.html',
            filename: 'notes.html',
            minify: {
              collapseWhitespace: true
            }
          })] : []
    ),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.ProvidePlugin({
      "window.Reveal": "reveal.js/",
      "Reveal": "reveal.js",
      "hljs": "reveal.js/plugin/highlight/highlight.js"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(txt)|(md)|(html?)$/,
        use: ["raw-loader"]
      },
      {
        test: /config\.json$/,
        use: [{
          loader: require.resolve('./src/loaders/json_glob.js')
        }]
      },
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "src"),
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                /*
                  To get tree shaking working, we need the `modules: false` below.
                  https://goo.gl/4vZBSr - 2ality blog mentions that the issue is caused
                  by under-the-hood usage of `transform-es2015-modules-commonjs`.
                  https://goo.gl/sBmiwZ - A comment on the above post shows that we
                  can use `modules: false`.
                  https://goo.gl/aAxYAq - `babel-preset-env` documentation.
                */
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      browsers: [
                        'last 2 versions'
                      ]
                    },
                    modules: false // Needed for tree shaking to work.
                  }
                ]
              ],
      
              // https://goo.gl/N9gaqc - List of Babel plugins.
              plugins: [
                '@babel/plugin-proposal-object-rest-spread', // https://goo.gl/LCHWnP
                '@babel/plugin-proposal-class-properties' // https://goo.gl/TE6TyG
              ]
      }
          },
          {loader: 'condition-loader', options: optsIfDef } 
        ]
      },
      {
        test: /\.css$/,
        use: [
          
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: function() {
                return [
                  require("cssnano")({discardComments: { removeAll: true }}),
                  require("autoprefixer")
                ];
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: function() {
                return [
                  require("cssnano")({discardComments: { removeAll: true }}),
                  require("autoprefixer")
                ];
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|mp4)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 32 * 1024
            }
          }
        ]
      },
      {
        test: /\.(mp4|ogg|svg)(\?.*)?$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    alias: {},
    extensions: [".js"],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  }
};
