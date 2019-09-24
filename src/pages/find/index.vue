<template>
  <lee-load-more ref="load" :pullDown="true" :pullUp="true" @pullDown="handlerPullDown"
                 @pullUp="handlerUpDown">
    <div class="home-contanier">
      <ul>
        <li v-for="item in imgs">
          <le-image :src="item.url"></le-image>
        </li>
      </ul>
    </div>
  </lee-load-more>
</template>

<script>
  import LeeLoadMore from "../../components/common/load/loadMore/loadMore";
  import leImage from '../../components/common/image/le-Image';
  export default {
    components: {
      LeeLoadMore,
      leImage
    },
    name: "musicHouse",
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
  .home {
    &-contanier{
      li {
        border: dashed 1px #07c160;
        img {
          display: block;
          width: 100%;
        }
      }
    }

  }
</style>
