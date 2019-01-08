<template>
    <div class="hot">
        <div class="hot-left">
            <div class="hot-left-head"></div>
        </div>
        <div class="hot-right"></div>
       <div
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
   .hot{
     width:90%;
     min-width:6.75rem;
     background: pink;
     margin-left:.4rem; 
     display: flex;
     .hot-left{
         min-height: 1rem;
         background: #cdcdcd;
         width:27%; 
         .hot-left-head{
             width:1rem; 
         }
     }
     .hot-right{
         min-height: 1rem;
         background:red;
         width:73%; 
     }
   }
</style>

