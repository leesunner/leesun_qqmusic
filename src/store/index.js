import Vue from 'vue'
import Vuex from 'vuex'
import Actions from './actions'
import Mutations from './mutations'

Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    audio:null,//媒体对象
    songInfo:{},//正在播放的资源
    songList:[],//本地音乐集合
    songPlayNum:0,//最近音乐播放数
    showSongPage:false,//显示当前播放页面的控制器
    playRotate:0,//播放音乐的旋转角度
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
