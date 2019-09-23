export default {
  setSonsInfo(state,val){
    state.songInfo = val
  },
  setSongsList(state,val){
    state.songList = val
  },
  setSongPlayNum(state){
    state.songPlayNum++
  },
  setShowSongPage(state,val){
    state.showSongPage = val
  },
  setPlayRotate(state,val){
    state.playRotate = val
  },
  setAudio(state,val){
    state.audio = val
  },
  setSongPlayMode(state,val){
    state.songPlayMode = val
  },
  setSongTotalTime(state,val){
    state.songTotalTime = val
  },
  setSongCurrentTime(state,val){
    state.songCurrentTime = val
  }
}
