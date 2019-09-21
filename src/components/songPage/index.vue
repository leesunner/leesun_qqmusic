<template>
  <div class="songPage">
    <div>
      <div class="songPage-head">
        <van-nav-bar title="本地音乐">
          <van-icon class-prefix="iconfont icon-xiala-" @click="close" slot="left"/>
          <van-icon class-prefix="iconfont icon-diandiandianshu" slot="right"/>
        </van-nav-bar>
      </div>
      <p class="songPage-singer">— {{$store.state.songInfo.singer}} —</p>
      <div class="songPage-choose">
        <div>M V</div>
        <div>音效 on</div>
      </div>
      <div class="songPage-img">
        <div class="songPage-img-tran"
             :style="'background-image: url('+$store.state.songInfo.img+');transform:rotateZ('+$store.state.playRotate+'deg);'">
        </div>
      </div>
      <p>显示- {{$store.state.songInfo.songName}} -歌词</p>
    </div>

  </div>
</template>

<script>
  export default {
    name: "song",
    data() {
      return {}
    },
    methods:{
      close(){
        this.$store.commit('setShowSongPage',false)
      },
    }
  }
</script>

<style lang="less" scoped>
.songPage{
  background: linear-gradient(#555448, #090909);
  height: 100%;
  color: #ffffff;
  &-head {
    padding: @head;
    /deep/ .van-nav-bar {
      border-color: transparent;
      background-color: transparent;
      div {
        font-size: 36px;
        i {
          font-size: 0.53rem;
        }
      }
    }
    /deep/.van-nav-bar__title{
      color: #ffffff;
    }
  }
  &-singer{
   text-align: center;
  }
  &-choose{
    .flex('center');
    margin: 30px auto;
    div{
      border: solid 2px #ffffff;
      padding: 2px 8px;
      font-size: 22px;
    }
    div:nth-child(1){
      margin-right: 14px;
    }
  }
  &-img{
    height: 48%;
    padding: 1% 12px;
    &-tran{
      width: 720px;
      height: 720px;
      border-radius: 50%;
      .bgi();
    }
  }
  [class*=van-hairline]::after{
    border: none;
  }
}
</style>
