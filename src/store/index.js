/**
 * Created by viruser on 2018/8/9.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user
  },
  getters,
  actions,
  mutations
})

export default store;
