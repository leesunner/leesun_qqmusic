export default {
  setSonsInfo(state,val){
    state.songInfo = val
  },
  setSongsList(state,val){
    state.songList = val
  },
  setSongPlayNum(state){
    state.songPlayNum++
  }
}
