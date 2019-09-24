<template>
  <div class="songPage">
    <div class="songPage-head">
      <van-nav-bar :title="$store.state.songInfo.songName">
        <van-icon class-prefix="iconfont icon-xiala-" @click="close" slot="left"/>
        <van-icon class-prefix="iconfont icon-diandiandianshu" slot="right"/>
      </van-nav-bar>
    </div>
    <div class="songPage-swiper">
      <div class="songPage-songInfo">
        <p class="songPage-singer">— {{$store.state.songInfo.singer}} —</p>
        <div class="songPage-choose">
          <div>M V</div>
          <div>音效 on</div>
        </div>
      </div>
      <div class="songPage-img">
        <div class="songPage-img-tran"
             :style="'background-image: url('+$store.state.songInfo.img+');transform:rotateZ('+$store.state.playRotate+'deg);'">
        </div>
      </div>
      <p class="songPage-li">{{$store.state.songInfo.songName}} -- 歌词</p>
    </div>
    <div class="songPage-controller">
      <!--//进度条-->
      <div class="songPage-rang">
        <span>{{$store.state.songCurrentTime | formatTime('mm:ss')}}</span>
        <div class="songPage-rang-item">
          <range
            ref="range"
            v-model="rangTime"
            @change="changVal"
            @input="inputVal"
            :bar-height="5">
          </range>
        </div>
        <span>{{$store.state.songTotalTime | formatTime('mm:ss')}}</span>
      </div>
      <!--控制按钮 icon-xunhuanbofang icon-danquxunhuan-->
      <div class="songPage-button">
        <icon :size="0.60"
              :icon="playMode==1?'icon-danquxunhuan':playMode==2?'icon-suijibofang01':'icon-xunhuanbofang'"
              :fontColor="'#bfbfbf'"
              @click="setPlayMode"
        ></icon>
        <div class="songPage-button-kz">
          <icon :size="0.9" :icon="'icon-yduishangyiqu'" :fontColor="'#e0e0e0'" @click="cutSong(1)"></icon>
          <icon :size="1.35" :icon="songStatus?'icon-pause':'icon-bofang1'" @click="goPlay" :fontColor="'#e0e0e0'"></icon>
          <icon :size="0.9" :icon="'icon-yduixiayiqu'" :fontColor="'#e0e0e0'" @click="cutSong(2)"></icon>
        </div>
        <icon :icon="'icon-liebiao'" :size="0.60" :fontColor="'#bfbfbf'"></icon>
      </div>
      <div class="songPage-showButton">
        <icon :size="0.56" :icon="'icon-iconfront-'" :fontColor="'#bfbfbf'"></icon>
        <icon :size="0.56" :icon="'icon-xiazai'" :fontColor="'#bfbfbf'"></icon>
        <icon :size="0.56" :icon="'icon-fenxiang'" :fontColor="'#bfbfbf'"></icon>
        <icon :size="0.56" :icon="'icon-pinglun'" :fontColor="'#bfbfbf'"></icon>
      </div>
    </div>
  </div>
</template>

<script>
  import Icon from "../common/icon/icon";
  import 'mint-ui/lib/style.css'
  import { Range } from 'mint-ui';
  import {MusicMixin} from '@/mixin/index'
  export default {
    components: {Icon,Range},
    mixins:[MusicMixin],
    name: "song",
    watch:{
      '$store.state.audio':{
        deep:true,
        handler(newVal,oldVal){
          if(oldVal){
            newVal.paused?this.songStatus = true:this.songStatus = false
          }else{
            this.songStatus = true
          }
        },
      },
      timeRate(newVal,oldVal){
        this.rangTime = newVal
      },
    },
    data() {
      return {
        playMode:this.$store.state.songPlayMode,
        rangTime:0,
      }
    },
    methods: {
      inputVal(e){
        const audio = this.$store.state.audio
        audio.pause()
      },
      changVal(e){
        const audio = this.$store.state.audio
        audio.currentTime = (e/100)*this.$store.state.songTotalTime
        this.goPlay()
      },
      //设置歌曲播放模式
      setPlayMode(){
        let mode = this.$store.state.songPlayMode
        this.$store.commit('setSongPlayMode',mode<3?mode+1:1)
        this.playMode = this.$store.state.songPlayMode
        console.log(this.$toast())
        this.$toast({
          message:`已切换${this.playMode==1?'单曲循环':this.playMode==2?'随机播放':'顺序播放'}`,
          duration:1500
        });
      },
      //切换歌曲
      cutSong(type){
        const arr = this.$store.state.songList;
        let index = arr.indexOf(this.$store.state.songInfo)
        type==1?(index==0?index=arr.length-1:index--):(index==arr.length-1?index=0:index++)
        this.$store.commit('setPlayRotate',0)
        this.$store.commit('setSonsInfo',arr[index])
      },
      close() {
        this.$store.commit('setShowSongPage', false)
      },
    }
  }
</script>

<style lang="less" scoped>
  .songPage {
    background: linear-gradient(#555448, #1b1a1c);
    height: 100%;
    color: #ffffff;
    position: relative;
    &-head {
      padding: @head;
      /deep/ .van-nav-bar {
        border-color: transparent;
        background-color: transparent;
        div {
          font-size: 36px;
          i {
            font-size: 0.53rem;
          }
        }
      }
      /deep/ .van-nav-bar__title {
        color: #ffffff;
      }
    }
    &-swiper{
      position: relative;
      padding-top: 136px;
    }
    &-songInfo{
      height: 136px;
      overflow: hidden;
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
    &-singer {
      text-align: center;
    }
    &-choose {
      .flex('center');
      margin: 30px auto;
      div {
        border: solid 2px #ffffff;
        padding: 2px 8px;
        font-size: 22px;
      }
      div:nth-child(1) {
        margin-right: 14px;
      }
    }
    &-img {
      height: 48%;
      padding: 1% 12px;
      &-tran {
        width: 720px;
        height: 720px;
        border-radius: 50%;
        .bgi();
      }
    }
    &-li {
      text-align: center;
      font-size: 34px;
      margin: 34px auto;
    }
    &-controller{
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 30px auto;
      width: 100%;
    }
    &-rang{
      .flex('b');
      padding: 0 35px;
      span{
        color: #ffffff;
        font-size: 26px;
      }
      &-item{
        width: 80%;
        /deep/.mt-range-progress{
          background-color: #32c37d;
        }
      }
    }
    &-button{
      .flex('b');
      padding: 30px 45px;
      &-kz{
        width: 55%;
        .flex('b');
      }
    }
    &-showButton{
      width: 70%;
      margin: 0 auto;
      .flex('b');
    }
    [class*=van-hairline]::after {
      border: none;
    }
  }
</style>
