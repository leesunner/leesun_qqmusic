<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <!--当前播放歌曲弹出层-->
    <transition-scale :show="$store.state.showSongPage">
      <div class="transition-box" :style="`height: ${wh}px;`" v-show="$store.state.showSongPage">
        <song-page></song-page>
      </div>
    </transition-scale>
  </div>
</template>

<script>
  import SongPage from './components/songPage/index'

  export default {
    name: 'App',
    data() {
      return {
        wh: window.innerHeight
      }
    },
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
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto;
    width: 100%;
    z-index: 2999;
    overflow: hidden;
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
