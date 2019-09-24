<template>
  <div class="home">
    <div v-show="!$route.meta.child">
      <head-component @change="handlerClickPage" :activeIndex="index"></head-component>
      <div class="home-content">
        <van-swipe ref="vantSwipe" :loop="false" :duration="150" :height="wh" @change="handlerChangPage" :show-indicators="false">
          <van-swipe-item v-for="(item,index) in arr" :key="index+100">
            <keep-alive>
              <component :is="item"></component>
            </keep-alive>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <keep-alive>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </keep-alive>
    <bottom-play></bottom-play>
  </div>
</template>

<script>
  const HeadComponent = ()=>import("../components/common/header/appHeader")
  const Mine = ()=>import('./mine/Mine')
  const MusicHouse = ()=>import('./musicHouse/index')
  const Find = ()=>import( './find/index')
  const BottomPlay = ()=>import('../components/common/playBottom/play')
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
        arr: ['Mine', 'MusicHouse', 'Find'],
        wh:window.innerHeight-160,
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
