<template>
    <div id="footer">
        <ul>
            <li>
                <router-link :to="{name:word}">
                	<div class="word"><img src="static/img/home/wdl_sj@2x.png" alt="" /></div>
                    <span>世界</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'edit_btn'}">
                    <div><img src="static/img/home/wdl_bj@2x.png" alt="" /></div>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'my'}">
                    <div class="my"><img src="static/img/home/wdl_wode@2x.png" alt="" /></div>
                    <span>我的</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style scoped lang="scss" >

    #footer{
        width: 100%;
        height: .99rem;
        position: fixed;
        left: 0;
        bottom:0;
		background:rgba(255,255,255,1);
		border:1px solid rgba(225, 225, 225, 1);
		 ul{
		    display: flex;
		    justify-content: space-between;
		    height: .99rem;
		    li{
		    	width: 100%;height: 100%;
				a{
					height: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
		    };

		};
    }
</style>
