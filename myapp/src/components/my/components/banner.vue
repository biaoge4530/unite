<template>
  <div class="banner">
    <div class="notLogin-banner">
      <div class="top">
        <ul>
          <li>
            <router-link to>
              <img src="../../../../static/img/wyc/wdl_sz@2x.png">
            </router-link>
          </li>
          <li>
            <router-link to="/settings">
              <img class="iten" src="../../../../static/img/wyc/wdl_sezhi@2x.png">
            </router-link>
          </li>
        </ul>
      </div>
      <!-- 头像 -->
      <div class="hande">
        <div @click="handleTz()">
          <router-link to>
            <img :src="HeadPortrait">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "../../../axios_xml/request.js";
import Vuex from "vuex";
import store from "../../../store";
import { getCookie } from "../../../utils/Auth";
export default {
  data() {
    return {
      HeadPortrait: "../../../../static/img/wyc/head.png"
      /* ../../../../static/img/wyc/head.png */
    };
  },
  created() {
    let phone = store.state.useId;
    if (!phone == "") {
      axios({
        method: "get",
        url: "/api/getuser?useId=" + phone
      }).then(data => {
        let handImg = data.user.uHeadimg;
        this.HeadPortrait = handImg;
      });
    }
  },
  methods: {
    //如果本地localStorge数据不存在跳转到登录页面
    handleTz() {
      if (!this.HeadPortrait == "") {
        this.$router.push("/settings");
      } else {
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.banner {
  width: 100%;
  height: 100%;
}
.notLogin-banner {
  width: 100%;
  height: 4rem;
  background: url("../../../../static/img/wyc/banner_nav.png") no-repeat;
  background-size: 100%;
}
.top {
  width: 100%;
  height: 100%;
  ul {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 0.84rem;
    display: flex;
    align-items: center;
    li:nth-child(1) img {
      width: 0.46rem;
      height: 0.44rem;
    }
    li:nth-child(2) img {
      width: 0.46rem;
      height: 0.44rem;
    }
  }
}
.iten {
  width: 0.54rem;
  height: 0.54rem;
  margin-left: 0.24rem;
  margin-right: 0.26rem;
}
.hande {
  width: 100%;
  justify-content: center;
  display: flex;
  margin-top: -15%;
}
.hande img {
  width: 1.59rem;
  height: 1.59rem;
  border-radius: 50%;
}
</style>
