<template>
  <div class="mine">
      <img-load-more ref="load" :data="musicData" :pullDown="true" :pullUp="true" @handlerPullDown="handlerPullDown"
                     @handlerUpDown="handlerUpDown">
        <div class="mine-user">
          <van-row type="flex" justify="center">
            <div class="mine-userImg" :class="login?'mine-userImg-img':''">
              <icon v-if="!login" :icon="'icon-touxiang1'" :size="0.85333" :fontColor="'rgb(125, 204, 165)'"></icon>
            </div>
            <p v-if="!login">立即登录享专属推荐</p>
            <p v-if="login">李平平</p>
            <div v-if="login">
              <img src="../../assets/img/easyicon.png" />
              <img src="../../assets/img/easyicon.png" />
            </div>
          </van-row>
          <div class="mine-user-itemInfo">
            <van-row type="flex" justify="center" align="center">
              <div class="mine-user-item">
                <div class="mine-user-item-icon">
                  <icon :icon="'icon-huodongfabu'" :size="0.4" :fontColor="'#BCBCBC'"></icon>
                  <span>活动中心</span>
                </div>
                <p>点击查看听歌音乐时长</p>
              </div>
              <div class="mine-user-line"></div>
              <div class="mine-user-item">
                <div class="mine-user-item-icon">
                  <icon :icon="'icon-vip'" :size="0.4" :fontColor="'#BCBCBC'"></icon>
                  <span>会员中心</span>
                </div>
                <p>大片电影票放送中</p>
              </div>
            </van-row>
          </div>
        </div>
        <div class="mine-user-menu">
          <div v-for="item in iconData" class="mine-user-menu-item">
            <icon :icon="item.icon" :size="0.7" :fontColor="'#32c37d'"></icon>
            <p class="title">{{item.name}}</p>
            <p class="number">{{item.num}}</p>
          </div>
        </div>
        <div class="mine-user-tab">
          <div class="mine-user-tab-title">
            <p v-for="item in tabDate">{{item.name}}</p>
          </div>
          <div class="mine-user-tab-listNum">
            <p>{{`${songNum}个歌单`}}</p>
            <icon :icon="'icon-liebiao5'" :size="0.55" :fontColor="'#2a2a2a'"></icon>
          </div>
          <!--<div class="mine-user-tab-listNum">-->
            <!---->
          <!--</div>-->
        </div>
      </img-load-more>
  </div>
</template>

<script>
  import ImgLoadMore from "../../components/common/load/loadMore/loadMore";
  import HeadCompnent from "../../components/common/header/appHeader";
  export default {
    components: {
      ImgLoadMore,
      HeadCompnent,
    },
    name: "mine",
    data() {
      return {
        musicData: [],
        arr: [],
        login:false,
        songNum:0,
        tabDate:[
          {
            name:'自建歌单',
            key:'self',
          },
          {
            name:'收藏歌单',
            key:'collection',
          }
        ],
        iconData:[
          {
            icon:'icon-yinle',
            name:'本地音乐',
            num:58
          },
          {
            icon:'icon-xinbaniconshangchuan-',
            name:'下载音乐',
            num:18
          },
          {
            icon:'icon-shizhong',
            name:'最近播放',
            num:101
          },
          {
            icon:'icon-xihuan',
            name:'我喜欢',
            num:''
          },
          {
            icon:'icon-beijingyinle-',
            name:'已购音乐',
            num:''
          },
          {
            icon:'icon-yundong',
            name:'跑步电台',
            num:''
          },
        ],
      }
    },
    mounted() {

    },
    methods: {
      handlerPullDown() {
        let that = this
        setTimeout(() => {
          this.musicData = [...that.arr]
          this.$refs.load.loadFinished()
        }, 300)
      },
      handlerUpDown() {
        let that = this
        setTimeout(() => {
          this.musicData.push(...that.arr)
          this.$refs.load.loadFinished()
        }, 300)
      },
    }
  }
</script>

<style lang="less" scoped>
  .mine {
    width: 100%;
    position: relative;
    &-user{
      background-color: #ffffff;
      padding: 44px 0 30px 0;
      box-shadow: 0 2px 10px 2px rgba(242,243,246,0.75);
      &-itemInfo{
        margin-top: 44px;
      }
      p{
        line-height: 64px;
        font-size: 34px;
        margin: 0 10px;
      }
      &-item{
        text-align: center;
        &-icon{
          span{
            font-size: 28px;
            margin-left: 4px;
          }
        }
        p{
          font-size: 24px;
          color: #cecfd2;
        }
      }
      &-line{
        width: 2px;
        height: 40px;
        background-color: #cecfd2;
        margin: 0 11%;
      }
      &-menu{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: wrap row;
        padding: 64px 0;
        &-item{
          width: 15%;
          margin: 0 9%;
          text-align: center;
          .title{
            font-size: 28px;
            margin: 10px 0;
          }
          .number{
            font-size: 24px;
            color: #cecfd2;
          }
        }
        &-item:nth-child(1){
          margin-bottom: 60px;
        }
        &-item:nth-child(2){
          margin-bottom: 60px;
        }
        &-item:nth-child(3){
          margin-bottom: 60px;
        }
      }
      &-tab{
        color: #2a2a2a;
        &-title{
          margin-bottom: 30px;
          .flex('center');
          p{
            font-size: 28px;
            padding: 0 46px;
          }
          p:nth-child(1){
            border-right: solid 2px #2a2a2a;
          }
        }
        &-listNum{
          padding: 0 30px;
          font-size: 24px;
          .flex('b');
        }
      }

    }
    &-userImg{
      width: 64px;
      height: 64px;
      background-position: center!important;
      background-size: 100% 100%!important;
      border-radius: 50%;
      text-align: center;
      background-color: #ceecde;
      &-img{
        background: url("../../assets/img/64.jpg") no-repeat;
      }
    }
  }
</style>
