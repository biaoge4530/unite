<template>
	<div class="main">
		<textarea placeholder="分享这一刻的想法..."></textarea>
		<div class="position">
			<router-link to="/select_place">
				<div class="place">
					<span></span>
					你在哪里？
				</div>
			</router-link>
			
			<router-link to="/select_public">
				<div class="open">
					公开
				</div>
			</router-link>
			
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped lang="scss">
	.main{
		flex: 1;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		textarea{
			height: 80%;
			width: 100%;
			padding: .1rem .3rem;
			font-size: .26rem;
			color: #989999;
			border: none;
			outline: medium;
		}
		.position{
			width: 100%;
			height: 1rem;
			padding: 0 .24rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: #fff;
			.place{
				color: #787878;
				font-size: .2rem;
				display: flex;
				justify-content: center;
				padding: .1rem .2rem;
				background: #eee;
				border-radius: .4rem;
				align-items: center;
				span{
					margin-right: .1rem;
					display: inline-block;
					width: .16rem;
					height: .2rem;
					background: url(../../../../static/img/release_dynamics/fb_dw@2x.png) no-repeat center;
					background-size: 100%;
				}
			}
			.open{
				padding: .1rem .3rem;
				background: #eee;
				color: #787878;
				font-size: .2rem;
				border-radius: .4rem;
			}
		}
	}
</style>