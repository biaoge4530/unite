<template>
    <div class="search_top">
        <div class="input">
            <span></span>
            <input type="text" placeholder="输入你搜索的内容吧...">
        </div>
        <div class="cancel" @click="handleBack()">取消</div>
        
    </div>
</template>

<script>
export default {
    methods: {
        handleBack(){
            this.$router.back();
        }
    },
}
</script>

<style scoped lang="scss">
    .search_top{
        width:100%;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        padding: 0 .24rem;
        align-items: center;
        .input{
            width: 6.1rem;
            height: .6rem;
            display: flex;
            background: #F1F1F1;
            border-radius:10px;
            border:.01rem solid rgba(225, 225, 225, 1);
            justify-content: space-around;
            align-items: center;
            span{
                display: inline-block;
                width: .24rem;
                height: .24rem;
                margin:0 .08rem 0 .3rem;
                background:url(../../../../static/img/search&notice/ss_ss.png) no-repeat center;
                background-size: 100%;
            }
            input{
                height: .4rem;
                border: 0;
                border-left: .01rem solid #C6C6C6;
                flex: 1;
                background: #F1F1F1;
                outline: medium;
                font-size: .26rem;
                color: #C6C6CC;
                padding-left: .1rem;
            }
        }
        .cancel{
            color: #3FB59D;
            font-size: .3rem;
        }
    }
</style>