<template>
  <div class="local">
    <div class="local-head">
      <van-nav-bar title="本地音乐">
        <van-icon class-prefix="iconfont icon-flow" slot="left" @click="$router.go(-1)"/>
        <van-icon class-prefix="iconfont icon-diandiandianshu" slot="right"/>
      </van-nav-bar>
      <van-tabs title-inactive-color="#cdcdcd" title-active-color="#32c37d" color="#32c37d" line-width="56"
                line-height="6">
        <van-tab v-for="(item,index) in nameList" :key="index+100" :title="`${item} `+$store.state.songList.length">
        </van-tab>
      </van-tabs>
    </div>
    <div class="local-content">
      <van-index-bar>
        <div v-for="item in songs" :class="['local-content-item',item.url==$store.state.songInfo.url?'local-content-itemColor':'']" @click="playChoose(item)">
          <van-cell :title="item.songName">
            <div>
              <van-icon class-prefix="iconfont icon-xuanzhong" color="#32c37d"/>
              <van-icon class-prefix="iconfont icon-hq-line " color="#32c37d"/>
              <span class="name">{{`${item.singer} - ${item.albumName}`}}</span>
            </div>
          </van-cell>
        </div>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
  export default {
    name: "localhost-music",
    data() {
      return {
        nameList: ['歌曲', '歌手', '专辑', '文件夹'],
        songs: this.$store.getters.getSonsList,
      }
    },
    methods: {
      playChoose(item) {
        this.$store.commit('setSonsInfo', item)
      },
    }
  }
</script>

<style lang="less" scoped>
  .local {
    &-head {
      padding: @head;
      /deep/ .van-nav-bar {
        margin-bottom: 48px;
        border-color: transparent !important;
        div {
          font-size: 36px;
          i {
            font-size: 0.53rem;
          }
        }
      }
    }
    &-content {
      position: relative;
      &-item {
        /deep/ .van-cell {
          font-size: 36px;
          display: block;
          padding: 0 60px;
          .van-cell__value {
            text-align: left;
            margin-top: 10px;
            font-size: 26px;
            padding-bottom: 12px;
            border-bottom: solid 2px #ebedf0;
            i {
              font-size: 26px;
            }
            i:nth-child(2) {
              transform: scaleX(3);
            }
          }
        }
        .name{
          color: #a9a9ab;
        }
      }
      &-itemColor{
        /deep/.van-cell{
          color: #32c37d;
        }
        .name{
          color: #32c37d;
        }
      }
      /deep/ .van-index-bar__sidebar {
        background-color: #ebedf0;
        height: 100%;
        top: 61.5%;
        padding-top: 50px;
        box-sizing: border-box;
        .van-index-bar__index {
          line-height: 36px;
          font-size: 24px;
        }
      }
    }
    /deep/ .van-ellipsis {
      font-size: 34px;
    }
    /deep/ .van-tabs__wrap {
      height: 62px;
      border-bottom: solid 2px #ebedf0;
    }
    /deep/ [class*=van-hairline]::after {
      border: none;
    }
  }
</style>
