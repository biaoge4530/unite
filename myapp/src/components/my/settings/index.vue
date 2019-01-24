<template>
  <div class="set">
    <div class="settings">
      <div class="head">
        <img src="../../../../static/img/wyc/lt.png" alt @click="handleGet()">
        设置
        <div></div>
      </div>
      <ul>
        <router-link to="/accountManagement">
          <li>
            <img src="../../../../static/img/my/settings/sz_icon_1@3x.png" alt>
            <a href>
              <h4>账号管理</h4>
              <img src="../../../../static/img/my/settings/grzl_icon_4@3x.png" alt>
            </a>
          </li>
        </router-link>
        <mt-button @click="actionSheet()" class="cc">
          <li>
            <img src="../../../../static/img/my/settings/sz_icon_2@3x.png" alt>
            <a>
              <h4>清除缓存</h4>
              <span>153MB</span>
              <img src="../../../../static/img/my/settings/grzl_icon_4@3x.png" alt>
            </a>
          </li>
        </mt-button>
        <router-link to="/notify">
          <li>
            <img src="../../../../static/img/my/settings/sz_icion_3@3x.png" alt>
            <a href>
              <h4>消息通知</h4>
              <img src="../../../../static/img/my/settings/grzl_icon_4@3x.png" alt>
            </a>
          </li>
        </router-link>
        <router-link to="/materialSubmitted">
          <li>
            <img src="../../../../static/img/my/settings/sz_icon_4@3x.png" alt>
            <a href>
              <h4>素材投稿</h4>
              <img src="../../../../static/img/my/settings/grzl_icon_4@3x.png" alt>
            </a>
          </li>
        </router-link>
        <router-link to="/aboutUs">
          <li class="lastLi">
            <img src="../../../../static/img/my/settings/sz_icon_5@3x.png" alt>
            <a href>
              <h4>关于我们</h4>
              <img src="../../../../static/img/my/settings/grzl_icon_4@3x.png" alt>
            </a>
          </li>
        </router-link>
      </ul>
      <button class="cancel">退出登录</button>

      <mt-actionsheet
        :actions="[{name:'确定'}]"
        v-model="sheetVisible"
        cancelText="取消"
        closeOnClickModal="true"
      ></mt-actionsheet>
    </div>
    <div class="float">
      <div class="notice">
        <img class="bell" src="../../../../static/img/my/settings/xxtz_icon_1@3x.png">
        <img class="cancel" src="../../../../static/img/my/settings/xxtz_icon_2@3x.png">
        <p>有小伙伴关注、点赞和收藏将第一时间通知您。</p>
        <div class="Btn">去开启权限</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Actionsheet } from "mint-ui";

export default {
  data() {
    return {
      sheetVisible: false
    };
  },
  methods: {
    actionSheet() {
      this.sheetVisible = true;
    },
    handleGet() {
      this.$router.back();
    }
  }
};
</script>


<style lang="scss">
.set {
  height: 100%;
  width: 100%;
  position: relative;
}
.settings {
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
  ul {
    width: 100%;
    height: 5.75rem;
    margin-top: 0.21rem;
    .lastLi {
      margin-top: 0.21rem;
    }
    label {
      width: 100%;
    }
    li,
    .cc {
      width: 100%;
      height: 0.91rem;
      background: #fff;
      display: flex;
      font-size: 0.33rem;
      align-items: center;
      padding: 0;

      img {
        float: left;
        width: 0.5rem;
        height: 0.5rem;
        margin-left: 0.28rem;
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
          width: 1.53rem;
          line-height: 0.91rem;
        }
        img {
          width: 0.16rem;
          height: 0.26rem;
        }
        span {
          width: 4rem;
          text-align: right;
        }
      }
      &:nth-child(5) {
        margin-top: 0.2rem;
        width: 11rem;
      }
    }
  }
  .cancel {
    font-size: 0.3rem;
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
