<template>
    <div class="word">
        <Tab-com @handle="handleToggle"></Tab-com>
		<component :is="contentShow"></component>
        <router-view></router-view>
    </div>
</template>

<script>
	import Tab from "./components/tab.vue";
	import Dynamic from "./components/dynamic.vue";
	import Follow from "./components/follow.vue";
	import Vuex from "vuex";
	export default {
		components:{
			"Tab-com":Tab,
			"Dynamic-com":Dynamic,
			"Follow-com":Follow
		},
		methods:{
			handleToggle(index){
				switch(index){
					case 0:
						this.contentShow = "Dynamic-com";
						break;
					case 1:
						this.contentShow = "Follow-com";
						break;
				}
			}
		},
	    data(){
			return{
				contentShow:"Dynamic-com"
			}
		}
	}
</script>


<style lang="">
	.word{
		width: 100%;
		height: 100%;
		overflow-x: hidden; 
	}
</style>
