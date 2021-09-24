import Vue from 'vue'
import Vuex from 'vuex'
import modulesMoney from './modules/vuexa.js'
import modulesCount from './modules/vuexb.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    modulesMoney,
    modulesCount
  }
})