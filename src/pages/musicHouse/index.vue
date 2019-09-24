<template>
  <lee-load-more ref="load" :pullDown="true" :pullUp="true" @pullDown="handlerPullDown"
                 @pullUp="handlerUpDown">
    <div class="contanier">
      <van-swipe :autoplay="2500" indicator-color="rgba(50,195,125,.75)">
        <van-swipe-item v-for="(item, index) in imgs" :key="index+100">
          <le-image :src="item.url"></le-image>
        </van-swipe-item>
      </van-swipe>
      <div class="contanier-content">
        <div class="contanier-content-sort">
          <ul>
            <li v-for="item in arr">
              <icon :size="0.65" :icon="item.icon" :fontColor="'#32c37d'"></icon>
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
        <div class="contanier-content-newSong">
          <div class="contanier-content-newSong-left">
            <le-image :src="require('../../assets/img/songs/T002R05.jpg')"></le-image>
          </div>
          <div class="contanier-content-newSong-right">
            <div class="contanier-content-newSong-right-item">
              <div class="contanier-content-newSong-right-item-text">
                <p>新歌新碟</p>
                <p>KARD黑泡风帅炸</p>
              </div>
              <div class="contanier-content-newSong-right-item-img">
                <le-image :src="require('../../assets/img/songs/T002R02.jpg')"></le-image>
              </div>
            </div>
            <div class="contanier-content-newSong-right-item">
              <div class="contanier-content-newSong-right-item-text">
                <p>数字专辑 - 票务</p>
                <p>JJ浪漫情歌来袭</p>
              </div>
              <div class="contanier-content-newSong-right-item-img">
                <le-image :src="require('../../assets/img/songs/T002R03.jpg')"></le-image>
              </div>
            </div>
          </div>
        </div>
        <div class="contanier-content-songsList">
          <div class="contanier-content-songsList-title">
            <p>为你推荐歌单</p>
            <div class="contanier-content-songsList-title-link">
              <icon :size="0.70" :fontColor="'#b4b4b4'" :icon="'icon-yuanfucengqianwanggoumai'"></icon>
            </div>
          </div>
          <ul>
            <li v-for="item in videos">
              <div class="img" :style="'background-image: url('+item.img+')'">
                <div class="img-left">
                  <icon :size="0.36" :fontColor="'#ffffff'" :icon="'icon-erji'"></icon>
                  <p>{{item.num}}万</p>
                </div>
                <icon :size="0.65" :fontColor="'#e2e2e2'" class="img-right" :icon="'icon-bofang1'"></icon>
              </div>
              <p class="title">{{item.title}}</p>
            </li>

          </ul>
        </div>
      </div>
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
            icon: 'icon-renxiang',
            name: '歌手'
          },
          {
            icon: 'icon-paixingbang',
            name: '排行'
          },
          {
            icon: 'icon-icon_category',
            name: '分类歌单'
          }, {
            icon: 'icon-mayi-diantai',
            name: '电台'
          },
          {
            icon: 'icon-huabankaobei-',
            name: '一起听'
          }
        ],
        videos: [
          {
            title: '今日推荐歌曲',
            img: require('../../assets/img/songs/T002R09.jpg'),
            num:10,
          },
          {
            title: '回忆身边，负了多少美人恩',
            img: require('../../assets/img/songs/T002R08.jpg'),
            num:25,
          },
          {
            title: '陌生人，你好：欢迎进入黑色孤独',
            img: require('../../assets/img/songs/T002R06.jpg'),
            num:15,
          },
          {
            title: '[80后记忆] 那些年少时光的话语经典',
            img: require('../../assets/img/songs/T002R10.jpg'),
            num:15,
          },
          {
            title: '回忆陪我躲在角落没露面',
            img: require('../../assets/img/songs/T002R07.jpg'),
            num:65,
          },
          {
            title: '民谣，四海为家，各安天下',
            img: require('../../assets/img/songs/T002R05.jpg'),
            num:60,
          }
        ],
      }
    },
    mounted() {
      this.$nextTick(() => {

      })
    },
    methods: {
      handlerPullDown() {
        setTimeout(() => {
          this.$refs.load.loadFinished()
        }, 300)
      },
      handlerUpDown() {
        setTimeout(() => {
          this.$refs.load.loadFinished()
        }, 300)
      },
    }
  }
</script>

<style lang="less" scoped>
  .contanier {
    /deep/ .van-swipe__indicators {
      bottom: 40px;
      .van-swipe__indicator {
        width: 0.18rem;
        height: 0.18rem;
      }
    }
    &-content {
      position: relative;
      background-color: #ffffff;
      padding-top: 135px;
      &-sort {
        background-color: #ffffff;
        position: absolute;
        top: -20px;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 96%;
        height: 135px;
        padding: 0 40px;
        box-shadow: 0 2px 10px 2px rgba(242, 243, 246, 0.75);
        ul {
          .flex('b');
          height: inherit;
          li {
            text-align: center;
            p {
              margin-top: 12px;
              font-size: 24px;
            }
          }
        }
      }
      &-newSong {
        .flex('center');
        height: 280px;
        &-left {
          width: 280px;
          margin-right: 30px;
        }
        &-right {
          width: 55%;
          height: inherit;
          &-item {
            background-color: rgb(245, 245, 245);
            padding-left: 24px;
            .flex('b');
            &-text {
              p {
                font-size: 30px;
              }
              p:nth-last-child(1) {
                margin-top: 14px;
                font-size: 22px;
                color: #898a8d;
              }
            }
            &-img {
              float: right;
              width: 132px;
              height: 132px;
            }
          }
          &-item:nth-last-child(1) {
            margin-top: 15px;
          }
        }
      }
      &-songsList {
        padding: 0 15px;
        &-title {
          position: relative;
          padding: 30px 0;
          p {
            text-align: center;
            font-size: 38px;
          }
          &-link {
            position: absolute;
            right: 8px;
            top: 30px;
          }
        }
        ul {
          .flex('center');
          flex-flow: row wrap;
        }
        li {
          width: 240px;
          height: 350px;
          .img {
            width: inherit;
            height: 240px;
            background-position: center;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            padding: 12px 12px;
            .flex('b');
            align-items: flex-end;
            &-left{
              .flex('center');
              height: 40px;
              p{
                color: #ffffff;
                margin-left: 6px;
                margin-top: 16px;
              }
            }
          }
          .title {
            margin-top: 20px;
            padding: 0 10px;
            font-size: 22px;
            color: #7d7e80;
          }
        }
      }
    }
  }
</style>
