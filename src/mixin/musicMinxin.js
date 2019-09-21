const MusicMixin = {
  methods: {
    //播放控制器
    goPlay() {
      const audio = this.$store.state.audio
      if (audio.paused) {
        this.songStatus = true;
        audio.play()
      } else {
        this.songStatus = false;
        audio.pause()
      }
    },
  }
}

export default MusicMixin
