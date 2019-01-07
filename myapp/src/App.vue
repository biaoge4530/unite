<template>
  <div id="app">
    <router-view/>
    <Footer-com v-show="$route.meta.showFooter"/>
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

<style scoped>
	#app{
		height: 100%;
		width: 100%;
	}
</style>
