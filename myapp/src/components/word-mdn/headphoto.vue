<template>
    <div id="app">
        <Top-com/>
        <Nav-com/>
        <Main-com/>
    </div>
</template>

<script>
import Top from "./components-head/top"
import Nav from "./components-head/nav"
import Hot from "./components-head/hot"
import Notebook from "./components-head/notebook"
import BScroll from 'better-scroll'
export default {
  components:{
    "Top-com":Top,
    "Nav-com":Nav,
    "Hot-com":Hot,
    "BScroll-com":BScroll
  }
}
</script>

<style>

</style>
