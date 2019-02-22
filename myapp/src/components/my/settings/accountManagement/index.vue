<template>
  <div class="accountManagement"> 
    <div class="head">
      
        <img src="../../../../../static/img/wyc/lt.png" @click="handleGet()">
      账号管理
      <div></div>
    </div>
    <div class="current">当前账号</div>
    <router-link to>
      <li>
        <img src="../../../../../static/img/my/settings/accountManagement/zhgl_wx@3x.png" alt>
        <a href>
          <h4>微信登录</h4>
        </a>
      </li>
    </router-link>
    <div class="current">账号绑定</div>
    <router-link to>
      <li>
        <img src="../../../../../static/img/my/settings/accountManagement/zhgl_sj@3x.png" alt>
        <a href>
          <h4>绑定手机</h4>
           <span>绑定</span>
           <img src="../../../../../static/img/my/settings/grzl_icon_4@3x.png" alt>
         
        </a>
      </li>
    </router-link>
    <router-link to>
      <li>
        <img src="../../../../../static/img/my/settings/accountManagement/zhgli_qq@3x.png" alt>
        <a href>
          <h4>QQ账号</h4>
          <span>绑定</span>
          <img src="../../../../../static/img/my/settings/grzl_icon_4@3x.png" alt>
          
        </a>
      </li>
    </router-link>
    <router-link to>
      <li>
        <img src="../../../../../static/img/my/settings/accountManagement/zhgl_wb@3x.png" alt>
        <a href>
          <h4>微博账号</h4>
           <span>绑定</span>
         <img src="../../../../../static/img/my/settings/grzl_icon_4@3x.png" alt>
         
        </a>
      </li>
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    handleGet() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss">
.accountManagement{
  background: #f1f1f1;
  height: 100%;
  .head {
    width: 100%;
    height: 0.88rem;
    line-height: 0.88rem;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.33rem;
    padding: 0.24rem;
    img {
      width: 0.23rem;
      height: 0.39rem;
      display: block;
      
    }
    
  }
  .current {
    width: 100%;
    height: 1.25rem;
    padding: 0.48rem 0.26rem;
    font-size: 0.33rem;
  }
  li {
    width: 100%;
      height: 0.91rem;
      background: #fff;
      padding-left: 0.28rem;
      display: flex;
      font-size: 0.33rem;
      align-items: center;

 
    img {
      float: left;
      width: 0.48rem;
      height: 0.48rem;
    }
    a {
  height: 100%;
        margin-left: 0.27rem;
        border-bottom: 0.01rem solid #f1f1f1;
        flex: 1;
        padding-right: 0.24rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

      h4 {
        height: 100%;
        width: 1.35rem;
         line-height: 0.91rem;
      
    
      }
    img {
          width: 0.16rem;
          height: 0.26rem;
        }
      span {
       width:4.0rem;
      text-align: right
      }
    }
  }
}
</style>
