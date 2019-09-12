<template>
  <div class="loadMore" :class="{'loadMore-anima':down}" ref="loadMore"
       :style="'transform:translate3d(0,'+moveY+'px,0)'">
    <pull-loading :open="open"></pull-loading>
    <slot></slot>
    <div class="loadMore-contanier">
      <ul>
        <li v-for="item in data">
          <le-image :src="item.url"></le-image>
        </li>
      </ul>
    </div>
    <img v-if="!down"  class="loadMore-bottom" src="../../image/icon/20130527034917143.gif"/>
  </div>
</template>

<script>
  import pullLoading from '../pullLoading'
  import LeImage from "../../image/le-Image";

  export default {
    name: "img-load-more",
    components: {
      LeImage,
      pullLoading
    },
    props: {
      pullDown: {
        type: Boolean,
        default: false,
      },
      pullUp: {
        type: Boolean,
        default: false,
      },
      data:{
        type:Array,
        default:[],
      }
    },
    data() {
      return {
        open: false,
        moveY: 0,
        down:true,
        set:null
      }
    },
    mounted() {
      this.$nextTick(() => {
        if (this.pullDown || this.pullup) {
          this.addLisens()
        }
      })
    },
    methods: {
      loadFinished(){
        this.open = false
        this.down = true
        this.moveY = 0
      },
      addLisens() {
        let that = this
        let y = 0;
        const el_par = this.$refs.loadMore
        el_par.addEventListener('touchstart', e => {
          y = e.changedTouches[0].clientY
        })
        el_par.addEventListener('touchmove', e => {
          //手指滑动时的位置
          let my = e.changedTouches[0].clientY
          //窗口滚动的距离以及窗口的高度
          let wsy = window.scrollY, wh = window.innerHeight
          //滚动容器的高度
          let rsh = el_par.clientHeight
          //下拉触发回调函数（比如下拉刷新等）
          if (my - y > 20 && window.scrollY <= 0) {
            that.open = true
          }
          //上拉加载更多回调函数
          if (rsh - wh <= wsy && that.down) {
            let numY = my - y, ty = 0
            //保证手指一动足够的距离
            if(numY>=-35) return
            //反之重复触发
            that.down = false
            function setT() {
              ty-=1
              that.moveY = ty
            }
            //颗粒化手指上拉dom移动效果
            this.set = setInterval(() => {
              if (ty > numY) {
                setT()
              } else {
                clearInterval(this.set)
              }
            }, 0.05)
          }
        })
        el_par.addEventListener('touchend',e=>{
          if(this.open){
            that.$emit('handlerPullDown')
          }
          if(!this.down){
            that.$emit('handlerUpDown')
          }
        })
      },
    }
  }
</script>

<style lang="less" scoped>
  .loadMore {
    position: relative;
    &-anima{
      transition: all 0.35s ease-in-out;
    }
    &-bottom{
      display: block;
      position: absolute;
      z-index: 5;
      bottom: -30px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
    li {
      border: dashed 1px #07c160;
      img {
        display: block;
        width: 100%;
      }
    }
  }
</style>
