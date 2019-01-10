<template>
  <div class="notebook-body">
    <div>
      <div class="notebook-left">1</div>
      <div class="notebook-right">2</div>
    </div>

    <div class="notebook-left">3</div>
    <div class="notebook-right">4</div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss"  scoped>
* {
  margin: 0;
  padding: 0;
  //box-sizing: border-box;
}
.notebook-body {
  width: 80%;
  margin: 0 auto;
  background: pink;
  min-height: 6rem;
  //display: flex;
  //justify-content:space-between;
  .notebook-left {
    width: 2.61rem;
    height: 4.4rem;
    background: skyblue;
    margin-bottom: 0.2rem;
    float: left;
  }
  .notebook-right {
    width: 2.61rem;
    height: 4.4rem;
    background: skyblue;
    margin-bottom: 0.2rem;
    float: right;
  }
}
</style>

