/**
 * @format
 * @Author: swipth
 * @Description: vuex
 */

import { createStore } from "vuex";

const modulesFiles = import.meta.glob("./modules/*.js",{ eager: true });

const pathList = [];

for (const path in modulesFiles) {
  pathList.push(path);
}

const modules = pathList.reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, "$1");
  const value = modulesFiles[modulePath];
  // @ts-ignore
  modules[moduleName] = value.default;
  return modules;
}, {});

export default createStore({
  state: {},
  actions: {},
  mutations: {},
  modules,
  getters: {},
});
