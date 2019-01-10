<template>
	<div class="where">
		所在位置
		<div class="cancel" @click="handleBack()">
			取消
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			handleBack(){
				this.$router.back();
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.where{
		width: 100%;
		height: 1rem;
		background: #fff;
		color: #5D5D5D;
		font-size: .34rem;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		box-shadow:0px 5px 5px 0px rgba(108,109,109,0.2);
		.cancel{
			position: absolute;
			left: .25rem;
			top:.3rem;
			color: #989999;
		}
	}
</style>