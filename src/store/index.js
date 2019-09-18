import Vue from 'vue'
import Vuex from 'vuex'
import Actions from './actions'
import Mutations from './mutations'

Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    songInfo:{},//正在播放的资源
    songList:[],//本地音乐集合
    songPlayNum:1,//最近音乐播放数
  },
  getters:{
    getSonsInfo(state){
      return state.songInfo
    },
    getSonsList(state){
      return state.songList
    },
    getSongPlayNum(state){
      return state.songPlayNum
    }
  },
  mutations:Mutations,
  actions:Actions,
  modules:{}
})
