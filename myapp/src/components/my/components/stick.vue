<template>
  <div class="stick">
    <div class="staff">
      <div class="swiper-container" ref="banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in data" :key="index">
            <router-link :to="item.url">
              <!-- 账本跳转路径 -->
              <div class="barImg">
                <img :src="item.src">
                <div>
                  <div class="bannerWeap">
                    <div>
                      <router-link to="/login">
                        <img src="../../../../static/img/wyc/wdl_sezhida@2x.png">
                      </router-link>
                    </div>
                    <div class="articles">
                      <span>{{item.staff}}</span>
                      <!-- 手杖篇数 -->
                      <span>{{item.num}}</span>
                      <!-- 数量 -->
                      <span>{{item.newBook}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
            <div class="acountBookc">
              <span>{{item.number}}</span>
            </div>
            <!-- 公开手杖.. -->
            <!-- <div class="newBooks">xin</div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import Vuex from "vuex";

export default {
  computed: {
    ...Vuex.mapState({
      data: state => state.My.data
    })
  },
  mounted() {
    new Swiper(this.$refs.banner, {
      loop: true, //无缝轮播
      slidesPerView: "auto",
      loopedSlides: 3,
      centeredSlides: true,
      spaceBetween: 160,
      preventClicks: false //防止触摸的时候跳转
    });
  }
};
</script>

<style >
.swiper-container > img {
  width: 2.18rem;
  height: 2.18rem;
  /* padding-top: 0.4rem; */
  /* margin: 0 0.21rem; */
}

.barImg {
  width: 2.6rem;
  height: 3.68rem;
  margin-top: 0.87rem;
  position: relative;
  border-radius: 0.14rem;
  box-shadow: 0.02rem 0.1rem 0.1rem 0.02rem #ccc,
    -0.02rem 0.1rem 0.1rem 0.02rem #ccc;
}
.barImg > img {
  width: 2.18rem;
  height: 2.58rem;
  padding-top: 0.4rem;
  margin: 0 0.21rem;
  border-radius: 0.1rem;
}
.bannerWeap img {
  width: 0.3rem;
  height: 0.3rem;
}
.bannerWeap > div:nth-child(1) {
  position: absolute;
  left: 2.18rem;
  top: 0.26rem;
}
.articles > span {
  font-size: 0.3rem;
  color: #5d5d5d;
  width: 100%;
  height: 100%;
  text-align: center;
  display: block;
}
.articles > span:nth-child(1) {
  margin-top: 0.2rem;
}
.swiper-slide {
  width: 2.6rem;
}
.acountBookc {
  width: 100%;
  height: 0.89rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.29rem;
}
.newBooks {
  width: 2.6rem;
  height: 2.6rem;
  background: yellow;
}
.articles > span:nth-child(2) {
  color: #3fb59d;
  font-size: 0.3rem;
}
</style>
