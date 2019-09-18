const MusicMixin = {
  data: function () {
    return {
      audio: null,//媒体对象
      playRotate: 0,//歌曲进度
      audioTimeTotal: 1,//歌曲总时间
      currentTime: 0,//歌曲播放当前时间
      setInt: null,//歌曲头像旋转控制器
      songStatus: false,//当前歌曲播放状态
      songObj: {},
    }
  },
  watch: {
    '$store.state.songInfo': {
      deep: true,
      handler(newVal) {
        this.songObj = newVal
        this.$nextTick(()=>{
          this.audio = this.$refs.audioPlay
        })
      },
      immediate: true
    },
    audio(newVal){
      if(newVal!=null){
        this.audio!=null?this.removeLisens():''
        this.initData()
        this.addLisenters()
        this.audio.play()
      }
    },
  },
  computed: {
    //歌曲进度
    timeRate() {
      return (this.currentTime / this.audioTimeTotal) * 100
    },
  },
  methods: {
    initData() {
      this.playRotate = 0//歌曲进度
      this.audioTimeTotal = 1//歌曲总时间
      this.currentTime = 0//歌曲播放当前时间
      clearInterval(this.setInt)
      this.setInt = null//歌曲头像旋转控制器
      this.songObj = {}
    },
    //移除监听器
    removeLisens(){
      this.audio.removeEventListener('timeupdate',null)
      this.audio.removeEventListener('loadedmetadata',null)
      this.audio.removeEventListener('ended',null)
    },
    //添加音频资源监听
    addLisenters() {
      this.audio.addEventListener('timeupdate', e => {
        this.currentTime = e.srcElement.currentTime
        clearInterval(this.setInt)
        this.setInt = setInterval(() => {
          this.playRotate += 0.36
        }, 30)
        e.srcElement.paused ? clearInterval(this.setInt) : ''
      })
      this.audio.addEventListener('loadedmetadata', e => {
        this.audioTimeTotal = e.srcElement.duration
      })
      this.audio.addEventListener('ended', e => {
        clearInterval(this.set)
      })
    },
    //播放控制器
    goPlay() {
      console.log(this.audio)
      if (this.audio.paused) {
        this.songStatus = true;
        this.audio.play()
      } else {
        this.songStatus = false;
        this.audio.pause()
      }
    },
  }
}

export default MusicMixin
