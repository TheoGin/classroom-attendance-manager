const { defineConfig } = require('@vue/cli-service');

const px2rem = require('postcss-pxtorem');

module.exports = defineConfig({
  transpileDependencies: true,
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       postcssOptions: {
  //         plugins: [
  //           px2rem({
  //             remUnit: 37.5
  //           })
  //         ]
  //       }
  //     }
  //   }
  // }
});
