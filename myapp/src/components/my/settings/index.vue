<template>
  <div>
    <div class="head">
      <i><</i>设置
    </div>
    <ul>
      <router-link to="/accountManagement">
        <li>
          <img src="../../../../static/img/my/settings/sz_icon_1@3x.png" alt>
          <a href>
            <h4>账号管理</h4>
            <i>></i>
          </a>
        </li>
      </router-link>
      <router-link to="/clearCache">
        <li>
          <img src="../../../../static/img/my/settings/sz_icon_2@3x.png" alt>
          <a href>
            <h4>清除缓存</h4>
            <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>

            <i>></i>
            <span>153MB</span>
          </a>
        </li>
      </router-link>
      <router-link to="/notify">
        <li>
          <img src="../../../../static/img/my/settings/sz_icion_3@3x.png" alt>
          <a href>
            <h4>消息通知</h4>
            <i>></i>
          </a>
        </li>
      </router-link>
      <router-link to="/materialSubmitted">
        <li>
          <img src="../../../../static/img/my/settings/sz_icon_4@3x.png" alt>
          <a href>
            <h4>素材投稿</h4>
            <i>></i>
          </a>
        </li>
      </router-link>
      <router-link to="/aboutUs">
        <li>
          <img src="../../../../static/img/my/settings/sz_icon_5@3x.png" alt>
          <a href>
            <h4>关于我们</h4>
            <i>></i>
          </a>
        </li>
      </router-link>
    </ul>
    <button>退出登录</button>
    <router-view></router-view>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>
看，
<script>
import Vue from "vue";
import { Actionsheet } from "mint-ui";

Vue.component(Actionsheet.name, Actionsheet);
export default {
  date() {
    return {
      sheetVisible: show
    };
  },
  methods: {}
};
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
      display: inline;
      position: fixed;
      left: 0.24rem;
      top: 0.24rem;
    }
  }
  ul {
    width: 100%;
    height: 5.75rem;
    margin-top: 0.21rem;
    li {
      width: 100%;
      height: 0.91rem;
      background: #fff;
      padding-left: 0.28rem;
      padding-top: 0.2rem;
      display: flex;

      img {
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
      &:nth-child(5) {
        margin-top: 0.2rem;
        width: 11rem;
      }
    }
  }
  button {
    font-size: 0.28rem;
    width: 6.66rem;
    height: 1.02rem;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(194, 193, 193, 1);
    opacity: 0.84;
    border-radius: 0.1rem;
    position: fixed;
    top: 8.39rem;
    left: 0.42rem;
  }
}
.float {
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  .notice {
    width: 5rem;
    height: 6.8rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -2.5rem;
    margin-top: -3.4rem;
    background: #fff;
    border-radius: 20px;
    opacity: 1;
    z-index: 4;
    .bell {
      display: block;
      position: absolute;
      left: -50%;
      margin-left: 3.3rem;
      margin-top: -1.51rem;
      width: 3.3rem;
      height: 3.3rem;
    }
    .cancel {
      width: 0.38rem;
      height: 0.38rem;
      position: absolute;
      left: 88%;
      top: 3%;
    }
    p {
      display: block;
      width: 384px;
      height:129px;
      font-size: 30px;
      font-family: PingFang-SC-Regular;
      font-weight: bold;
      color: rgba(152, 153, 153, 1);
      line-height: .45rem;
      text-align: center;
      margin:3.5rem .58rem auto .58rem;

    }
.Btn{
  width: 3.64rem;
  height:.82rem;
  margin: .4rem .68rem;
  background-image: -webkit-linear-gradient(0deg,#53e099,#53e0c5);
 text-align: center;
font-size:.34rem;
font-family:PingFang-SC-Regular;
font-weight:bold;
color:rgba(255,255,255,1);
line-height:.83rem
}
  }
}
</style>
