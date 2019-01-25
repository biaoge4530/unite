<template>
  <div class="authority">
    <div class="mask"></div>
    <ul>
      <li>公开</li>
      <li>私密</li>
      <li>取消</li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.authority {
  .mask {
    width: 100%;
    height: 100%;
    background: rgb(78, 78, 77);
    opacity: 0.1;
    position: absolute;
    top: 0;
    left: 0;
  }
  ul {
    width: 100%;
    position: absolute;
    bottom: 0rem;
    left: 0;
    li {
      width: 100%;
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
