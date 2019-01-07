<template>
	<div class="tab">
		<div class="search">
			<img src="../../../../static/img/word/icon_sy_ss@2x.png"/>
		</div>
		<ul class="tabs">
			<li v-for="(item,index) in tabs">
				<router-link :to="{name:item.name}">
					{{item.title}}
				</router-link>
			</li>
		</ul>
		<div class="notice">
			<img src="../../../../static/img/word/icon_sy_tz@2x.png"/>
		</div>
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
			handleTabs(){

			}
		}
	}
</script>

<style scoped lang="scss">
	.tab{
		width: 100%;
		height: .92rem;
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
			}
		}
	}
</style>