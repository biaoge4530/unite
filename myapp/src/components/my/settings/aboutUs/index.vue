<template>
  <div class="body">
    <div class="head">
      <img src="../../../../../static/img/wyc/lt.png" alt @click="handleGet()">
      关于我们
      <i></i>
    </div>
    <div class="logo">
      <div class="shell">
        <img src="../../../../../static/img/my/settings/aboutUs/logo.png" alt>
      </div>
    </div>
    <p>联系方式</p>
    <ul>
      <li>
        <a href>
          <img src="../../../../../static/img/my/settings/aboutUs/gywm_qq@3x.png" alt>
          <h4>QQ群</h4>
          <i>2482434222</i>
        </a>
      </li>
      <li>
        <a href>
          <img src="../../../../../static/img/my/settings/aboutUs/gywm_wx@3x.png" alt>
          <h4>微信公众号</h4>
          <i>叶子手账</i>
        </a>
      </li>
      <li>
        <a href>
          <img src="../../../../../static/img/my/settings/aboutUs/gywm_wb@3x.png" alt>
          <h4>微博</h4>
          <i>叶子手账</i>
        </a>
      </li>
      <li>
        <a href>
          <img src="../../../../../static/img/my/settings/aboutUs/gywm_yx@3x.png" alt>
          <h4>邮箱</h4>
          <i>yezi6666@163.com</i>
        </a>
      </li>
    </ul>
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

<style  lang="scss">
.body {
  height: 100%;
  background: #fff;

  .head {
    width: 100%;
    height: 0.88rem;
    font-size: 0.33rem;
    line-height: 0.88rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.24rem;

    img {
      width: 0.23rem;
      height: 0.39rem;
      display: block;
    }
  }
  .logo {
    width: 100%;
    height: 3.74rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    .shell {
      width: 2.16rem;
      height: 2.16rem;
      display: block;
      margin: 0 auto;
      box-shadow: 0 0.02rem 0.08rem 0 #76d1be;
      border-radius: 0.1rem;

      img {
        width: 2.16rem;
        height: 2.16rem;
        align-items: center;
      }
    }
  }
  p {
    text-align: center;
    line-height: 1.11rem;
    background: #fff;
    font-size: 0.33rem;
  }

  li {
    width: 100%;
    height: 0.91rem;
    background: #fff;
    padding-left: 0.28rem;
    padding-top: 0.2rem;
    display: flex;

    img {
      margin-right: 0.33rem;
      float: left;
      width: 0.5rem;
      height: 0.5rem;
    }
    a {
      float: left;
      height: 100%;
      margin-left: 0.27rem;
      border-bottom: 0.01rem solid #f1f1f1;
      flex: 1;
      padding-right: 0.24rem;
    }
    &:last-child a {
      border: none;
    }
    h4 {
      height: 100%;
      width: 1.29rem;
      line-height: 0.53rem;
      float: left;
    }
    i {
      float: right;
      line-height: 0.53rem;
      color: #76d1be;
    }
    span {
      display: inline;
      float: right;
      line-height: 0.53rem;
    }
  }
}
</style>
