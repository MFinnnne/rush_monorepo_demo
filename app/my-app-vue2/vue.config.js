const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    //开发环境下设置为编译好以后直接打开浏览器浏览
    open: true
  },
  configureWebpack: (config) => {
    //调试JS
    config.devtool = 'source-map';
  },
  css: {
    //查看CSS属于哪个css文件
    sourceMap: true
  }
});
