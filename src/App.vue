<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <!--当前播放歌曲弹出层-->
    <transition-scale :show="$store.state.showSongPage">
      <div class="transition-box" v-show="$store.state.showSongPage">
        <song-page></song-page>
      </div>
    </transition-scale>
  </div>
</template>

<script>
  import SongPage from './components/songPage/index'

  export default {
    name: 'App',
    components: {SongPage},
    created() {
      this.$store.dispatch('getSonsList')
    },
  }
</script>

<style lang="less">
  * {
    font-family: '思源黑体-加粗', Verdana, Arial, 'Avenir', Helvetica, sans-serif, "Times New Roman";
    text-decoration: none;
    font-weight: normal;
    outline: none;
    -webkit-appearance: none;
    box-sizing: border-box;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .transition-box {
    position: fixed;
    top: 0;
    bottom: 60px;
    left: 80px;
    right: 0;
    margin: auto auto;
    width: 0;
    height: 0;
    z-index: 1991;
    scaleX: 0;
    scaleY: 0;
    opacity: 0;
    overflow: hidden;
  }
  .van-toast--text{
      padding: 20px 24px;
    background-color: rgba(7, 193, 96, 0.86);
    .van-toast__text{
      font-size: 28px;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 0.25s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  .fade-enter {
    transform: translateX(300px);
  }

  .fade-leave-active {
    transform: translateX(-300px);
  }

</style>
