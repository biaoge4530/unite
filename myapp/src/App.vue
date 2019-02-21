<template>
  <div id="app">
    <router-view/>
    <Footer-com v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import store from "./store";
import Footer from "./components/footer";
export default {
created () {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  },
  name: 'App',
  components: {
    "Footer-com":Footer
  }
}
</script>

<style scoped>
#app {
  height: 100%;
  width: 100%;
}
</style>
