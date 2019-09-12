import Vue from 'vue'
import Vuex from 'vuex'
import Actions from './actions'
import Mutations from './mutations'

Vue.use(Vuex)
export default new Vuex.Store({
  state:{

  },
  getters:{},
  mutations:Mutations,
  actions:Actions,
  modules:{}
})
