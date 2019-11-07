const autoprefixer = require('autoprefixer');
const MiniCSSExtractPlugin = require ('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports  = (env, argv) => {
function isDevelopment() {
  return argv.mode === 'development';
}  
const config = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js'
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({
          map: {
            inline: false,
            annotation: true
          }
        })
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCSSExtractPlugin({
        filename: 'bundle.css'
      })
    ],
    devtool: isDevelopment() ?'cheap-module-source-map': 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                [
                  '@babel/preset-react',
                  {
                    "pragma": "React.createElement",
                    "pragmaFrag": "React.Fragment",
                    "development": isDevelopment()
                  }
                ]
              ]
            }
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCSSExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer()
                ]
              }
            },
            'sass-loader'
          ]
        }
      ]
    }
  }
  return config;
}