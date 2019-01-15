<template>
    <div class="notice">
        <Noticetop-com @handle="handleToggle"></Noticetop-com> 
        <component :is="contentShow"></component>
    </div>
</template>

<script>
    import NoticeTop from "./components/notice_top.vue";
    import NoticeList from "./components/notice_list.vue";
    import CommitList from "./components/commit_list.vue";
    export default {
        components:{
            "Noticetop-com":NoticeTop,
            "Noticelist-com":NoticeList,
            "CommitList-com":CommitList,
        },
        data(){
            return{
                contentShow:"Noticelist-com",
            }
        },
        methods: {
            handleToggle(index){
                switch(index){
                    case 0:
                        this.contentShow = "Noticelist-com";
                        break;
                    case 1:
                        this.contentShow = "CommitList-com";
                        break;
                }
            }
        },  
    }
</script>


<style scoped lang="scss">
    .notice{
        padding: 0 .24rem;
    }
</style>