module.exports = {
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },

devServer: {
  // before: function(app) {
  //   const base = baseUrl.replace(/\/+$/, ''); // 移除尾部斜杠
  //     app.get(`${base}/:page/*`, function(req, res, next) {
  //     if (['healthCloud', 'index'].includes(req.params.page)) {
  //     // 把 /<base>/<page>/* 重定向到 /<base>/<page>/
  //     req.url = `${base}/${req.params.page}/`;
  //     next('route');
  //     } else {
  //       next();
  //     }
  //   });
  // },
},
pages: {
  index1: {
    entry: 'src/main1.js',
    template: 'public/index1.html',
    filename: 'index1.html'
  },
  index: {
    entry: 'src/main.js',
    template: 'public/index.html',
    filename: 'index.html'
  },
},
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require("postcss-px-to-viewport")({
  //           unitToConvert: "px",
  //           viewportWidth: 750,
  //           viewportHeight: 667,
  //           unitPrecision: 3,
  //           propList: [
  //             "*"
  //           ],
  //           viewportUnit: "vw",
  //           fontViewportUnit: "vw",
  //           selectorBlackList: ['.ignore', '.hairlines'],
  //           minPixelValue: 1,
  //           mediaQuery: false,
  //           replace: true,
  //           exclude: /(\/|\\)(node_modules)(\/|\\)/,
  //         })
  //       ]
  //     }
  //   }
  // }
}
