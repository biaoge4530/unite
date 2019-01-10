<template>
	<div class="sel">
		<div class="selPic">
			<img src="../../../../static/img/release_dynamics/fb_souzhang@2x.png">
			<img src="../../../../static/img/release_dynamics/fb_tupian@2x.png">
		</div>
		<div class="conNum">
			<span>0</span>/140
		</div>
	</div>
</template>
<script>
	export default{
		
	}
</script>

<style scoped="scoped" lang="scss">
	.sel{
		width: 100%;
		padding: 0 .3rem;
		height: .98rem;
		background: #F0F2F2;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.selPic{
			flex: 1;
			display: flex;
			img{
				width: .48rem;
				height: .48rem;
				margin-right: .46rem;
			}
		}
		.conNum{
			color: #787878;
			font-size: .24rem;
		}
	}
</style>