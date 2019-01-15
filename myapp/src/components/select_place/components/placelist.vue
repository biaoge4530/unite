<template>
	<div class="whereList">
		<div class="input">
			<span class="search"></span>
			<input type="search" v-model="val" placeholder="搜索附近的位置">
		</div>
		
		<ul>
			<li v-for="(item,index) in local"
				@click="handleSel(index)"
				:class="activeIndex == index?'active':''">{{item}}<span></span></li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				local:["不显示位置","北京市昌平区","北京市朝阳区","北京市东城区"],
				activeIndex:0,
				val:""
			}
		},
		methods:{
			handleSel(index){
				this.activeIndex = index;
				this.val = this.local[index]
				if(index==0){
					this.val="";
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.whereList{
		padding: .2rem .7rem 0;
		.input{
			width: 100%;
			height: .6rem;
			position: relative;
			input{
				width: 100%;
				height: 100%;
				border: none;
				outline: medium;
				background: #eee;
				color: #989999;
				font-size: .26rem;
				padding-left: .7rem;
			}
			.search{
				position: absolute;
				left: .15rem;
				top: .12rem;
				display: inline-block;
				width: .4rem;
				height: .4rem;
				background: url(../../../../static/img/word/ss_ss.png) no-repeat center;
				background-size: 100%;
			}
		}
		ul{
			width: 100%;
			padding-left: .2rem;
			padding-top: .2rem;
			li{
				width: 100%;
				height: .8rem;
				line-height: .8rem;
				border-bottom: .01rem #E5E5E5 solid;
				color: #989999;
				font-size: .26rem;
				
			}
			.active{
				color: #53E0C5;
				span{
					display: inline-block;
					width: .24rem;
					height: .24rem;
					background: #53E0C5;
					border-radius: 50%;
					float: right;
					margin-top: .26rem;
				}
			}
		}
	}
</style>