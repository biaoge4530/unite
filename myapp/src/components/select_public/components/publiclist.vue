<template>
	<div class="stateList">
		<ul>
			<li>
				<div class="state">
					<h2>公开</h2>
					<p>所有人可见</p>
				</div>
				<span></span>
			</li>
			<li>
				<div class="state">
					<h2>关注可见</h2>
					<p>关注后可见</p>
				</div>
				<span></span>
			</li>
			<li>
				<div class="state">
					<h2>私密</h2>
					<p>仅自己可见</p>
				</div>
				<span></span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped="scoped" lang="scss">
	.stateList{
		padding: .15rem .6rem 0;
		ul{
			width: 100%;
			li{
				width: 100%;
				height: 1.1rem;
				border-bottom: #C7DCD9 1px solid;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.state{
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					h2{
						font-size: .32rem;
						color: #7B8381;
						font-weight: normal;
					}
					p{
						font-size: .24rem;
						color: #989999;
					}
				}
				span{
					display: inline-block;
					width: .4rem;
					height: .28rem;
					background: url(../../../../static/img/word/icon_DH.png) no-repeat center;
				}
			}
		}
	}
</style>