<template>
  <div class="checkoutList">
    <div class="mask"></div>
    <ul>
      <li>公开手账本</li>
      <li></li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.checkoutList {
  .mask {
    width: 100%;
    height: 100%;
    background: rgb(145, 145, 135);
    opacity: 0.1;
    position: absolute;
    top: 0;
    left: 0;
  }
  ul {
    width: 3.75rem;
    position: absolute;
    top: 1.3rem;
    left: 22%;
    li {
      width: 3.75rem;
      height: 0.9rem;
      background: #ffffff;
      border-bottom: 1px solid #b9bdbc;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #5d5d5d;
      font-size: .36rem;
      &:first-child{
        border-radius: .12rem .12rem 0 0;
      }
      &:last-child{
        border-radius: 0 0 .12rem .12rem;
      }
    }
  }
}
</style>
