<template>
  <div class="stick">
    <div class="staff">
      <div class="swiper-container" ref="banner">
        <div class="swiper-wrapper"  >
          <div class="swiper-slide" v-for="(item,index) in notBanner" :key="index">
            <div class="barImg">
              <img :src="item.url">
            <div>
              <div class="bannerWeap">
                <div>
                    <router-link to="/">
                      <img src="../../../../static/img/wyc/wdl_sezhida@2x.png"/>
                    </router-link>
                </div>

                <span>/手杖篇数/</span>
                <div><span>0</span></div>
              </div>
              </div>
            </div>
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
  computed:{
    ...Vuex.mapState({
          notBanner:state=>state.NotLogin.notBanner,
        })
  },
  mounted(){
      new Swiper(this.$refs.banner,{
        loop:true,
        pagination:{
          el:"banner-pagination"
        }
      })
  }




}

</script>

<style >
.swiper-container>img{
width:2.18rem;
  height: 2.18rem;
  padding-top: .4rem;
  margin: 0 .21rem;

}

.barImg{
  width: 2.6rem;
  height: 3.68rem;
  margin-top: .87rem;
  margin-left: 30%;
  position: relative;
  background: #ccc;
}
.barImg>img{
  width:2.18rem;
  height: 2.18rem;
  padding-top: .4rem;
  margin: 0 .21rem;
}
.bannerWeap img{
  width: .3rem;
  height: .3rem;
}
.bannerWeap>div:nth-child(1){
      position:absolute;
      left: 2.18rem;
      top: .6rem;
}
</style>
