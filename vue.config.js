const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // lintOnSave: false,
  devServer: {
    port: 8082,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    // overlay: {
    //   warning: false,
    //   errors: false,
    // },
  },
  // configureWebpack: {
  //   output: {
  //     library: "vueApp",
  //     libraryTarget: "umd",
  //   },
  // },
});
