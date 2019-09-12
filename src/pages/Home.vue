<template>
  <div class="home">
      <!--<canvas id="mountNode"></canvas>-->
      <img-load-more ref="load" :data="imgs" :pullDown="true" :pullUp="true" @handlerPullDown="handlerPullDown" @handlerUpDown="handlerUpDown">
        <header class="home-head">
          <icon :icon="'icon-home_shousuo_h_icon'" :size="1"></icon>
          <div class="home-head-center">
            <router-link v-for="(item,index) in tab" :key="index" :to="item.url" >{{item.name}}</router-link>
          </div>
          <icon :icon="'icon-tianjia-copy'" :size="1"></icon>
        </header>
      </img-load-more>
  </div>
</template>

<script>
    import LoadMore from "vux/src/components/load-more/index";
    import ImgLoadMore from "../components/common/load/loadMore/loadMore";

    export default {
      components: {
        ImgLoadMore,
        LoadMore},
      name: "index",
      data(){
        return{
          tab:[
            {
              name:'我的',
              url:'mine'
            },
            {
              name:'音乐馆',
              url:''
            },
            {
              name:'发现',
              url:''
            }
          ],
          imgs: [
            {
              url:require('../assets/img/banner/1680628.jpg'),
            },
            {
              url:require('../assets/img/banner/1688839.jpg'),
            },
            {
              url:require('../assets/img/banner/1688993.jpg'),
            },
            {
              url:require('../assets/img/banner/1689026.jpg'),
            },
          ],
          arr:[
            {
              url:require('../assets/img/banner/1680628.jpg'),
            },
            {
              url:require('../assets/img/banner/1688839.jpg'),
            },
            {
              url:require('../assets/img/banner/1688993.jpg'),
            },
            {
              url:require('../assets/img/banner/1689026.jpg'),
            },
          ],
        }
      },
      mounted(){
        this.$nextTick(()=>{
          // this.initView()
        })
      },
      methods:{
        handlerPullDown(){
          let that = this
          setTimeout(()=>{
            this.imgs = [...that.arr]
            this.$refs.load.loadFinished()
          },500)
        },
        handlerUpDown(){
          let that = this
          setTimeout(()=>{
            this.imgs.push(...that.arr)
            this.$refs.load.loadFinished()
          },500)
        },
        initView(){
          var data = [{
            time: '2016-08-08 00:00:00',
            tem: 10
          }, {
            time: '2016-08-08 00:10:00',
            tem: 22
          }, {
            time: '2016-08-08 00:30:00',
            tem: 16
          }, {
            time: '2016-08-09 00:35:00',
            tem: 26
          }, {
            time: '2016-08-09 01:00:00',
            tem: 12
          }, {
            time: '2016-08-09 01:20:00',
            tem: 26
          }, {
            time: '2016-08-10 01:40:00',
            tem: 18
          }, {
            time: '2016-08-10 02:00:00',
            tem: 26
          }, {
            time: '2016-08-10 02:20:00',
            tem: 12
          }];
          var chart = new this.$F2.Chart({
            id: 'mountNode',
            pixelRatio: window.devicePixelRatio
          });
          chart.source(data, {
            time: {
              type: 'timeCat',
              tickCount: 3,
              range: [0, 1]
            },
            tem: {
              tickCount: 5,
              min: 0
            }
          });

          chart.axis('time', {
            label: function label(text, index, total) {
              var textCfg = {};
              if (index === 0) {
                textCfg.textAlign = 'left';
              } else if (index === total - 1) {
                textCfg.textAlign = 'right';
              }
              return textCfg;
            }
          });
          chart.tooltip({
            showCrosshairs: true
          });

          chart.area().position('time*tem').color('l(90) 0:#1890FF 1:#f7f7f7').shape('smooth');
          chart.line().position('time*tem').color('l(90) 0:#1890FF 1:#f7f7f7').shape('smooth');
          chart.render();
        },
      }
    }
</script>

<style lang="less" scoped>
.home{
  width: 100%;
  &-head{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: #32c37d;
    color: #ffffff;
    &-center{
      .flex('b');
      font-size: 32px;
    }
  }
}
</style>
