module.exports = {
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
    // css: {
    //     loaderOptions: {
    //       postcss: {
    //         plugins: [
    //           require("postcss-px-to-viewport")({
    //             unitToConvert: "px",
    //             viewportWidth: 750,
    //             viewportHeight: 667,
    //             unitPrecision: 3,
    //             propList: [
    //               "*"
    //             ],
    //             viewportUnit: "vw",
    //             fontViewportUnit: "vw",
    //             selectorBlackList: ['.ignore', '.hairlines'],
    //             minPixelValue: 1,
    //             mediaQuery: false,
    //             replace: true,
    //             exclude: /(\/|\\)(node_modules)(\/|\\)/,
    //           })
    //         ]
    //       }
    //     }
    //   }
}
