<template>
    <lee-load-more ref="load" :data="imgs" :pullDown="true" :pullUp="true" @handlerPullDown="handlerPullDown"
                   @handlerUpDown="handlerUpDown">
    </lee-load-more>
</template>

<script>
  import LeeLoadMore from "../../components/common/load/loadMore/loadMore";
  import HeadCompnent from "../../components/common/header/appHeader"
  export default {
    components: {
      LeeLoadMore,
      HeadCompnent
    },
    name: "find",
    data() {
      return {
        imgs: [
          {
            url: require('../../assets/img/banner/1680628.jpg'),
          },
          {
            url: require('../../assets/img/banner/1688839.jpg'),
          },
          {
            url: require('../../assets/img/banner/1688993.jpg'),
          },
          {
            url: require('../../assets/img/banner/1689026.jpg'),
          },
        ],
        arr: [
          {
            url: require('../../assets/img/banner/1680628.jpg'),
          },
          {
            url: require('../../assets/img/banner/1688839.jpg'),
          },
          {
            url: require('../../assets/img/banner/1688993.jpg'),
          },
          {
            url: require('../../assets/img/banner/1689026.jpg'),
          },
        ],
      }
    },
    mounted() {
      this.$nextTick(() => {

      })
    },
    methods: {
      handlerPullDown() {
        let that = this
        setTimeout(() => {
          this.imgs = [...that.arr]
          this.$refs.load.loadFinished()
        }, 300)
      },
      handlerUpDown() {
        let that = this
        setTimeout(() => {
          this.imgs.push(...that.arr)
          this.$refs.load.loadFinished()
        }, 300)
      },
    }
  }
</script>

<style lang="less" scoped>

</style>
