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

<style>

</style>
