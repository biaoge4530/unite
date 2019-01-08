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
import Main from "./components-head/main"
import Hot from "./components-head/hot"
import Notebook from "./components-head/notebook"

export default {
  components:{
    "Top-com":Top,
    "Nav-com":Nav,
    "Main-com":Main,
    "Hot-com":Hot
 
  }
}
</script>

<style>

</style>
