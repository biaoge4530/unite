<template>
  <div>
    <div class="head">
      <i><</i>账号管理
    </div>
    <div class="current">当前账号</div>
    <router-link to>
      <li>
        <img src="../../../../../static/img/my/settings/accountManagement/zhgl_wx@3x.png" alt>
        <a href>
          <h4>微信登录</h4>
          <i></i>
        </a>
      </li>
    </router-link>
     <div class="current">账号绑定</div>
    <router-link to>
      <li>
        <img src="../../../../../static/img/my/settings/accountManagement/zhgl_sj@3x.png" alt>
        <a href>
          <h4>绑定手机</h4>
          <i>></i>
          <span>绑定</span>
        </a>
      </li>
    </router-link>
    <router-link to>
      <li>
        <img src="../../../../../static/img/my/settings/accountManagement/zhgli_qq@3x.png" alt>
        <a href>
          <h4>QQ账号</h4>
          <i>></i>
          <span>绑定</span>
        </a>
      </li>
    </router-link>
    <router-link to>
      <li>
        <img src="../../../../../static/img/my/settings/accountManagement/zhgl_wb@3x.png" alt>
        <a href>
          <h4>微博账号</h4>
          <i>></i>
          <span>绑定</span>
        </a>
      </li>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
div {
  background: #f1f1f1;
  .head {
    width: 100%;
    height: 0.88rem;
    line-height: 0.88rem;
    background: #fff;
    text-align: center;
    font-size: 0.34rem;
    i {
      width: 0.23rem;
      height: 0.39rem;
      
    }
  }
  .current {
    width: 100%;
    height: 1.25rem;
    padding: 0.48rem 0.26rem;
    font-size: 0.32rem;
  }
  li {
    width: 100%;
    height: 0.91rem;
    background: #fff;
    padding-left: 0.28rem;
    padding-top: 0.2rem;
    display: flex;
    img {
      float: left;
      width: 0.48rem;
      height: 0.48rem;
    }
    a {
      float: left;
      font-size: 0.3rem;
      height: 100%;
      margin-left: 0.27rem;
      border-bottom: 0.01rem solid #f1f1f1;
      flex: 1;
      padding-right: 0.24rem;
      h4 {
        height: 100%;
        width: 1.28rem;
        line-height: 0.53rem;
        float: left;
      }
      i {
        float: right;
        line-height: 0.53rem;
      }
      span {
        display: inline;
        float: right;
        line-height: 0.53rem;
      }
    }
  }
}
</style>
