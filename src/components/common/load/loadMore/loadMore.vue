<template>
  <div class="loadMoreBox" ref="loadMoreBox">
    <div class="loadMore" :class="moveY?'loadMoreT':''" ref="loadMore" :style="moveY?'transform: translate3d(0,'+showYheight+'px,0)':''">
      <pull-loading :open="open"></pull-loading>
      <slot></slot>
    </div>
    <img v-if="moveY" class="loadMore-bottom" src="../../image/icon/20130527034917143.gif"/>
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
    },
    data() {
      return {
        open: false,
        moveY: false,
        constY:55,
        showYheight:0,
      }
    },
    mounted() {
      this.$nextTick(() => {
        if (this.pullDown || this.pullUp) {
          this.addLisens()
        }
      })
    },
    methods: {
      loadFinished() {
        this.open = false
        this.moveY = false
        this.showYheight = 0
      },
      //颗粒度滑动距离
      easeY(moveY){
        const headHeight = this.constY;
        const y = Math.round(moveY < headHeight ? 1+moveY/3 : moveY < headHeight * 2 ? headHeight + (moveY - headHeight) / 2 : headHeight * 1.5 + (moveY - headHeight * 2) / 4);
        return y
      },
      getTouchs(e,_el){
        //手指滑动时的位置
        const my = e.changedTouches[0].clientY,mx = e.changedTouches[0].clientX;
        //窗口滚动的距离以及窗口的高度
        const box = this.$refs.loadMoreBox
        const wsy = box.scrollTop, wh = box.scrollHeight
        //滚动容器的高度
        const rsh = _el.clientHeight
        return {
          my:my,
          mx:mx,
          wsy:wsy,
          wh:wh,
          rsh:rsh,
        }
      },
      //施加监听
      addLisens() {
        let y = 0,x = 0;
        const el_par = this.$refs.loadMore
        el_par.addEventListener('touchstart', e => {
          y = e.changedTouches[0].clientY;
          x = e.changedTouches[0].clientX;
        })
        el_par.addEventListener('touchmove', e => {
          const Hobj = this.getTouchs(e,el_par)
          let numY = Hobj.my - y
          //触顶下拉触发条件
          if (numY > this.constY && Hobj.wsy <= 0 && Math.abs(Hobj.mx-x) < this.constY ) {
            this.open = true
          }
          //触底上拉加载更多触发条件
          if (Hobj.rsh - Hobj.wh <= Hobj.wsy && numY<(-this.constY/2 )&& Math.abs(Hobj.mx-x) < this.constY ) {
            e.preventDefault()
            this.moveY = true
          }
          numY<0?this.showYheight = (- this.easeY(Math.abs(numY))):''
        })
        el_par.addEventListener('touchend', e => {
          const Hobj = this.getTouchs(e,el_par)
          //下拉触发回调函数（比如下拉刷新等）
          if (this.open) {
            this.$emit('handlerPullDown')
          }
          //上拉加载更多回调函数
          if (this.moveY ) {
            this.$emit('handlerUpDown', Hobj.wsy)
          }
        })
      },
    }
  }
</script>

<style lang="less" scoped>
  .loadMoreBox{
    position: relative;
    height: inherit;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .loadMoreT{
    transition:none!important;
  }
  .loadMore {
    position: relative;
    overflow: hidden;
    transition: all 0.35s ease-in-out;
    &-bottom {
      display: block;
      position: absolute;
      bottom: 100px;
      left: 0;
      right: 0;
      margin: 10px auto;
      height: 30px;
    }
    .pullDefault {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      margin: 0 auto;
      transition: all 0.35s ease;
      opacity: 0;
      z-index: 999;
      transform: translate3d(0, -60px, 0);
    }
    .pullShow {
      opacity: 1;
      transform: translate3d(0, 40px, 0);
    }
  }
</style>
