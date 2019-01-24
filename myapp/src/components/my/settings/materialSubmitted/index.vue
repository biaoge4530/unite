<template>
    <div class="submit">
       <div class="head">
      <img src="../../../../../static/img/my/settings/materialSubmitted/banck.png" alt @click="handleGet()">
      素材投稿
    <div></div>
    </div>
    </div>
</template>/

<script>
export default {
methods: {
    handleGet() {
      this.$router.back();
    }
  },
}
</script>

<style lang="scss">
.submit{
  height: 100%;
    background: url("../../../../../static/img/my/settings/materialSubmitted/materialSubmitted.jpg") repeat;

  .head {
    width: 100%;
    height: 0.88rem;
    font-size: 0.33rem;
    line-height: 0.88rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba($color: #000000, $alpha: 0);
    color:#fff;
   padding: 0.24rem;
    img {
      width: 0.23rem;
      height: 0.39rem;
      display: block;
  
    }
  }
   
}


</style>
