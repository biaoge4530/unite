<template>
	<div class="background">
		<div class="bgbox">
			<ul>
				<li></li>
				<li class="my">我的</li>
				<li class="more">更多</li>
				<li><img src="static/img/edit/toTop.png" alt="" /></li>
			</ul>
		</div>
		
	</div>
</template>

<script>
</script>

<style scoped lang="scss">
	.background{
		width: 100%;
		height: 100%;
		position: fixed;
		bottom: .98rem;left: 0;
		.bgbox{
			margin-top: 5rem;
			width: 100%;
			height: 8rem;
			background: #FFFFFF;
			border-radius:10px;
			z-index: 100;
			ul{
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 1.2rem;
				padding: 0 .24rem;
				.my,.more{
					width: 96px;
					height: 48px;
					font-size:.28rem;
					font-family:PingFang-SC-Regular;
					font-weight:bold;
					color:rgba(96,96,96,1);
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.active{
					color:rgba(118,209,190,1);
					background: url(../../../../static/img/edit/myactive.png);
				}
			}
		}
	}
</style>