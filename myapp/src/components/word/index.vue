<template>
    <div class="word">
        <Tab-com></Tab-com>
		<Banner-com></Banner-com>
		<Dynamic-com></Dynamic-com>
        <router-view></router-view>
    </div>
</template>

<script>
	import Tab from "./components/tab.vue";
	import Banner from "./components/banner.vue";
	import Dynamic from "./components/dynamic.vue";
	import Vuex from "vuex";
	export default {
		created () {
			this.handleWordData();
		},
		components:{
			"Tab-com":Tab,
			"Banner-com":Banner,
			"Dynamic-com":Dynamic
		},
		methods:{
			...Vuex.mapActions({
				handleWordData:"handleWordData"
			})
		}
	    
	}
</script>


<style lang="">
	
</style>
