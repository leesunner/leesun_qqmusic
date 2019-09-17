<template>
  <div class="head">
    <header class="head-content">
      <icon :icon="'icon-home_shousuo_h_icon'" :size="0.53"></icon>
      <div class="head-center">
        <a v-for="(item,index) in tab" :key="index" :class="activeIndex==index?'active':''" @click="goPage(index)">{{item.name}}</a>
      </div>
      <icon :icon="'icon-tianjia-copy'" :size="0.53"></icon>
    </header>
    <div class="head-search" :class="show?'head-searchH':''">
      <icon :icon="'icon-search'" :size="0.35"></icon>
      <span>搜索</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "appHeader",
    props:['activeIndex'],
    data() {
      return {
        show:true,
        tab: [
          {
            name: '我的',
            url: 'mine'
          },
          {
            name: '音乐馆',
            url: 'musicHouse'
          },
          {
            name: '发现',
            url: 'find'
          }
        ],
      }
    },
    methods:{
      goPage(index){
        this.$emit('change',index)
      },
    }
  }
</script>

<style lang="less" scoped>
  .head {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #32c37d;
    color: #ffffff;
    padding: 16px 18px;
    z-index: 1999;
    &-content{
      height: 75px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
    }
    &-center {
      width: 50%;
      .flex('b');
      font-size: 40px;
      a {
        color: #f1f1f1;
       text-decoration: none;
      }
      .active{
        color: #ffffff!important;
        transform: scale3d(1.1,1.1,1.1);
      }
    }
    &-search{
      text-align: center;
      background-color: rgba(0,0,0,.15);
      padding: 10px 0;
      margin-top: 20px;
      overflow: hidden;
      span{
        font-size: 0.35rem;
        vertical-align: middle;
      }
    }
  }
</style>
