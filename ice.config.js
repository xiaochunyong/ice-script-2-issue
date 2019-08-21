const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

let publicPath = './';
const envParam = process.env.ENV || '';
if (envParam === 'uat') {
  publicPath = 'https://xxx.xxx.xxx/uat/project';
} else if (envParam === 'pro') {
  publicPath = 'https://xxx.xxx.xxx/project';
}
console.log(`env is ${envParam}`)

module.exports = {
  entry: 'src/index.js',
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  define: {
    // 此处不能省略 JSON.stringify，否则构建过程会出现语法问题
    // ASSETS_VERSION: JSON.stringify('0.0.1'),
    ENV: process.env.ENV
  },
  publicPath,
  devPublicPath: '/',
  hash: true,
  outputDir: 'build',
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    ['ice-plugin-fusion', {
      themePackage: '@icedesign/theme',
    }],
    ['ice-plugin-moment-locales', {
      locales: ['zh-cn'],
    }],
  ],
  chainWebpack: (config, { command }) => {
    config.optimization.splitChunks({ cacheGroups: {
      vendor: {
          test: /[\\/]node_modules[\\/]/, // 匹配 node_modules 目录
          name: 'vendor',
          chunks: 'all',
          minChunks: 1,
        },
      }});
  },
};
