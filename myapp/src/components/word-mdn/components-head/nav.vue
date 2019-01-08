<template>
  <div class="nav">
    <!-- 头像的 内容区域 -->
    <div class="top-nav">
      <div class="top-nav-hot" @click="handleTo(1)">动态
        <!-- <router-link :to="{name:'hot'}"> </router-link> -->
      </div>
      <div class="top-nav-notebook" @click="handleTo(2)">手账
        <!-- <router-link :to="{name:'notebook'}"> </router-link> -->
      </div>
    </div>
    <keep-alive>
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
      activeindex:0
    };
  },
  methods: {
    handleTo(index) {    
      if(index == 1){
         this.conName = "Hot-com";
      }else if(index == 2){
         this.conName = "Notebook-com";
      }
      
    }
  }
};
</script>
<style lang="scss" scoped>
// 详情内容
.top-nav {
  width: 100%;
  height: 0.76rem;
  display: flex;
  font-size: 0.27rem;
  background: pink;
  font-weight: bold;
  color: #3eb59f;
  .top-nav-hot {
    width: 50%;
    height: 0.76rem;
    line-height:.76rem; 
    text-align:center; 
  }
  .top-nav-notebook {
    width: 50%;
    height: 0.76rem;
    line-height:.76rem; 
    text-align:center; 
  }
}
</style>
