<template>
	<div class="header">
		<div class="back">
			<span @click="handleBack()"></span>
		</div>
		<div class="title">
			发布动态
		</div>
		<div class="release">发布</div>
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

<style scoped lang="scss">
	.header{
		width: 100%;
		height: 1rem;
		background: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 .3rem;
		.back{
			span{
				display: inline-block;
				width: .3rem;
				height: .5rem;
				background: url(../../../../static/img/release_dynamics/2fanhui.png) no-repeat center;
				background-size: 100%;
			}
		}
		.title{
			font-size: .36rem;
			color: #787878;
		}
		.release{
			font-size: .34rem;
			color: #989999;
		}
	}
</style>