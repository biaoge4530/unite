<template>
	<ul>
		<li @click="editOption(0)">
			<div><img src="static/img/edit/bz@2x(1).png" alt="" /></div>
			<span>壁纸</span>
		</li>
		<li @click="editOption(1)">			
			<div><img src="static/img/edit/zhaopian@2x.png" alt="" /></div>
			<span>图片</span>
		</li>
		<li @click="editOption(2)">
			
			<div><img src="static/img/edit/tiez1@2x.png" alt="" /></div>
			<span>贴纸</span>
		</li>
		<li @click="editOption(3)">
			 
			<div><img src="static/img/edit/wenzishezhi-@2x.png" alt="" /></div>
			<span>文字</span>
		</li>
		<li @click="editOption(4)">
			
			<div><img src="static/img/edit/icon-checkin@2x.png" alt="" /></div>
			<span>画笔</span>
		</li>
	</ul>
</template>

<script>
	import Vuex from 'vuex'
	export default {
		methods:{
			...Vuex.mapMutations({
				editOption:"edit/editOption"
			})
		},
	}
</script>

<style scoped lang="scss">
ul{
  	width: 100%;
  	height: .98rem;
  	background: #ffffff;
	box-shadow:0px -2px 2px 0px rgba(204,204,204,1);
	position: fixed;
	bottom: 0;left: 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
	z-index: 10;
	div{
		margin-bottom: .1rem;
		img{
			width: .4rem;
			height: .4rem;
		}		
	}
}
</style>