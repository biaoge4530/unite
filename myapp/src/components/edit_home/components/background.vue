<template>
  <div class="background" @click="editOption(-1)">
    <div class="bgbox">
      <ul class="head">
        <li></li>
        <li class="my">我的</li>
        <li class="more">更多</li>
        <li>
          <img src="static/img/edit/toTop.png" alt>
        </li>
      </ul>
      <div class="wrapper" ref="homeWrapper">
        <ul class="bgs content">
          <li @click="addbgImg(index)" v-for="(item,index) in bgList" :key="index">
            <img :src="item | srcs" alt>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Vuex from "vuex"
export default {
  data() {
    return {
      bgList: [
        "bgImg1.png",
        "bgImg2.png",
        "bgImg3.png",
        "bgImg4.png",
        "bgImg5.png",
        "bgImg6.png",
        "bgImg7.png",
        "bgImg8.png",
        "bgImg9.png"
      ]
    };
  },
 	methods:{
		...Vuex.mapMutations({
      addbgImg:"edit/addbgImg",
      editOption:"edit/editOption"
		})
	},
  mounted() {
    this.scroll = new BScroll(this.$refs.homeWrapper, {
      //只有设置成true pullingUp才能使用
      pullUpLoad: true,
      click:true
    });
    // console.log(this.scroll);
  },
  filters: {
    srcs(val) {
      return "static/img/edit/bgImgs/" + val;
    }
  },
};
</script>


<style scoped lang="scss">
.background {
  width: 100%;
  height: 100%;
  position: fixed;
  bottom: 0.98rem;
  left: 0;
  .bgbox {
    margin-top: 5rem;
    width: 100%;
    height: 8rem;
    background: #ffffff;
    border-radius: 10px;
    z-index: 100;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 1.2rem;
      padding: 0 0.24rem;
      .my,
      .more {
        width: 96px;
        height: 48px;
        font-size: 0.28rem;
        font-family: PingFang-SC-Regular;
        font-weight: bold;
        color: rgba(96, 96, 96, 1);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .active {
        color: rgba(118, 209, 190, 1);
        background: url(../../../../static/img/edit/myactive.png);
      }
    }
    .bgs {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 0.37rem;
      padding: 0 0.24rem;
      li {
        width: 2.18rem;
        height: 3.84rem;
        margin-bottom: 0.24rem;
      }
    }
  }
  .wrapper {
    height: 7rem;
    overflow: hidden;
  }
}
</style>
