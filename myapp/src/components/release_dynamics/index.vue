<template>
	<div class="releaseDynamics">
		<Header-com></Header-com>
		<Main-com></Main-com>
		<Sel-com></Sel-com>
	</div>
</template>

<script>
	import Header from "./components/header.vue";
	import Main from "./components/main.vue";
	import Sel from "./components/sel.vue";
	export default{
		components:{
			"Header-com":Header,
			"Main-com":Main,
			"Sel-com":Sel
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.releaseDynamics{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>