<template>
    <div class="notice_top">
        <div class="back" @click="handleBack()"></div>
        <ul class="notice_title">
            <li
                v-for="(item,index) in navs"
                @click="handleToggle(index)"
                :class="activeIndex == index?'active':''"
            >{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            navs:["通知","评论"],
            activeIndex:0
        }
    },
    methods: {
        handleBack(){
            this.$router.back();
        },
        handleToggle(index){
            this.activeIndex=index;
            this.$emit("handle",index);
        }
    },
}
</script>


<style scoped lang="scss">
    .notice_top{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .back{
            position: absolute;
            left: .2rem;
            top: .25rem;
            width: .22rem;
            height: .38rem;
            background: url(../../../../static/img/release_dynamics/2fanhui.png) no-repeat center;
            background-size: 100%;
        }
        .notice_title{
            display: flex;
            align-items: center;
            li{
                margin: 0 .2rem;
                color: #5D5D5D;
                font-size: .34rem;
                padding: .1rem 0;
                border-bottom: .04rem solid #fff;
            }
            .active{
                color: #40B59E;
                border-bottom: .04rem solid #40B59E;
            }
        }
    }
</style>