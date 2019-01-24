<template>
	<div class="main">

		<div class="banner">
			<div class="swiper-container banner-container" ref="banner">
				<div class="swiper-wrapper">
					<!-- <div class="swiper-slide" > -->
					<div class="swiper-slide" v-for="(item,index) in banners" :key="index">
						<img :src="item.url" alt="">
					</div>
				</div>
				<div class="swiper-pagination banner-pagination"></div>
			</div>
		</div>
		
		<div class="dynamic">
			<div class="person">
				<div class="headPart">
					<div class="headPic">
						<router-link to="/word-mdn">
							<img src="../../../../static/img/word/touxiang_sy@2x.png">
						</router-link>
						<p>昵称</p>
					</div>
				</div>
				
				<div class="infos">
					<div class="content">
						<p class="contentText">
							内容：我是谁？我在哪？我是谁？我在哪？我是谁？我在哪？我是谁？我在哪？
						</p>
						<div class="contentPic">
							<img src="../../../../static/img/word/tp_sy@2x.png" alt="">
						</div>
					</div>
					<div class="readOpr">
						<div class="readTime">
							<div class="read">阅读量：<span>999+</span></div>
							<div class="time">
								<span>2018</span>年
								<span>1</span>月
								<span>1</span>日
							</div>
						</div>
						<div class="opr">
							<i class="heart">
								<span>99+</span>
							</i>
							<i class="reply">
								<span>999+</span>
							</i>
						</div>
					</div>
					<div class="comment">
						<ul>
							<li><a href="#">昵称:</a>今天天气好晴朗，处处好风光</li>
							<li><a href="#">昵称:</a>怎么做的呀？</li>
						</ul>
						<router-link to="/word/word_notice">
							<p class="totalComment">共<span>10</span>条评论&gt;</p>
						</router-link>
						
					</div>
				</div>
			</div>
		</div>
		<div class="dynamic">
			<div class="person">
				<div class="headPart">
					<div class="headPic">
						<img src="../../../../static/img/word/touxiang_sy@2x.png">
						<p>昵称</p>
					</div>
				</div>
				
				<div class="infos">
					<div class="content">
						<p class="contentText">
							内容：我是谁？我在哪？我是谁？我在哪？我是谁？我在哪？我是谁？我在哪？
						</p>
						<div class="contentPic">
							<img src="../../../../static/img/word/tp_sy@2x.png" alt="">
						</div>
					</div>
					<div class="readOpr">
						<div class="readTime">
							<div class="read">阅读量：<span>999+</span></div>
							<div class="time">
								<span>2018</span>年
								<span>1</span>月
								<span>1</span>日
							</div>
						</div>
						<div class="opr">
							<i class="heart">
								<span>99+</span>
							</i>
							<i class="reply">
								<span>999+</span>
							</i>
						</div>
					</div>
					<div class="comment">
						<ul>
							<li><a href="#">昵称:</a>今天天气好晴朗，处处好风光</li>
							<li><a href="#">昵称:</a>怎么做的呀？</li>
						</ul>
						<p class="totalComment">共<span>10</span>条评论&gt;</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	import Swiper from "swiper";
	import Vuex from "vuex";
	export default{
		computed:{
			...Vuex.mapState({
				banners:state=>state.Word.banners,
			})
		},
		mounted(){
			setTimeout(()=>{
				new Swiper(this.$refs.banner,{
					loop:true,
					autoplay:{
						disableOnInteraction:false,
					},
					preventClicks:false,
					pagination:{
						el:'.banner-pagination',
					},
				})
			},300)
		}
	};
</script>

<style scoped lang="scss">
	.main{
		height: 100%;
		overflow:auto;
		padding-bottom: 1rem;
		.banner{
			width: 100%;
			height: 3rem;
			.banner-container{
				width: 100%;
				height: 100%;
				.swiper-slide{
					width: 100%;
					height: 100%;
					img{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		.dynamic{
			width: 100%;
			margin-bottom: .4rem;
			.person{
				padding: .3rem .24rem 0;
				background: #fff;
				border-bottom: .06rem solid #ccc;
				.headPart{
					width: 100%;
					height: .8rem;
					color: #222222;
					font-size: .3rem;
					font-weight: bold;
					.headPic{
						display: flex;
						align-items: center;
						img{
							width: .8rem;
							height: .8rem;
							border-radius: 50%;
						}
						p{
							margin-left: .45rem;
						}
					}
				}
				.infos{
					width: 100%;
					padding-left: 1.25rem;
					.content{
						width: 100%;
						.contentText{
							width: 100%;
							font-size: .28rem;
							color: #606060;
							line-height: .34rem;
						}
						.contentPic{
							img{
								width: 2.6rem;
								height: 3.9rem;
								margin-top: .2rem;
							}
							
						}
					}
					.readOpr{
						width: 100%;
						display: flex;
						align-items: center;
						margin-top: .2rem;
						.readTime{
							width: 100%;
							color: #848484;
						}
						.opr{
							width: 100%;
							display: flex;
							justify-content: space-around;
							i{
								position: relative;
								display:inline-block;
								width: .36rem;
								height: .36rem;
								background: url(../../../../static/img/word/hover_sy_sc@2x.png) no-repeat 0 -0.38rem;
								background-size: 100%;
								span{
									display: inline-block;
									position: absolute;
									top: 0;
									left: .36rem;
									color: #848484;
									font-style: normal;
									font-size: .18rem;
								}
							}
							.heart{
								background: url(../../../../static/img/word/icon_sy_dz@2x.png) no-repeat 0 -0.32rem;
								background-size: 100%;
							}
							.reply{
								background: url(../../../../static/img/word/icon_sy_pl@2x.png) no-repeat 0 0;
								background-size: 100%;
							}
						}
					}
					.comment{
						margin-top: .15rem;
						font-size: .26rem;
						color: #616161;
						ul{
							li{
								line-height: .4rem;
								a{
									color: #76D1BE;
									font-size: .26rem;
								}
							}
						}
						p{
							color: #868686;
							font-size: .24rem;
							line-height: .36rem;
						}
					}
				}
			}
		}
	}
</style>