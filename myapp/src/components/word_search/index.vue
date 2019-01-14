<template>
    <div class="search">
        <SearchTop-com></SearchTop-com>
        <SearchList-com></SearchList-com>
    </div>
</template>

<script>
import Search_top from "./components/search_top.vue";
import Search_list from "./components/searchlist.vue";
export default {
    components:{
        "SearchTop-com":Search_top,
        "SearchList-com":Search_list,
    }
}
</script>

<style scoped lang="scss">
    
</style>