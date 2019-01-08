<template>
  <div id="app">
    <router-view/>
<<<<<<< HEAD
    <Footer-com v-show="$route.meta.showFooter"/>
=======
    <Footer-com v-show="this.$route.meta.flag"/>
>>>>>>> wangyancong
  </div>
</template>

<script>
import Footer from "./components/footer";
export default {
  name: 'App',
  components: {
    "Footer-com":Footer
  }
}
</script>

<<<<<<< HEAD
<style scoped>
	#app{
		height: 100%;
		width: 100%;
	}
=======
<style>

>>>>>>> wangyancong
</style>
