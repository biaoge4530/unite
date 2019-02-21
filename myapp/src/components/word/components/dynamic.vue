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


		<div class="dynamic" v-for="(item,index) in value" :key="index">
			<div class="person">
				<div class="headPart">
					<div class="headPic">
						<router-link to="/word-mdn">
							<img :src="item.dongtai.touxiang" alt>
						</router-link>

						<p>{{item.dongtai.uname}}</p>
					</div>
				</div>

				<div class="infos">
					<div class="content">
						<p class="contentText">
							{{item.dongtai.dtText}}
						</p>
						<div class="contentPic">
							<img :src="item.dongtai.dongtaitu" alt="">
						</div>
					</div>
					<div class="readOpr">
						<div class="readTime">
							<div class="read">阅读量：<span>{{item.dongtai.dtLooknum}}</span></div>
							<div class="time">
								{{item.dongtai.dtTime}}
							</div>
						</div>
						<div class="opr">
							<i class="heart">
								<span>{{item.dongtai.dtLikenum}}</span>
							</i>
							<i class="reply">
								<span>999+</span>
							</i>
						</div>
					</div>
					<div class="comment">
						<ul>
							<li v-for="(items,indexs) in item.dongtai.pl">
								<a href="#">{{items.upname}}:</a>
								{{items.pltext}}
							</li>
							<!-- <li><a href="#">{{item.comment_name2}}:</a>{{item.comment2}}</li> -->
						</ul>
						<p class="totalComment">共<span>{{item.dongtai.dtPinglunnum}}</span>条评论&gt;</p>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import Swiper from "swiper";
	import Vuex from "vuex";
	import axios from "../../../axios_xml/request.js";
	export default{
		data(){
			return {
				value:[]
			}
		},
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
		},
		created() {
			axios({
				method:"get",
				url:"/api/world/getDongtai",
				/* headers:{"Content-type":"application/json"} */
			}).then((data)=>{
				this.value = data.uiddongtai;
			})
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
				border-bottom: .01rem solid #ccc;
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
