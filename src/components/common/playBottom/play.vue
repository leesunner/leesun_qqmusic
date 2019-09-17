<template>
  <van-row class="play">
    <van-col span="12" class="play-left">
      <div class="play-left-img" :style="'background-image: url('+$store.state.songInfo.img+');transform:rotateZ('+playRotate+'deg);'">
      </div>
      <div class="play-left-name">
        <p>{{$store.state.songInfo.name}}</p>
        <p>{{$store.state.songInfo.singer}}</p>
      </div>
    </van-col>
    <van-col span="12" class="play-right">
      <div class="play-right-audio">
        <audio preload ref="audioPlay">
          <source src="http://111.47.194.27/amobile.music.tc.qq.com/C400003mBrF72dILfK.m4a?guid=4062548346&vkey=8476CC5463AD46F3B500DAD312D96EE29941000D348C404C178960FD82FF2BCDB34451AAD260EDC616F3B27B58811EEC9CD4532DBADECE21&uin=0&fromtag=66" type="audio/wav">
        </audio>
      </div>
      <div class="play-right-control" @click="goPlay">
        <van-circle
          v-model="playRate"
          :rate="timeRate"
          color="#32c37d"
          :stroke-width="50"
          :size="72"
          text=""
        />
      </div>
      <icon :icon="'icon-bofang'" :size="0.8" :fontColor="'#32c37d'"></icon>
      <icon :icon="'icon-liebiao'" :size="0.8" :fontColor="'#32c37d'"></icon>
    </van-col>
  </van-row>
</template>

<script>
  export default {
    name: "play",
    data(){
      return{
        playRate:0,
        audio:null,
        playRotate:0,
        audioTimeTotal:1,
        currentTime:0,
      }
    },
    mounted(){
      this.$nextTick(()=>{
        this.audio = this.$refs.audioPlay
        this.addLisens()
      })
    },
    computed:{
      timeRate(){
        return (this.currentTime/this.audioTimeTotal)*100
      },
    },
    methods:{
      addLisens(){
        this.audio.addEventListener('timeupdate',e=>{
          this.currentTime = e.srcElement.currentTime
          this.playRotate+=3
        })
        this.audio.addEventListener('loadedmetadata',e=>{
         this.audioTimeTotal = e.srcElement.duration
        })
      },
      goPlay(){
        if(this.audio.paused){
          this.audio.play()
          // this.playRotate = true
        }else{
          this.audio.pause()
          // this.playRotate = false
        }
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
    &-left {
      .flex('s');
      &-img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        transition: all 249ms ease;
      }
      &-name {
        margin-left: 14px;
        font-size: 24px;
        p{
          padding-top: 8px;
          color: #2a2a2a;
        }
        p:nth-last-child(1){
          color: #32c37d;
        }
      }
    }
    &-right {
      .flex('e');
      position: relative;
      padding-top: 12px;
      div:nth-child(3){
        margin-right: 42px;
      }
      &-audio{
        position: absolute;
        width: 1px;
        height: 1px;
        opacity: 0;
        z-index: 2;
        right: 2px;
        bottom: 2px;
      }
      &-control{
        position: absolute;
        top: 20.5px;
        right: 103.5px;
        width: 0.75rem;
        height: 0.75rem;
        text-align: center;
        z-index: 10;
      }
    }
  }
</style>
