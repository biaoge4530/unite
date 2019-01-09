<template>
  <div class="hot">
    <!-- 内容区左边的头像 -->
    <div class="hot-left">
      <div class="hot-left-head" id="hot-left-head">
           <img src="static/img/word-mdn/touxiang_sy@3x.png" />
      </div>
    </div>
    <!-- 内容区右边的详情 -->
    <div class="hot-right">
      <!-- 昵称 -->
      <p class="hot-right-petName" id="hot-right-petName">昵称</p>
      <!-- 个签 -->
      <p class="hot-right-content" id="hot-right-content">
        内容：我是谁？我在那？我是谁？我在那？
        我是谁？我在那？我是谁？我在那？我是谁？我在那？
      </p>
      <!-- 动态里好友头像 -->
      <div class="hot-right-img">
          <img src="static/img/word-mdn/tp_sy@2x.png" />
      </div>
      <!-- 阅读量 -->
      <div class="hot-right-read">
        <div class="read">阅读量:<span>999+</span><br>
        <span class="time">2018年1月2号</span></div>
        <!-- 点赞图标 -->
        <ul class="giv_a_like">
          <li><i class="iconfont">&#xe601;</i></li>
          <li><i class="iconfont">&#xe617;</i></li>
          <li><i class="iconfont">&#xe61e;</i></li>  
        </ul>
      </div>
      <!-- 评论 -->
      <div class="hot-right-img-comment">昵称：<span>今天天气好晴朗，处处好风光</span></div>
      <div class="hot-right-img-comment">昵称：<span>怎么做的呀？</span> </div>
      <div class="look-comment" id="look-comment">共<span>10</span>条记录><br></div>
    </div>
    </div>
  </div>
</template>
<script>
export default {

};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
img{
  vertical-align: middle;
}
// 整体部分
.hot {
  margin-top: .2rem;
  width: 90%;
//   height: 100%;
  min-width: 6.75rem;
  margin-left: 0.4rem;
  display: flex;
 //k background: skyblue;
//   左边头像
  .hot-left {
    min-height: 1rem;
    //  background: #cdcdcd;
    width: 23%;
    // 头像
    .hot-left-head {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background: #cccccc;
      margin-left: 0.15rem;
      &>img{
        width: 1rem;
        height: 1rem;
      }
    }
  }
//  右边内容
  .hot-right {
    //  min-height: 1rem;
    height: auto;
   // border: 1px solid #000;
    width: 77%;
    // 昵称
    .hot-right-petName {
      height: 0.56rem;
      line-height: 0.56rem;
      font-size: 0.29rem;
    }
    // 内容
    .hot-right-content {
      color: #888888;
      font-size: 0.21rem;
      height: 0.28rem;
      line-height: 0.28rem;
    }
    // 图片
    .hot-right-img{
        margin: .4rem 0 .2rem 0;
        width: 2.6rem;
        height: 3.9rem;
        &>img{
          width: 2.6rem;
          height: 3.9rem;
        }
    }
    // 阅读量
    .hot-right-read{
        height: .6rem;
        line-height: .3rem;
        display: flex;
        justify-content: space-between;
        .read{
          width: 1.59rem;
          color: #838383;
          font-size: .2rem;
        }
        // 点赞
        .giv_a_like{
          width: 2.64rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          &>li i{
             font-size:.35rem;
          }
        }
    }
    //评论
  .hot-right-img-comment{
      font-size: .25rem;
      color: #76d1c0;
      height: .4rem;
      &>span{
        color: #616161;
      }
   }
   .look-comment{
      font-size: .2rem;
      color: #868686;
   }
  }

}
 
</style>

