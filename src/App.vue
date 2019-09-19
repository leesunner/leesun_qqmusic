<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    this.$store.dispatch('getSonsList')
  },
}
</script>

<style lang="less">
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
