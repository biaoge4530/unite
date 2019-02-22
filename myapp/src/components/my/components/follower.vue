<template>
  <div class="fllower">
    <div class="notlogin">
      <li>
        <span>{{notlogin}}</span>
      </li>
    </div>
    <div class="lists">
      <ul>
        <li>
          <router-link to>粉丝 {{loves}} |</router-link>
        </li>
        <li>
          <router-link to>喜欢 {{likes}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from "../../../store";
import axios from "../../../axios_xml/request.js";
export default {
  data() {
    return {
      notlogin: "未登录",
      likes: "--",
      loves: "-- ",
      phone: ""
    };
  },
  created() {
    let phone = store.state.useId;
    if (!phone == "") {
      axios({
        method: "get",
        url: "/api/getuser?useId=" + phone
      }).then(data => {
        let follower = data.user;
        this.notlogin = follower.uNickname;
        this.likes = follower.uLikenum;
        this.loves = follower.gz;
      });
    }
  }
};
</script>

<style  lang="scss">
.notlogin {
  margin-top: 0.86rem;
  li {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 0.36rem;
    color: #5d5d5d;
  }
}
.lists {
  width: 100%;
  height: 100%;
  ul {
    display: flex;
    width: 100%;
    height: 0.46rem;
    font-size: 0.2rem;
    justify-content: center;
    margin-top: 0.13rem;
    li:nth-child(1) {
      margin-right: 0.15rem;
      height: 0.46rem;
      font-size: 0.22rem;
    }
    li:nth-child(2) {
      height: 0.46rem;
      font-size: 0.22rem;
    }
  }
}
</style>
