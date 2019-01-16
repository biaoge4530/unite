<template>
    <div class="notice_list">
        <div class="notice_null">
            <img src="../../../../static/img/search&notice/notice@2x.png" alt="">
            <p>你还没有通知哦...</p>
        </div>

        <div class="notice"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
    .notice_list{
        width: 100%;
        .notice_null{
            margin-top: 4.2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
                width: 2.23rem;
                height: 1.6rem;
            }
            p{
                color: #616161;
                font-size: .36rem;
                margin-top: .3rem;
            }
        }
    }
</style>