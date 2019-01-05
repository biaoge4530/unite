<template>
    <div class="home">
        <Head-com/>
        <Board-com/>
        <Main-com/>
    </div>
</template>

<script>
import Head from "./components/head";
import Board from "./components/board";
import Main from './components/main';
import Vuex from "vuex";
export default {
    created() {
         
    },
    components: {
        "Head-com":Head,
        "Board-com":Board,
        "Main-com":Main
    },
    methods: {
        ...Vuex.mapActions({
           
        })
    },
}
</script>


<style lang="">
    
</style>