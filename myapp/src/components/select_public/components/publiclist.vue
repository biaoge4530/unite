<template>
	<div class="stateList">
		<ul>
			<li v-for="(item,index) in isPublic"
				@click="handleSel(index)"
				:class="activeIndex==index?'active':''">
				<div class="state">
					<h2>{{item.state}}</h2>
					<p>{{item.des}}</p>
				</div>
				<span></span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				isPublic:[
					{
						state:"公开",
						des:"所有人可见"
					},
					{
						state:"关注可见",
						des:"关注后可见"
					},
					{
						state:"私密",
						des:"仅自己可见"
					}
				],
				activeIndex:0
			}
		},
		methods:{
			handleSel(index){
				this.activeIndex = index;
			}
		}
		
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
			}
			.active{
				.state{
					h2{
						color: #53E0C5;
					}
				}
				span{
					display: inline-block;
					width: .4rem;
					height: .28rem;
					background: url(../../../../static/img/word/icon_DH.png) no-repeat center;
					background-size: 100%;
				}
			}
		}
	}
</style>