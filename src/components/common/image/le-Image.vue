<template>
  <div class="le-image">
    <img class="le-image-img" v-if="showControl" ref="image"/>
    <slot v-else>
      <p>图片加载失败</p>
    </slot>
  </div>
</template>

<script>
  export default {
    name: "le-image",
    props: {
      src: {
        type: String,
        default: ''
      },
      DIY: {//用来开启自定义icon
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        showControl: true,
        url: require('./icon/20140524124246402.gif'),
      }
    },
    created() {
      this.$nextTick(() => {
        if (this.DIY) {
          this.isDiy()
        }
        this.lazyImage().setSrc(this.src)
      })
    },
    methods: {
      isDiy() {
        if (!(this.$attrs['icon'] == undefined || this.$attrs['icon'] == '')) {
          this.url = this.$attrs['icon']
        } else {
          console.warn('开启自定义加载图标后，必须传递icon属性')
        }
      },
      //处理图片加载
      setSrc(src) {
        const i = this.$refs.image
        i.src = src
      },
      //代理进行懒加载
      lazyImage() {
        const that = this
        const img = new Image()
        img.onload = function () {
          that.setSrc(this.src)
          const i = that.$refs.image
          i.style.width = '100%'
        }
        img.onerror = function () {
          that.showControl = false
        }
        return {
          setSrc: function (src) {
            that.setSrc(that.url)
            img.src = src;
          }
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .le-image {
    width: 100%;
    position: relative;
    &-img {
      display: block;
      width: 60px;
      margin: 0 auto;
    }
  }
</style>
