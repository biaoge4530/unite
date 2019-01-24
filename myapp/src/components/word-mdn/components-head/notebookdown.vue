<template>
  <div class="notebookdown">
    <!-- 导航 -->
    <mt-header fixed title="昵称" class="notebookdown-nav">
      <router-link to="word-mdn" slot="left">
        <mt-button><p class="tu"><img src="static/img/word-mdn/fanhui.png"></p></mt-button>
      </router-link>
    </mt-header>
    <!--手账内容 -->
    <div class="wrapper" ref="homeWrapper">
      <div class="content">
        <div class="warp">
          <div class="notebook-content">
            <div class="notebook" v-for="(item,index) in nav">
              <img :src="item.url">
              <p class="notebook-page" :name="item.page">{{item.page}}</p>
              <p class="notebook-num" :num="item.num">{{item.num}}</p>
            </div>
          </div>
          <!-- 类别 -->
          <div class="genre" v-for="(item,index) in nav">{{item.genre}}</div>
        </div>
        <!-- 好友 -->
        <div class="firend">
          <div class="firend_head">
            <img src="static/img/word-mdn/touxiang_sy@3x.png">
            <p class="firend_name">昵称</p>
            <p class="firend_atte" @click>+关注</p>
          </div>
        </div>
        <!-- 评论 -->
        <p class="All">全部评论</p>
        <div class="all_comment"></div>
        <div class="all_comment"></div>
        <div class="all_comment"></div>
        <div class="all_comment"></div>
      </div>
    </div>
    <!-- 分享 -->
    <div class="foot">
      <ul class="more">
        <li>
          <i class="iconfont">&#xe617;</i>
        </li>
        <li>
          <i class="iconfont">&#xe61e;</i>
        </li>
      </ul>
      <!-- 查看 -->
      <div class="look">查看</div>
    </div>
  </div>
</template>

<script>
import { Header } from "mint-ui";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      nav: [
        {
          url: "../../../../static/img/word-mdn/tu1@2x.png",
          page: "/手账篇数/",
          num: "12",
          genre: "手账名称"
        }
      ]
    };
  },
  components: {
    "Header-com": Header
  },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    this.scroll = new BScroll(this.$refs.homeWrapper, {
      //只有设置成true pullingUp才能使用
      pullUpLoad: true,
      click: true
    });
   //console.log(this.scroll);
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.notebookdown {
  width: 100%;
  height: auto;
  background: #f3f3f3;
  .notebookdown-nav {
    padding-top: 0.6rem;
    // width: 95%;
    height: 1.01rem;
    font-size: 0.34rem;
    margin: 0 auto;
    background: #ffffff;
    color: #787878;
      .tu{
        margin-left: 0.24rem;
        width: 0.17rem;
        height: 0.28rem;
        &>img{
          width: 0.17rem;
        height: 0.28rem;
        
      }
    }
  }

  // 外围 手账内容
  .wrapper {
    margin-top: 1.01rem;
    height: 11.33rem;
    .content {
      .warp {
        height: 7.2rem;
        width: 100%;
        background: #ffffff;
        position: relative;
        .notebook-content {
          width: 4.74rem;
          height: 6.28rem;
          //background: skyblue;
          position: absolute;
          left: 1.38rem;
          top: 0.33rem;
          .notebook {
            width: 4.29rem;
            height: 5.83rem;
            position: absolute;
            text-align: center;
            top: 0.15rem;
            left: 0.225rem;
            background: #fff;
            box-shadow: 0.05rem 0.05rem 0.2rem #eeeeee;
            border-radius: 0.08rem;
            & > img {
              width: 3.5rem;
              height: 3.67rem;
              margin: 0.3rem 0.3rem 0.6rem 0.4rem;
            }
            & > p {
              height: 0.4rem;
              line-height: 0.4rem;
              color: #616161;
              font-size: 0.24rem;
            }
          }
        }
        .genre {
          color: #949494;
          font-size: 0.26rem;
          width: 100%;
          height: 0.66rem;
          line-height: 0.66rem;
          position: absolute;
          top: 6.57rem;
          left: 3.2rem;
        }
      }
      // 好友
      .firend {
        height: 1.53rem;
        width: 7.5rem;
        background: #ffffff;
        position: relative;
        padding: 0.1rem 0 0.26rem 0.25rem;
        margin-top: 0.02rem;
        .firend_head {
          width: 1.16rem;
          height: 1.16rem;
          //background: plum;
          & > img {
            width: 1.16rem;
            height: 1.16rem;
          }
          .firend_name {
            position: absolute;
            left: 1.62rem;
            top: 0.61rem;
          }
          .firend_atte {
            position: absolute;
            left: 6.56rem;
            top: 0.61rem;
          }
        }
      }
      // 全部评论
      .All {
        font-size: 0.18rem;
        color: #9a9b9b;
        margin: 0.13rem 0 0.13rem 0.24rem;
      }
      .all_comment {
        height: 1.56rem;
        background: #ffffff;
        margin-bottom: 0.02rem;
      }
    }
  }
  // foot
  .foot {
    border-top: .01rem solid #d9d9d9;
    height: 0.98rem;
    width: 100%;
    //background: #ffccee;
    position: fixed;
    top: 12.34rem;
    .more{
      width: 1.8rem;
      height: .98rem;
      display: flex;
     // background: red;
      justify-content: space-around;
      &>li{
        height: .98rem;       
        line-height: .98rem;
        .iconfont{
          font-size: .36rem;
        }
      }
    }
    // 查看
    .look{
      width: 1.15rem;
      height: .46rem;
      line-height: .46rem;
      color: #868686;
      font-size: .22rem;
      text-align: center;
      background: #fff;
      border-radius: .08rem;
      border: .01rem solid #d9d9d9;
      position: absolute;
      top:.26rem;
      right: .26rem; 
    }
  }
}
</style>
