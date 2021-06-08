const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@$': resolve('src')
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/styles/__variables.scss"'
      }
    }
  }
}
