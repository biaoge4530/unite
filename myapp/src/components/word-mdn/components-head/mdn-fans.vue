<template>
<!-- 导航 -->
  <div class="fans-body">
    <div class="fans-nav-father">
      <mt-header fixed title="111个粉丝" class="fans-nav">
        <router-link to="word-mdn" slot="left">
          <mt-button class="back"><img src="static/img/word-mdn/fanhui.png"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <!-- 内容 -->
    <div class="wrapper" ref="homeWrapper">
      <ul class="content">
        <li class="list" v-for="(item,index) in nav" :key="index">
          <div class="list-head">
            <img :src="item.url" alt>
            <p class="list-name" :name="item.name">{{item.name}}</p>
            <p class="atte">+  关注</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Header } from "mint-ui";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      nav:[
        {url:'../../../../static/img/word-mdn/touxiang_sy@3x.png',name:'昵称'},
        {url:'../../../../static/img/word-mdn/touxiang_sy@3x.png',name:'昵称'},
        {url:'../../../../static/img/word-mdn/touxiang_sy@3x.png',name:'昵称'},
        {url:'../../../../static/img/word-mdn/touxiang_sy@3x.png',name:'昵称'},
        {url:'../../../../static/img/word-mdn/touxiang_sy@3x.png',name:'昵称'},
        {url:'../../../../static/img/word-mdn/touxiang_sy@3x.png',name:'昵称'},
        {url:'../../../../static/img/word-mdn/touxiang_sy@3x.png',name:'昵称'},
        {url:'../../../../static/img/word-mdn/touxiang_sy@3x.png',name:'昵称'},
        {url:'../../../../static/img/word-mdn/touxiang_sy@3x.png',name:'昵称'},
        {url:'../../../../static/img/word-mdn/touxiang_sy@3x.png',name:'昵称'},
        {url:'../../../../static/img/word-mdn/touxiang_sy@3x.png',name:'昵称'},
        {url:'../../../../static/img/word-mdn/touxiang_sy@3x.png',name:'昵称'},
       
      ]
      
    };
  },
  components: {
    "Header-com": Header
  },
  methods: {

  },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    this.scroll = new BScroll(this.$refs.homeWrapper, {
      //只有设置成true pullingUp才能使用
      pullUpLoad: true,
      click:true
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
html,
body {
  background: #f3f3f3;
}
li {
  list-style: none;
}
.fans-body {
  background: #f3f3f3;
  height: 13.34rem;
  .fans-nav-father {
    height: 1.23rem;
    background: #f3f3f3;
    .fans-nav {
      padding-top: 0.6rem;
      // width: 95%;
      height: 1.2rem;
      font-size: 0.34rem;
      margin: 0 auto;
      background: #ffffff;
      color: #787878;
      .back {
        margin-left: .24rem;
        &>img{
          width: .21rem;
          height: .35rem;
        }
      }
    }
  }
}

.wrapper {
  height: 12.1rem;
  .content {
    background: #f3f3f3;
    .list {
      margin-top: 0.02rem;
      height: 1.56rem;
      background: #ffffff;
      width: 100%;
      position: relative;
      .list-head{
        width: 1.16rem;
        height: 1.16rem;
        position: absolute;
        left:.25rem;
        top:.15rem;
        &>img{
          width: 1.16rem;
          height: 1.16rem;
        }
        .list-name{
          width: .56rem;
          font-size: .28rem;
          position: absolute;
          left: 1.42rem;
          top: .5rem;
        }
        .atte{
           position: absolute;
           top: .55rem;
           left: 6.2rem;
           width: 1rem;
           //background: #f3f3f3;
           font-size: .24rem;
           color: #222222;
        }
      }
    }
  }
}
</style>
