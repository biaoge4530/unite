<template>
    <div class="pages">
        <div  class="add">加页</div>
        <div class="reduce">减页</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .pages{
        display: flex;
        height: 1.08rem;
        width: 100%;
        justify-content: center;
        align-items: center;
        .add,.reduce{
            background:url(../../../../static/img/edit/pages.png);
            width: .96rem;
            height: .48rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 .39rem;
            font-family:PingFang-SC-Light;
            font-weight:bold;
            color:rgba(255,255,255,1);
        }
    }
</style>

