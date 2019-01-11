<template>
	<div class="tab">
		<router-link to="/word/word_search">
			<div class="search">
				<img src="../../../../static/img/word/icon_sy_ss@2x.png"/>
			</div>
		</router-link>
		
		<ul class="tabs">
			<li v-for="(item,index) in tabs">
				<router-link :to="{name:item.name}">
					{{item.title}}
				</router-link>
			</li>
		</ul>
		<router-link to="/word/word_notice">
			<div class="notice">
				<img src="../../../../static/img/word/icon_sy_tz@2x.png"/>
			</div>
		</router-link>
		
		<router-view />
	</div>
</template>

<script>
	export default{
		data(){
			return {
				tabs:[
					{
						name:"community",
						title:"社区"
					},
					{
						name:"handAccount",
						title:"手账"
					},
					{
						name:"follow",
						title:"关注"
					}
				]
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	.tab{
		width: 100%;
		height: .92rem;
		background: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.search{
			display: flex;
			justify-content: center;
			align-items: center;
			margin: .22rem .2rem .26rem .23rem;
			img{
				width: .36rem;
				height: .4rem;
			}
		}
		.notice{
			display: flex;
			justify-content: center;
			align-items: center;
			margin: .22rem .26rem .23rem .2rem;
			img{
				width: .36rem;
				height: .4rem;
			}
		}
		.tabs{
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 100%;
			height: 100%;
			flex:1;
			li{
				width: 100%;
				height: 100%;
				font-size: .36rem;
				display: flex;
				justify-content: center;
				align-items: center;
				font-family: PingFang-SC-Regular;
				color: #5D5D5D;
				.router-link-active{
					position: relative;
					display: block;
					width: 100%;
					height: 100%;
					text-align: center;
					line-height: .92rem;
					color: #40B59E;
					&::after{
						content:"";
						display: inline-block;
						position: absolute;
						height: .05rem;
						background: #40B59E;
						left: 0;
						bottom: 0;
					}
				}
			}
		}
	}
</style>