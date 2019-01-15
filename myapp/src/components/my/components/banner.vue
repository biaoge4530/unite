<template>
  <div class="banner">
    <div class="notLogin-banner">
      <div class="top">
          <ul>
            <li><router-link to=""><img src="../../../../static/img/wyc/wdl_sz@2x.png"></router-link></li>
            <li><router-link to="/settings"><img id="iten" src="../../../../static/img/wyc/wdl_sezhida@2x.png"></router-link></li>
          </ul>
      </div>
        <div class="hande">
           <router-link to="/login"><img src="../../../../static/img/wyc/head.png" ></router-link>
        </div>
  </div>
  </div>
</template>

<script>


export default {

}
</script>

<style scoped lang="scss">
.banner{
  width: 100%;
  height: 100%;
}
.notLogin-banner{
  width: 100%;
  height: 4rem;
  background:url("../../../../static/img/wyc/banner_nav.png") no-repeat;
  background-size: 100%;
}
.top{
    width: 100%;
    height: 100%;
    ul{
      margin-left: 80%;
      width: 100%;
      height: .84rem;
      display: flex;
      align-items: center;
      img:nth-child(1){
        width: .46rem;
        height: .44rem;
      }
    }
}
#iten{
  width: .54rem;
  height: .54rem;
  margin-left: .24rem;
 /*  margin-right: .26rem; */
}
.hande{
  margin-left: 38%;
  margin-top: -15%
}
.hande img{
  width: 1.59rem;
  height: 1.59rem;
}
</style>
