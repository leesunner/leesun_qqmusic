import Vue from 'vue'
const _this = Vue.prototype
const songList = '../../static/dataJson/songs.json'
export default {
  //模拟数据请求
  async getSonsList({commit}){
    await _this.$axios.get(songList).then(res=>{
        const list = res.list
        commit('setSongsList',list)
        //默认提交一个
        commit('setSonsInfo',list[0])
      })
  }
}
