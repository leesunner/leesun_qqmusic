<template>
  <van-row class="play">
    <van-col span="12" class="play-left">
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
        <audio preload ref="audioPlay">
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
      }
    },
  }
</script>

<style lang="less" scoped>
  .play {
    .posit('b');
    height: 128px;
    background-color: #ffffff;
    box-shadow: 0 -2px 10px 2px rgba(242, 243, 246, 0.75);
    padding: 16px 30px 0 30px;
    z-index: 999;
    &-left {
      .flex('s');
      &-img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
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
        top: 7.5px;
        right: 1.5px;
        width: 0.75rem;
        height: 0.75rem;
        text-align: center;
        z-index: 10;
      }
    }
  }
</style>
