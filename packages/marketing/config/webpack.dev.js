// Merge is a function that we can use to merge together two different webpack config objects.
// that common.js file and merge it together with a configuration that we're about to write inside this development.
//? merge는 webpack.common.js와 webpack.dev.js의 config를 통합해준다.
const { merge } = require('webpack-merge');
// module federation plug in은 개발과 실제서버를 각각 다르게 설정한다.
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

// HtmlWebpackPlugin ake some kind of HTML file inside of our project and inject a couple
// of different script tags inside of it.
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
