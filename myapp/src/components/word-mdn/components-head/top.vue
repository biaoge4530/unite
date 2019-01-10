<template>
  <div class="top">
    <!-- 头部的上边 -->
    <mt-header class="top-top" fixed>
      <!-- 返回 -->
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
          <mt-button >返回</mt-button>
        </router-link>
        <mt-button slot="right">关注</mt-button>
         <mt-img slot="right"><i class="iconfont">&#xe612;</i></mt-img>
      </mt-header>
    </mt-header>
    <!-- 头部的左半部分 -->
    <div class="top-left">
      <div class="top-left-head" id="head"></div>
    </div>
    <!-- 头部的右边部分 -->
    <div class="top-right">
      <h2 id="top-right-scree_name">日常加薪</h2>
      <p class="top-right-personalized_signature">逮到一只佛系无签名手账</p>
      <ul class="top-right-popularity">
        <li>
          粉丝
          <span class="top-right-fans">111</span>
        </li>
        <li>
          喜欢
          <span class="top-right-like">111</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Header } from "mint-ui";
export default {
  components: {
    "header-com": Header
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
// 整体
.top {
  width: 100%;
  height: 4.16rem;
  background: #d2f5ee;
  //padding-top: .1rem;
// 头部
  .top-top {
    width: 90%;
    margin: 0 auto;
    height: 0.32rem;
    margin-top: 0.4rem;
    height: 0.35rem;
    line-height: o.35rem;
    background: #d2f5ee;
    color: #000;
  }
//  左边头像
  .top-left {
    height: 3.71rem;
    width: 2.6rem;
    float: left;
    position: relative;
    .top-left-head {
      width: 1.8rem;
      height: 1.8rem;
      background: #ddd;
      border-radius: 50%;
      position: absolute;
      left: 0.6rem;
      bottom: 0.1rem;
    }
  }
  //右边昵称和个签
  .top-right {
    height: 3.71rem;
    //昵称
    h2 {
      position: absolute;
      top: 2rem;
      left: 3rem;
    }
    //个签
    .top-right-personalized_signature {
      position: absolute;
      top: 2.7rem;
      left: 3rem;
      color: #948b8c;
      font-size: 0.23rem;
    }
    .top-right-popularity {
      position: absolute;
      top: 3.2rem;
      left: 3rem;
      width: 2.8rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.24rem;
      color: #5bc1ac;
      li:nth-child(1) {
        border-right: 1px solid #989a99;
        width: 1.4rem;
      }
      //粉丝
      .top-right-fans {
        margin-left: 0.15rem;
      }
      //喜欢
      .top-right-like {
        margin-left: 0.15rem;
      }
    }
  }
}
</style>


