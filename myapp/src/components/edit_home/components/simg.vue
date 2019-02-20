<template>
	<div class="simg">
		<ul class="head">
			<li></li>
			<li class="my">我的</li>
			<li class="more">更多</li>
			<li>
			<img src="static/img/edit/toTop.png" alt>
			</li>
		</ul>
		<ul class="big">
			 <li v-for="(item,index) in simgList" @click="addSimg(index)">
				<img :src="item.imgUrl" alt>
			</li>
		</ul>
	</div>
</template>

<script>
import BScroll from "better-scroll";
import Vuex from "vuex"
export default {
  methods:{
		...Vuex.mapMutations({
			addSimg:"edit/addSimg",
		}),
		...Vuex.mapActions({
		   getSimg:"edit/getSimg"
	   }),
	},
	computed:{
		...Vuex.mapState({
			simgList:state=>state.edit.simgList,
		})
	},
   created(){
    this.getSimg()
  },
};
</script>

<style lang="scss" scoped>
.simg{
	position: absolute;
	width: 100%;
	bottom: .98rem;left: 0;
	background: #ffffff;
	z-index: 10;
	.head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 1.2rem;
      padding: 0 0.24rem;
	}
	.big{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		li{
			margin: .13rem .12rem;
			img{
				height: 1.2rem;
				width: 1.2rem;
			}
		}
	}
}
</style>
