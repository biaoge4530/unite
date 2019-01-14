<template>
  <div class="nav">
    <!-- 头像的 内容区域 -->
    <div class="top-nav">
      <div :class="flag == 1 ? 'top-nav-hot active' : 'top-nav-hot'" @click="handleTo(1)" >动态
        <i class="iconfont" style="color:#000">&#xe502;</i>
       
      </div>
      <div :class="flag == 2 ? 'top-nav-notebook active' : 'top-nav-notebook'" @click="handleTo(2)" >手账
       
      </div>
    </div>
    <keep-alive>
      <!-- 动态组件 -->
      <component :is="conName"></component>
    </keep-alive>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import hot from "./hot";
import notebook from "./notebook";
export default {
  components:{
      "Hot-com":hot,
      "Notebook-com":notebook
  },
  data(){
    return {
      conName:"Hot-com",
      flag:1
    };
  },
  methods: {
    handleTo(index) {    
      if(index == 1){
         this.conName = "Hot-com";
         this.flag=1;
      }else if(index == 2){
         this.conName = "Notebook-com";
         this.flag=2;
      }
      
    }
  }
};
</script>
<style lang="scss" scoped>
// 详情内容
.top-nav {
  width: 100%;
  height: 0.7rem;
  margin-bottom:.25rem ;
  display: flex;
  font-size: 0.28rem ;
  font-weight: bold;
  color: #3eb59f;
  .top-nav-hot {
    width: 50%;
    height: 0.68rem;
    line-height:.66rem; 
    text-align:center; 
  }
  .top-nav-notebook {
    width: 50%;
    height: 0.68rem;
    line-height:.66rem; 
    text-align:center; 
  }
  .active{
    background: url('../../../../static/img/word-mdn/sznr_xjx.png') no-repeat bottom;                 
  }
}
</style>
