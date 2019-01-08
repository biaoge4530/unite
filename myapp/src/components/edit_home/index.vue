<template>
	<div class="edit_home">
		<Head-com></Head-com>
		<Canvas-com></Canvas-com>
		<router-view/>
		<keep-alive>
			<component :is="footerNavs[footerIndex]"></component>
		</keep-alive>
		<Footer-com/>
	</div>
</template>

<script>
	import Vuex from 'vuex'
	import Footer from './components/footer'
	import Background from './components/background'
	import Broush from './components/broush'
	import Font from './components/font'
	import ImgCom from './components/img'
	import Simg from './components/simg'
	import Head from './components/head'
	import Canvas from './components/canvas'
	export default {
		data(){
			return{
				footerNavs : ["Background","ImgCom","Simg","Font","Broush"]							
			}
		},
		computed:{
			...Vuex.mapState({
				footerIndex:state=>state.edit.footerIndex
			})
		},
		components :{
			"Footer-com" : Footer,
			"Background" : Background,
			"Broush" : Broush,
			"Font" : Font,
			"ImgCom" : ImgCom,
			"Simg" : Simg,
			"Head-com" : Head,
			"Canvas-com" :Canvas
		},
		
	}
</script>

<style scoped lang="scss">
 	.edit_home{
 		height: 100%;
 		width: 100%;
 	}
</style>