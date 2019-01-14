<template>
    <div id="app">
        <Top-com/>
        <Nav-com/>
    </div>  
</template>

<script>
import Top from "./components-head/top"
import Nav from "./components-head/nav"
import Notebook from "./components-head/notebook"


export default {
  components:{
    "Top-com":Top,
    "Nav-com":Nav,

  }
}
</script>

<style>

</style>
