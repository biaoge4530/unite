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
import store from "../../store"
import {getCookie} from "../../utils/Auth.js"
export default {
  /* created(){
    console.log(getCookie())
  }, */
  components: {
    "Banner-com": Banner,
    "Follower-com": Follower,
    "Stick-com": Stick
  }
};
</script>


<style>


</style>
