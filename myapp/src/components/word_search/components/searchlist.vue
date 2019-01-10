<template>
    <div class="searchlist">
        <div class="list_null">
            <img src="../../../../static/img/search&notice/search@2x.png" alt="">
            <p>寻找你的小伙伴吧...</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
    .searchlist{
        width: 100%;
        padding: 0 .24rem;
        .list_null{
            margin-top: 4.2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            img{
                width: 2.09rem;
                height: 2.13rem;
            }
            p{
                height: .6rem;
                line-height: .6rem;
                color: #616161;
                font-size: .36rem;
                margin-top: .15rem;
            }
        }
    }
</style>
