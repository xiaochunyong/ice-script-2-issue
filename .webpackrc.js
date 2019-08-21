// 解决IE兼容性
// ICE的webpack可能需要其他配置，无法直接在entry使用babel-polyfill，提示无法找到模块；暂时在入口文件加载babel-polyfill
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');


// todo: 拆分文件

// console.log(1, typeof(process.env.ENV), process.env.ENV)

const options = {};

if (process.env.ENV) {

  switch (process.env.ENV.toLowerCase()) {
    case 'pro':
      options.output = {
        // OSS目录，弃用
        // path: `${__dirname}/build/mta/erp`,
        // 静态资源目录
        publicPath: "https://xxx.xxx.xxx/project"
      },
        options.optimization = {
          splitChunks: {
            chunks: 'async',
            minSize: 100000,
            maxSize: 300000,
            minChunks: 2,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true
          }
        }
      break;
    case 'uat':
      options.output = {
        // OSS目录，弃用
        // path: `${__dirname}/build/mta/erp`,
        // 静态资源目录
        publicPath: "https://xxx.xxx.xxx/uat/project",
      },
      options.optimization = {
        splitChunks: {
          chunks: 'async',
          minSize: 100000,
          maxSize: 300000,
          minChunks: 2,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          automaticNameDelimiter: '~',
          name: true
        }
      }
      break;
    default:
      break;
  }
  options.plugins = [
    new webpack.EnvironmentPlugin({
      ENV: process.env.ENV
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      minify: {
        //移除注释
        removeComments: true,
        //移除空白
        collapseWhitespace: true,
        //移除html中可以去掉的引号
        removeAttributeQuotes: true
      }
      // hash: true
    }),
  ]
}

console.log("additional webpack options: ", options);

module.exports = options
