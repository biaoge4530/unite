<template>
  <div class="unlisted">
    <Banner-com/>
    <Follower-com/>
    <Stick-com/>
    <router-view></router-view>
  </div>
</template>

<script>
import Banner from "./components/banner";
import Follower from "./components/follower";
import Stick from "./components/stick";
import Vuex from "vuex";
export default {
    components:{
      "Banner-com":Banner,
      "Follower-com":Follower,
      "Stick-com":Stick,
    }
}
</script>

<style lang="scss">

</style>
