<template>
  <!-- 导航 -->
  <div class="fans-body">
    <div class="fans-nav-father">
      <mt-header fixed title="111个粉丝" class="fans-nav">
        <router-link to="word-mdn" slot="left">
          <mt-button>
            <p class="tu">
              <img src="static/img/word-mdn/fanhui.png">
            </p>
          </mt-button>
        </router-link>
      </mt-header>
    </div>
    <!-- 内容 -->
    <div class="wrapper" ref="homeWrapper">
      <ul class="content">
        <li class="list" v-for="(item,index) in users" :key="index">
          <div class="list-head">
            <img :src="item.image" alt />
            <p class="list-name">{{item.name}}</p>
            <p class="atte">{{item.attr==0 ? "已关注":"+关注"}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Header } from "mint-ui";
import BScroll from "better-scroll";
import axios from "axios";
export default {
  data() {
    return {
        users: [] 
    };
  },
  components: {
    "Header-com": Header
  },
  created() {
    //粉丝接口
    axios({
      method:"get",
      url:"https://www.easy-mock.com/mock/5c370dd7f93efc493ce9c7a5/example/fans",
      headers:{"Content-type":"application/json"},
    })
    .then((data)=>{
      //console.log(data);
       this.users=data.data.imglist;
    })
     timeout:3000
  },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    this.scroll = new BScroll(this.$refs.homeWrapper, {
      //只有设置成true pullingUp才能使用
      pullUpLoad: true,
      click:true
    });
    //console.log(this.scroll);   
  },
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
    .tu {
      width: 0.21rem;
      height: 0.35rem;
      margin-left: 0.24rem;
      & > img {
        width: 0.17rem;
        height: 0.28rem;
      }
    }
    .fans-nav {
      padding-top: 0.6rem;
      // width: 95%;
      height: 1.2rem;
      font-size: 0.34rem;
      margin: 0 auto;
      background: #ffffff;
      color: #787878;
      .back {
        margin-left: 0.24rem;
        & > img {
          width: 0.21rem;
          height: 0.35rem;
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
      .list-head {
        width: 1.16rem;
        height: 1.16rem;
        position: absolute;
        left: 0.25rem;
        top: 0.15rem;
        & > img {
          width: 1.16rem;
          height: 1.16rem;
        }
        .list-name {
          width: 1rem;
          font-size: 0.28rem;
          position: absolute;
          left: 1.42rem;
          top: 0.5rem;
        }
        .atte {
          position: absolute;
          top: 0.55rem;
          left: 6.2rem;
          width: 1rem;
          //background: #f3f3f3;
          font-size: 0.24rem;
          color: #222222;
        }
      }
    }
  }
}
</style>
