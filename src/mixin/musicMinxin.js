const MusicMixin = {
  data(){
    return{
      songStatus: true,//当前歌曲播放状态
    }
  },
  computed: {
    //歌曲进度
    timeRate() {
      return (this.$store.state.songCurrentTime / this.$store.state.songTotalTime) * 100
    },
  },
  methods: {
    //播放控制器
    goPlay() {
      this.$nextTick(()=>{
        const audio = this.$store.state.audio
        if (audio.paused) {
          this.songStatus = true;
          audio.play()
        } else {
          this.songStatus = false;
          audio.pause()
        }
      })
    },
  }
}

export default MusicMixin
