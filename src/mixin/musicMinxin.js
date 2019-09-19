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
      updateControl: true,//保证音频播放对象的唯一性控制器
      _initFirst: false,//控制初始加载页面app时不让自动播放
    }
  },
  watch: {
    '$store.state.songInfo': {
      deep: true,
      handler(newVal, oldVal) {
        if (oldVal) {
          //如果前一首歌是存在的，初始化所有数据
          this.initData()
        }
        this.songObj = newVal
      },
      immediate: true
    },
    audio: {
      deep: true,
      async handler(newVal, oldVal) {
        if (oldVal) {
          //先移除之前的监听器
          await this.removeLisens(oldVal)
          //开启DOM节点的播放器
          this.updateControl = true
          this.$nextTick(()=>{
            //dom更新完成后获取节点对象，并施加监听
            this.initPalyEl()
            this.audio.play()
          })
        }
      }
    }
  },
  computed: {
    //歌曲进度
    timeRate() {
      return (this.currentTime / this.audioTimeTotal) * 100
    },
  },
  methods: {
    initData() {
      this.audio = null
      this.updateControl = false//清除Dom节点上audio，保证播放器的唯一
      this.playRotate = 0//歌曲进度
      this.audioTimeTotal = 1//歌曲总时间
      this.currentTime = 0//歌曲播放当前时间
      clearInterval(this.setInt)
      this.setInt = null//歌曲头像旋转控制器
    },
    //初始化播放媒体
    initPalyEl() {
      this.audio = this.$refs.audioPlay
      this.addLisenters()
    },
    Etimeupdate(e) {
      this.currentTime = e.srcElement.currentTime
      clearInterval(this.setInt)
      this.setInt = setInterval(() => {
        this.playRotate += 0.36
      }, 30)
      if (e.srcElement.paused) {
        clearInterval(this.setInt)
        this.songStatus = false
      } else {
        this.songStatus = true
      }
    },
    Eloadedmetadata(e) {
      this.audioTimeTotal = e.srcElement.duration
      console.log(this.audioTimeTotal)
    },
    Eended(e) {
      this.songStatus = false
      clearInterval(this.set)
    },
    //移除旧元素的监听器
    removeLisens(audio) {
      audio.removeEventListener('timeupdate', this.Etimeupdate, false)
      audio.removeEventListener('loadedmetadata', this.Eloadedmetadata, false)
      audio.removeEventListener('ended', this.Eended, false)
    },
    //添加音频资源监听
    addLisenters() {
      this.audio.addEventListener('timeupdate', this.Etimeupdate)
      this.audio.addEventListener('loadedmetadata', this.Eloadedmetadata)
      this.audio.addEventListener('ended', this.Eended)
    },
    //播放控制器
    goPlay() {
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
