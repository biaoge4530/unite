<template>
  <div class="wrapper" ref="homeWrapper">
    <div class="content">
    <div class="hot">
      <!-- 内容区左边的头像 -->
      <div class="hot-left">
        <div class="hot-left-head" id="hot-left-head">
          <img src="static/img/word-mdn/touxiang_sy@3x.png">
        </div>
      </div>
      <!-- 内容区右边的详情 -->
      <div class="hot-right">
        <!-- 昵称 -->
        <p class="hot-right-petName" id="hot-right-petName">昵称</p>
        <!-- 个签 -->
        <p class="hot-right-content" id="hot-right-content">
          内容：我是谁？我在那？我是谁？我在那？
          我是谁？我在那？我是谁？
        </p>

        <!-- 动态里好友头像 -->
        <div class="hot-right-img">
          <img src="static/img/word-mdn/tp_sy.png">
        </div>
        <!-- 阅读量 -->
        <div class="hot-right-read">
          <div class="read">阅读量:
            <span>999+</span>
            <br>
            <span class="time">2018年1月2号</span>
          </div>
          <!-- 点赞图标 -->
          <ul class="giv_a_like">
            <li>
              <i class="iconfont">&#xe601;</i>
            </li>
            <li>
              <i class="iconfont">&#xe617;</i>
            </li>
            <li>
              <i class="iconfont">&#xe61e;</i>
            </li>
          </ul>
        </div>
        <!-- 评论 -->
        <div class="hot-right-img-comment">昵称：
          <span>今天天气好晴朗，处处好风光</span>
        </div>
        <div class="hot-right-img-comment">昵称：
          <span>怎么做的呀？</span>
        </div>
        <div class="look-comment" id="look-comment">共
          <span>10</span>条记录>
          <br>
        </div>
      </div>
    </div>
   <div>

    <div class="hot">
     <!-- 内容区左边的头像 -->
      <div class="hot-left">
        <div class="hot-left-head">
          <img src="static/img/word-mdn/touxiang_sy@3x.png">
        </div>
      </div>
      <!-- 内容区右边的详情 -->
      <div class="hot-right">
        <!-- 昵称 -->
        <p class="hot-right-petName" >昵称</p>
        <!-- 个签 -->
        <p class="hot-right-content" >
          内容：我是谁？我在那？我是谁？我在那？
          我是谁？我在那？我是谁？
        </p>

        <!-- 动态里的手账-->
        <div class="hot-right-img">
          <img src="static/img/word-mdn/tp_sy.png">
        </div>
        <!-- 阅读量 -->
        <div class="hot-right-read">
          <div class="read">阅读量:
            <span>999+</span>
            <br>
            <span class="time">2018年1月2号</span>
          </div>
          <!-- 点赞图标 -->
          <ul class="giv_a_like">
            <li>
              <i class="iconfont">&#xe601;</i>
            </li>
            <li>
              <i class="iconfont">&#xe617;</i>
            </li>
            <li>
              <i class="iconfont">&#xe61e;</i>
            </li>
          </ul>
        </div>
        <!-- 评论 -->
        <div class="hot-right-img-comment">昵称：
          <span>今天天气好晴朗，处处好风光</span>
        </div>
        <div class="hot-right-img-comment">昵称：
          <span>怎么做的呀？</span>
        </div>
        <div class="look-comment" id="look-comment">共
          <span>10</span>条记录>
          <br>
        </div>
      </div>
    </div>
    </div>
    
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  data(){
    return{
        
    }
  },
  components: {
    //"BSscroll-com":BSscroll
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
li {
  list-style: none;
}
img {
  vertical-align: middle;
}
// 整体部分
.wrapper {
  width:100%;
  height:8.23rem;
  overflow:hidden; 
  .content{
     width: 90%;
     height: auto;
    .hot {
    width: 90%;
    height: 100%;
    min-width: 6.75rem;
    margin:0 0 .2rem 0.4rem;
    display: flex;
    
    //   左边头像
    .hot-left {
      min-height: 1rem;
      //  background: #cdcdcd;
      width: 23%;
      // 头像
      .hot-left-head {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: #cccccc;
        margin-left: 0.4rem;
        & > img {
          width: 0.8rem;
          height: 0.8rem;
        }
      }
    }
    //  右边内容
    .hot-right {
      height: auto;
      width: 77%;
      // 昵称
      .hot-right-petName {
        height: 0.56rem;
        line-height: 0.56rem;
        font-size: 0.3rem;
      }
      // 内容
      .hot-right-content {
        color: #888888;
        font-size: 0.24rem;
        min-height: 0.65rem;
        line-height: 0.33rem;
        height: auto;
      }
      // 图片
      .hot-right-img {
        margin: 0.2rem 0 0.2rem 0;
        width: 2.6rem;
        height: 3.89rem;
        & > img {
          width: 2.6rem;
          height: 3.89rem;
        }
      }
      // 阅读量
      .hot-right-read {
        height: 0.6rem;
        line-height: 0.3rem;
        display: flex;
        justify-content: space-between;
        .read {
          width: 1.59rem;
          color: #838383;
          font-size: 0.18rem;
        }
        // 点赞
        .giv_a_like {
          width: 2.64rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          & > li i {
            font-size: 0.34rem;
          }
        }
      }
      //评论
      .hot-right-img-comment {
        font-size: 0.26rem;
        color: #76d1c0;
        height: 0.5rem;
        line-height: 0.5rem;
        & > span {
          color: #616161;
        }
      }
      .look-comment {
        font-size: 0.22rem;
        color: #868686;
      }
    }
  }
  }
}
</style>

