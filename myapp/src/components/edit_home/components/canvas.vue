<template>
	<div class="canvas">
		<div class="bgImg"><img :src="bgList[imgIndex] | srcs" alt=""></div>
	</div>
</template>

<script>
import Vuex from 'vuex'
export default {
	data() {
		return {
		bgList: [
			"bgImg1.png",
			"bgImg2.png",
			"bgImg3.png",
			"bgImg4.png",
			"bgImg5.png",
			"bgImg6.png",
			"bgImg7.png",
			"bgImg8.png",
			"bgImg9.png"
		]
		};
	},
	computed:{
		...Vuex.mapState({
			imgIndex:state=>state.edit.imgIndex
		})
	},
	filters: {
		srcs(val) {
			return "static/img/edit/bgImgs/" + val;
		}
	},
}
</script>


<style scoped lang="scss">
	.canvas{
		height: 10rem;
		width: 100%;
		.bgImg img{
			width: 100%;
			height: 10rem;
			position: absolute;
			img,p,{
				position: absolute;
				z-index: 10;
			}
		}
	}
</style>