<template>
    <div id="footer">
        <ul>
            <li>
                <router-link :to='{name:"word"}'>
                	<div class="word"><img src="static/img/word/wdl_sj@2x.png" alt="" /></div>
                    <span>世界</span>
                </router-link>
            </li>
            <li>
                <router-link :to='{name:"edit_btn"}'> 
                    <div class="edit_btn"><img src="static/img/word/wdl_bj@2x.png" alt="" /></div>
                </router-link>
            </li>
            <li>
                <router-link :to='{name:"my"}'>
                    <div class="my"><img src="static/img/word/wdl_wode@2x.png" alt="" /></div>
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
		    	width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                .word{
                    img{
                        width: .45rem;
                        height: .36rem;
                    }
                }
                .edit_btn{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width: .98rem;
                        height: .98rem;
                    }
                }
                .my{
                    img{
                        width: .45rem;
                        height: .45rem;
                    }
                }
		    };

		};
    }
</style>
