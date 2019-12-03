module.exports = {
  publicPath: '/myapp',
  devServer:{
    host:'localhost',
    port: 9080,
    proxy:{
      // 添加代理，当访问/mock的时候，代理到target，
      '/mock':{
        target:'http://127.0.0.1:5500/cart.json',
        ws: false,
        changeOrigin: false
      }
    }
  }
}