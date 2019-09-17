<template>
  <div class="home">
    <head-component @change="handlerClickPage" :activeIndex="index"></head-component>
    <div class="home-content">
      <van-swipe ref="vantSwipe" :loop="false" :duration="150" @change="handlerChangPage" :show-indicators="false">
        <van-swipe-item v-for="(item,index) in arr" :key="index+100">
          <keep-alive>
            <component :is="item"></component>
          </keep-alive>
        </van-swipe-item>
      </van-swipe>
    </div>
    <bottom-play></bottom-play>
  </div>
</template>

<script>
  import HeadComponent from "../components/common/header/appHeader"
  import Mine from './mine/Mine'
  import MusicHouse from './musicHouse/index'
  import Find from './find/index'
  import BottomPlay from '../components/common/playBottom/play'
  export default {
    components: {
      HeadComponent,
      Mine,
      MusicHouse,
      Find,
      BottomPlay,
    },
    name: "home",
    data() {
      return {
        index: 0,
        arr: ['Mine', 'MusicHouse', 'Find']
      }
    },
    methods: {
      handlerClickPage(index) {
        //用以区分是轮播切换还是head点击切换
        this.$refs.vantSwipe.swipeTo(index)
      },
      handlerChangPage(index) {
        this.index = index
      },
    }
  }
</script>

<style lang="less" scoped>
  .home {
    width: 100%;
    position: relative;
    &-content {
      padding-top: 184px;
      overflow: hidden;
    }
  }
</style>
