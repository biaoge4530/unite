<template>
  <div class="top">
    <!-- 头部的上边 -->
    <mt-header class="top-top" fixed>
      <!-- 返回 -->
        <router-link to="/" slot="left">
          <mt-button icon="back" class="iconfont">返回</mt-button>
          <!-- <mt-button >返回</mt-button> -->
        </router-link>       
       <mt-button slot="right" class="follow" @click="">关注</mt-button>
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
           <router-link :to="'word-mdn/fans'">粉丝
           <span class="top-right-fans">111</span></router-link>
        </li>
        <li>
          <router-link :to="'word-mdn/like'">喜欢
          <span class="top-right-like">111</span></router-link>
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
import { Header , Actionsheet,MessageBox  } from "mint-ui";
export default {
  data(){
    return{
      sheetVisible:false,
      popupVisible:false
    }
  },
  components: {
    "header-com": Header,
    "Actionsheet-com":Actionsheet,
    "MessageBox-com":MessageBox
  },
  methods:{
    handleReport(name){
      this.sheetVisible = true;
    },
     handleFollow(){
       MessageBox({
        title: '请选择举报原因',
        message: '<input type="radio" name="jb"/>广告垃圾<input type="radio" name="jb"/>广告垃圾<br><input type="radio" name="jb"/>广告垃圾<input type="radio" name="jb"/>广告垃圾<br><input type="radio" name="jb"/>广告垃圾',
        showCancelButton: true
       });
     }
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
  background: url('../../../../static/img/word-mdn/beijing.png');
// 头部
  .top-top {
    width: 90%;
    margin: 0 auto;
    height: .88rem;
    margin-top: 0.4rem;
    background:#d2f5ee;
    font-size: .25rem;
    color: #000;
    //更多 三个点
  .iconfont{
      font-size: .25rem;
    }
  .follow{
      color: #3eb69d;
      margin-right: .2rem;
      font-size: .30rem;
    }
  }
//  左边头像
  .top-left {
    height: 3.71rem;
    width: 2.6rem;
    float: left;
    position: relative;
    .top-left-head {
      width: 1.78rem;
      height: 1.78rem;
      background: #ddd;
      border-radius: 50%;
      position: absolute;
      left: 0.46rem;
      bottom: 0.1rem;
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
      top: 2rem;
      left: 3rem;
      font-weight: bold
  }
    //个签
    .top-right-personalized_signature {
      position: absolute;
      top: 2.7rem;
      left: 3rem;
      color: #948b8c;
      font-size: 0.24rem;
    }
    //ul
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
  //举报
 .Report{
   background: palegoldenrod;
   width: 5.06rem;
   height: 4.2rem;
   border: 1px solid #ffffff;
   
   
 }
//  .mint-actionsheet{
//    .mint-actionsheet-list{
//      .mint-actionsheet-listitem{
//     height: 4rem;
//  }
//    }
   
//  }
 
//  .ReportSize{
//    
//  }
}
</style>


