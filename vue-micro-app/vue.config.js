const { name } = require('./package');
module.exports = {
  transpileDependencies: ['common'],
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 8081
  },
  chainWebpack: config => config.resolve.symlinks(false),
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
}
