import Vue from 'vue'
import Vuex from 'vuex'
import Actions from './actions'
import Mutations from './mutations'

Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    songInfo:{
      name:'安妮的仙境',
      singer:'Bandari',
      img:require('../assets/img/64.jpg'),
    },
  },
  getters:{
    getSonsInfo(state){
      return state.songInfo
    }
  },
  mutations:Mutations,
  actions:Actions,
  modules:{}
})
