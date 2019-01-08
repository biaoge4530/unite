<template>
  <div class="top">
   <!-- 头部的上边 -->
    <div class="top-top">
      <p>&lt;</p>
      <p>关注<img src="static/img/word-mdn/szxq_sd.png"></p>
    </div>
    <!-- 头部的左半部分 -->
    <div class="top-left">
       <div class="top-left-head" id="head">
           
       </div>
    </div>
    <!-- 头部的右边部分 -->
    <div class="top-right">
       <h2 id="top-right-scree_name">日常加薪</h2>
       <p class="top-right-personalized_signature">逮到一只佛系无签名手账</p>
       <ul class="top-right-popularity">
           <li>粉丝<span class="top-right-fans">111</span></li>
           <li>喜欢<span class="top-right-like">111</span></li>
       </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
.top {
  width: 100%;
  height: 4.16rem;
  background: #d2f5ee;
  padding-top: .1rem;
  .top-top{
    width: 95%;
    margin: 0 auto;
    height: .35rem;
    line-height: o.35rem;
    p:nth-child(1) {
      float: left;
      width: .3rem;
      font-size: .34rem;
      font-weight: bold;
    }
    p:nth-child(2) {
      float: right;
      height: .35rem;
      font-size: .32rem;
      color: #40b6a0;
      margin-right: 0.3rem;
      width: 1rem;
      display: flex;
      justify-content: space-around;
    }
  }
  .top-left{
     height: 3.71rem;
     width: 2.6rem;
     float: left;
     position: relative;
     .top-left-head{
         width: 1.8rem;
         height:1.8rem;
         background: #ddd;
         border-radius: 50%;
         position: absolute;
         left:.1rem;
         bottom: .4rem;
     }
  }
  .top-right{
     height: 3.71rem;  
     h2{
         position: absolute;
         top:2.0rem;
         left:3.0rem;
     }
     .top-right-personalized_signature{
         position: absolute;
         top: 2.7rem;
         left:3.0rem;
         color: #948b8c;
         font-size: .23rem;
     }
     .top-right-popularity{
         position: absolute;
         top: 3.2rem;
         left:3.0rem;
         width: 2.80rem;
         display: flex;
         justify-content: space-between;
         font-size: .24rem;
         color: #5bc1ac;
         li:nth-child(1){
            border-right: 1px solid #989a99;
            width: 1.4rem;
         }
         .top-right-fans{
             margin-left:.15rem;
         }
         .top-right-like{
             margin-left:.15rem;
         }
     }
  }
}

</style>


