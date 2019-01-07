<template>
	<div class="edit_btn">
		<div class="toEdit"><router-link :to="{name:'edit_home'}"><img src="static/img/edit/bj_bianxie.png" alt="" /></router-link></div>
		<div class="release"><img src="static/img/edit/bj_fabu.png" alt="" /></div>
		<div class="back"><router-link :to="{name:'home'}"><img src="static/img/edit/bj_quxiao.png" alt="" /></router-link></div>
	</div>
</template>

<script>
</script>

<style scoped lang="scss">
	.edit_btn{
		width: 100%;
		height: 100%;
		.toEdit,.release,.back{
			position: fixed;
			width: 1.2rem;
			height: 1.2rem;
		}
		.toEdit{
			bottom: 3.46rem;
			left: 1.7rem;
		}
		.release{
			bottom: 3.46rem;
			right: 1.7rem;
		}
		.back{
			bottom: .9rem;
			left: 3.15rem;
		}
	}
</style>