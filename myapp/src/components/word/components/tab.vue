<template>
	<div class="tab">
		<router-link to="/word/word_search">
			<div class="search">
				<img src="../../../../static/img/word/icon_sy_ss@2x.png"/>
			</div>
		</router-link>
		
		<ul class="tabs">
			<li v-for="(item,index) in tabs"
				@click="handleToggle(index)"
				:class="activeIndex == index?'active':''">
					<span>{{item}}</span>
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
				tabs:["社区","关注"],
				activeIndex:0
			}
		},
		methods:{
			handleToggle(index){
				this.activeIndex=index;
				this.$emit("handle",index);
			}
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
			width: 40%;
			height: 100%;
			li{
				width: 100%;
				height: 100%;
				font-size: .36rem;
				display: flex;
				justify-content: center;
				align-items: center;
				font-family: PingFang-SC-Regular;
				color: #5D5D5D;
				position: relative;
			}
			.active{
				color: #40B59E;
				&::after{
					content: "";
					position: absolute;
					width: .8rem;
					height: .05rem;
					background: rgb(213, 219, 218);
					bottom: 0;
					left: 50%;
					margin-left: -0.4rem;
				}
			}
		}
	}
</style>