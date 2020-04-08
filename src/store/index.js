import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters";

Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export default new Vuex.Store({
  getters,
  modules
  // strict: debug, // 当debug=true时开启严格模式(性能有损耗)
  // plugins: debug ? [createLogger()] : []
});
