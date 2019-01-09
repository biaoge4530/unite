<template>
    <div class="hot">
        <div class="hot-left">
            <div class="hot-left-head" id="hot-left-head"></div>
        </div>
        <div class="hot-right">
            <h3 class="hot-right-petName" id="hot-right-petName">昵称</h3>
        </div>
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
     margin-left:.4rem; 
     display: flex;
     .hot-left{
         min-height: 1rem;
        //  background: #cdcdcd;
         width:23%; 
         .hot-left-head{
             width:1rem; 
             height: 1rem;
             border-radius: 50%;
             background: #cccccc;
             margin-left: .5rem;
         }
     }
     .hot-right{
         min-height: 1rem;
         border: 1px solid #000;
         width:77%; 
         .petName{

         }
     }
   }
</style>

