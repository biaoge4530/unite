<template>
    <div class="commit_list">
        <div class="list_null">
            <img src="../../../../static/img/search&notice/commit@2x.png" alt="">
            <p>还没有人给你评论哦...</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped lang="scss">
    .commit_list{
        
        width: 100%;
        .list_null{
            width: 100%;
            margin-top: 4.2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                width: 2.22rem;
                height: 1.93rem;
            }
            p{
                margin-top: .2rem;
                font-size: .36rem;
                color: #616161;
            }
        }
    }
</style>
