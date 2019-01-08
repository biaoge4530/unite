<template>
	<div class="banner">
		<div class="swiper-container banner-container" ref="banner">
			<div class="swiper-wrapper">
				<!-- <div class="swiper-slide" > -->
				<div class="swiper-slide" v-for="(item,index) in banners" >
					<img :src="item.url" alt="">
					<img src="http://h.hiphotos.baidu.com/image/h%3D300/sign=f2db86688ccb39dbdec06156e01709a7/2f738bd4b31c87018e9450642a7f9e2f0708ff16.jpg">
				</div>
			</div>
			<div class="swiper-pagination banner-pagination"></div>
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
	.banner{
		width: 100%;
		height: 3rem;
		background: #ff0;
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
</style>