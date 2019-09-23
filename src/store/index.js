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
    songPlayMode:3,//1单曲循环，2随机播放，3列表循环
    songPlayNum:0,//最近音乐播放数
    showSongPage:false,//显示当前播放页面的控制器
    playRotate:0,//播放音乐的旋转角度
    songTotalTime:1,//音乐总时间
    songCurrentTime:0,//音乐当前播放时间
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
