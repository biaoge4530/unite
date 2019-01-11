<template>
	<div class="img">
		<div class="fromCamera">
			<span>相机</span>
		</div>
		<div class="fromPhoto">
			<span>从相册中选取</span>
		</div>
	</div>
</template>

<script>
import Vuex from 'vuex'
export default {
	data(){
		return{
			
		}
		
	},
	computed:{
	...Vuex.mapState({
		footerIndex:state=>state.edit.footerIndex,
	})
},
}

</script>
<style lang="scss" scoped>
.img{
	position: absolute;
	width: 100%;
	bottom: .98rem;left: 0;
	.fromCamera,.fromPhoto{
		height:.84rem;
		background:rgba(255,255,255,1);
		border-radius:.1rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
