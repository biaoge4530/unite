<template>
  <div>
    <div class="head">
      <i><</i>
      关于我们
    </div>
    <div class="logo">
      <img src="../../../../../static/img/my/settings/aboutUs/gywm_logo@3x.png" alt>
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
export default {};
</script>

<style  lang="scss">
.head {
  width: 100%;
  height: 0.88rem;
  font-size: 0.34rem;
  text-align: center;
  line-height: 0.88rem;
}
.logo {
  width: 100%;
  height: 3.74rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  img {
    width: 2.16rem;
    height: 2.16rem;
    display: block;
    margin: 0 auto;
  }
}
p {
  text-align: center;
  line-height: 1.11rem;
  background: #fff;
}
li {
  width: 100%;
  height: 0.91rem;
  background: #fff;
  padding-left: 0.28rem;
  padding-top: 0.2rem;
  display: flex;
  img {margin-right:.33rem;
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
  h4 {
          height: 100%;
          width: 1.29rem;
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
</style>
