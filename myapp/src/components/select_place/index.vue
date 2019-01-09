<template>
	<div class="place">
		<Top-com></Top-com>
		<PlaceList-com></PlaceList-com>
	</div>
</template>

<script>
	import Top from "./components/top.vue";
	import PlaceList from "./components/placelist.vue";
	export default{
		components:{
			"Top-com":Top,
			"PlaceList-com":PlaceList,
		}
	}
</script>

<style scoped="scoped" lang="scss">
	
</style>