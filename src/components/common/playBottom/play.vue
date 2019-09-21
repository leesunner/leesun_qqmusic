<template>
  <van-row class="play">
    <van-col span="12" class="play-left" @click="showActiveSongPage">
      <div class="play-left-img"
           :style="'background-image: url('+songObj.img+');transform:rotateZ('+playRotate+'deg);'">
      </div>
      <div class="play-left-name">
        <p>{{songObj.songName}}</p>
        <p>{{songObj.singer}}</p>
      </div>
    </van-col>
    <van-col span="12" class="play-right">
      <div class="play-right-audio">
        <audio preload ref="audioPlay" v-if="updateControl">
          <source :src="`../../../../static/mp3/${songObj.url}`" />
        </audio>
      </div>
      <icon :icon="songStatus?'icon-bofang':'icon-zanting'" :size="0.8" :fontColor="'#32c37d'">
        <div class="play-right-control" @click="goPlay">
          <van-circle
            v-model="playRate"
            :rate="timeRate"
            color="#32c37d"
            :stroke-width="60"
            :size="74"
            text=""
          />
        </div>
      </icon>
      <icon :icon="'icon-liebiao'" :size="0.8" :fontColor="'#32c37d'"></icon>
    </van-col>
  </van-row>
</template>

<script>
  import {MusicMixin} from '@/mixin/index'
  export default {
    name: "play",
    mixins:[MusicMixin],
    data() {
      return {
        playRate: 0,
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
    mounted(){
      this.$nextTick(()=>{
        this.initPalyEl()
      })
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
    methods:{
      //显示隐藏播放页面
      showActiveSongPage(){
        this.$store.commit('setShowSongPage',true)
      },
      //初始化部分数据
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
        this.$store.commit('setAudio',this.audio)
        this.addLisenters()
      },
      Etimeupdate(e) {
        this.currentTime = e.srcElement.currentTime
        clearInterval(this.setInt)
        this.setInt = setInterval(() => {
          this.playRotate += 0.18
          this.$store.commit('setPlayRotate',this.playRotate)
        }, 15)
        if (e.srcElement.paused) {
          clearInterval(this.setInt)
          this.songStatus = false
        } else {
          this.songStatus = true
        }
      },
      Eloadedmetadata(e) {
        this.audioTimeTotal = e.srcElement.duration
        //每切换一次个就是一次播放记录
        this.$store.commit('setSongPlayNum',1)
      },
      Eended(e) {
        this.songStatus = false
        clearInterval(this.set)
        this.currentTime = 0
        this.$store.commit('setPlayRotate',0)
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
    }
  }
</script>

<style lang="less" scoped>
  .play {
    .posit('b');
    height: 128px;
    background-color: #ffffff;
    box-shadow: 0 -2px 10px 2px rgba(242, 243, 246, 0.75);
    padding: 16px 30px 0 30px;
    z-index: 2999;
    &-left {
      .flex('s');
      &-img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        .bgi();
      }
      &-name {
        margin-left: 14px;
        font-size: 24px;
        p {
          padding-top: 8px;
          color: #2a2a2a;
        }
        p:nth-last-child(1) {
          color: #32c37d;
        }
      }
    }
    &-right {
      .flex('e');
      position: relative;
      padding-top: 12px;
      div:nth-child(2) {
        margin-right: 42px;
      }
      &-audio {
        position: absolute;
        width: 1px;
        height: 1px;
        opacity: 0;
        z-index: 2;
        right: 2px;
        bottom: 2px;
      }
      &-control {
        position: absolute;
        top: 0.1rem;
        right: 0;
        left: 0;
        margin: 0 auto;
        width: 0.75rem;
        height: 0.75rem;
        text-align: center;
        overflow: hidden;
        z-index: 10;
      }
    }
  }
</style>
