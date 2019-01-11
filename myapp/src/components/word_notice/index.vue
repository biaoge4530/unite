<template>
    <div class="notice">
        <Noticetop-com></Noticetop-com>
        <Noticelist-com></Noticelist-com>
    </div>
</template>

<script>
    import NoticeTop from "./components/notice_top.vue";
    import NoticeList from "./components/notice_list.vue";
    export default {
        components:{
            "Noticetop-com":NoticeTop,
            "Noticelist-com":NoticeList,
        }
    }
</script>


<style scoped lang="scss">
    .notice{
        padding: 0 .24rem;
    }
</style>