<template>
	<div class="selectPublic">
		<Top-com></Top-com>
		<PublicList-com></PublicList-com>
	</div>
</template>

<script>
	import Top from "./components/top.vue";
	import Publiclist from "./components/publiclist.vue";
	export default {
		components:{
			"Top-com":Top,
			"PublicList-com": Publiclist,
		}	
	}
</script>

<style scoped="scoped" lang="scss">
	
</style>