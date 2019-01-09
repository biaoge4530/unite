<template>
	<div class="top">
		<div class="back" @click="handleBack()">
			取消
		</div>
		<div class="isPublic">
			选择可见
		</div>
		<div class="finish">
			完成
		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			handleBack(){
				this.$router.back();
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.top{
		width: 100%;
		height: 1rem;
		background: #fff;
		padding: 0 .25rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.back{
			color: #989999;
			font-size: .32rem;
		}
		.isPublic{
			color: #5D5D5D;
			font-size: .34rem;
		}
		.finish{
			color: #989999;
			font-size: .32rem;
		}
	}
</style>