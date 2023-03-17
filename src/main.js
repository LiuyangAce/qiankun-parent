import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerMicroApps, start } from "qiankun";

const apps = [
  {
    name: "qiankun-child1",
    entry: "//192.168.14.13:8083/",
    container: "#vue",
    activeRule: "/vue",
  },
  // {
  //   beforeLoad: (app) => console.log("before load", app.name),
  //   beforeMount: [(app) => console.log("before mount", app.name)],
  // },
];
registerMicroApps(apps); //注册子应用

createApp(App).use(store).use(router).mount("#app");

start(); //启动qiankun
console.log("已经启动了");
