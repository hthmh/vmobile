import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import test from './modules/test'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    test
  }
})

export default store
