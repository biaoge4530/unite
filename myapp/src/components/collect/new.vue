<template>
  <div class="new">
    <div class="head">
      <ul>
        <li>
          <img class="back" src="static/img/collect/back.png" alt>
        </li>
        <li class="pull">
          <span>新增手账本</span>
        </li>
        <li>
          <span>确定</span>
        </li>
      </ul>
    </div>
    <div class="newName">
        <input type="text">
    </div>
    <h3>封面</h3>
    <div class="cover">
        
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.new {
  width: 100%;
  height: 100%;
  background: #ffffff;
  .head ul {
    display: flex;
    padding: 0 0.24rem;
    justify-content: space-between;
    height: 0.88rem;
    align-items: center;
  }
}
</style>
