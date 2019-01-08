<template>
    <div class="nav">
        <!-- 头像的 内容区域 -->
    <div class="top-nav"> 
        <div class="top-nav-hot">
           <router-link :to="{name:'hot'}"> 动态</router-link>
         </div>
        <div class="top-nav-notebook">
            <router-link :to="{name:'notebook'}"> 手账</router-link>
        </div>   
    </div>
    <router-view></router-view>
    </div>
</template>
<script>

export default {
    
}
</script>
<style lang="scss" scoped>
  // 详情内容
.top-nav{
    width: 100%;
    height: .76rem;
    background: #cccccc;
    display: flex;
    .top-nav-hot{
        width: 50%;
        height: .76rem;
        background: #9977bb;
    }
    .top-nav-notebook{
        width: 50%;
        height: .76rem;
        background:#33ffee
    }
}
</style>
