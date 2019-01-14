<template>
  <div class="top">
    <!-- 头部的上边 -->
    <mt-header class="top-top" fixed>
      <!-- 返回 -->
        <router-link to="/" slot="left">
          <mt-button class="iconfont"><img src="static/img/word-mdn/fanhui.png"></mt-button>
          <!-- <mt-button >返回</mt-button> -->
        </router-link>       
       <mt-button slot="right" class="follow" @click="handleAtte()">{{nav}}</mt-button>
         <!-- 举报 -->
         <mt-img slot="right" class="ReportSize" @click="handleReport()" >
           <i class="iconfont">&#xe612;</i>
         </mt-img>
      </mt-header>
    </mt-header>
    <!-- 头部的左半部分 -->
    <div class="top-left">
      <div class="top-left-head" id="head"></div>
    </div>
    <!-- 头部的右边部分 -->
    <div class="top-right">
      <p class="top-right-scree_name" id="top-right-scree_name">日常加薪</p>
      <p class="top-right-personalized_signature">逮到一只佛系无签名手账</p>
      <ul class="top-right-popularity">
        <li>
           <router-link :to="'/mdn-fans'">粉丝
           <span class="top-right-fans">111</span></router-link>
        </li>
        <li @click="handleLike()">喜欢         
          <span class="top-right-like">111</span>
        </li>
      </ul>
    </div>
    <mt-actionsheet 
           :actions="[{name:'举报',method:handleFollow}]" 
           v-model="sheetVisible" 
           cancelText="取消"
           closeOnClickModal="true"
           >
    </mt-actionsheet>
   </mt-popup>
  </div>
  
</template>
<script>
import { Header , Actionsheet,MessageBox ,Popup  } from "mint-ui";
export default {
  data(){
    return{
      sheetVisible:false,
      flag:true,
      nav:"关注"
    }
  },
  components: {
    "header-com": Header,
    "Actionsheet-com":Actionsheet,
    "MessageBox-com":MessageBox,
    "Popup-com":Popup
  },
  methods:{
    handleReport(){
      this.sheetVisible = true;
    },
     handleFollow(){
       MessageBox({
        title: '请选择举报原因',
        message: '<input type="radio" name="jb"/>广告垃圾<input type="radio" name="jb"/>广告垃圾<br><input type="radio" name="jb"/>广告垃圾<input type="radio" name="jb"/>广告垃圾<br><input type="radio" name="jb"/>广告垃圾',
        showCancelButton: true
       });
     },
     handleLike(){
      MessageBox({
        title: 'hellow',
        message: '有<span>1232</span>个人喜欢你',
        showCancelButton: false
      });
    },
    handleAtte(){
      this.nav=="关注"?this.nav="已关注":this.nav="关注"
    },
 
  }
}
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
  background: url('../../../../static/img/word-mdn/beijing.png') no-repeat;
// 头部
  .top-top {
    width: 90%;
    margin: 0 auto;
    height: 1rem;
    background:#d2f5ee;
    padding-top:.55rem;
    font-size: .30rem;
    color: #000;
    //更多 三个点
  .iconfont{
      font-size: .25rem;
      &>img{
        width: .28rem;
        height: .17rem;
      }
    }
  .follow{
      color: #3eb69d;
      margin-right: .2rem;
      font-size: .30rem;
    }
  }
//  左边头像
  .top-left {
    height:4.16rem;
    width: 2.6rem;
    float: left;
    position: relative;
    .top-left-head {
      width: 1.78rem;
      height: 1.78rem;
      background: #ddd;
      border-radius: 50%;
      position: absolute;
      top:1.89rem;
      left: 0.46rem;
     
    }
  }
  //
  
  //头部的右边
  //昵称和个签
  .top-right {
    height: 3.71rem;
    //昵称
  .top-right-scree_name{
      font-size: .34rem;
      position: absolute;
      top: 2.06rem;
      left: 2.63rem;
      font-weight: bold
  }
    //个签
    .top-right-personalized_signature {
      position: absolute;
      top: 2.81rem;
      left: 2.63rem;
      color: #948b8c;
      font-size: 0.24rem;
    }
    //ul
    .top-right-popularity {
      position: absolute;
      top: 3.22rem;
      left: 2.63rem;
      width: 2.8rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.24rem;
      li:nth-child(1) {
        border-right: 1px solid #989a99;
        width: 1.4rem;
        color:#3FB59D;
      }
      li{
         color: #3FB59D;
         &>a{
        color: #3FB59D;
       }
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
  //举报
 .Report{
   background: palegoldenrod;
   width: 5.06rem;
   height: 4.2rem;
   border: 1px solid #ffffff; 
 }
}
</style>


