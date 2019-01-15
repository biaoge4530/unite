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
    <div class="notebook-father">
      <!-- 手账 -->
      <div class="notebook">
        <div class="notebook-img" id="notebook-img">
          <img src="static/img/word-mdn/tu1@2x.png">
          <p class="notebook-page" id="notebook-page">/手账篇数/</p>
          <p class="notebook-num" id="notebook-nums">1</p>
        </div>
      </div>
      <!-- 手账 -->
      <div class="notebook">
        <div class="notebook-img" id="notebook-img">
          <img src="static/img/word-mdn/tu1@2x.png">
          <p class="notebook-page" id="notebook-page">/手账篇数/</p>
          <p class="notebook-num" id="notebook-nums">1</p>
        </div>
      </div>
      <div class="notebook">
        <div class="notebook-img">
          <img src="static/img/word-mdn/tu2@2x.png">
          <p class="notebook-page">/手账篇数/</p>
          <p class="notebook-num">11</p>
        </div>
      </div>
    </div>
    <div class="newPermission">
      <div class="Permission">
        <span>权限设置</span>
      </div>
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
  .newName {
    padding: 0.42rem;
    input {
      width: 6.6rem;
      height: 0.8rem;
      background: #cccccc;
      border: 0.01rem dashed #000;
    }
  }
  h3 {
    font-size: 0.3rem;
    font-family: PingFang-SC-Regular;
    font-weight: bold;
    color: rgba(94, 94, 94, 1);
    padding-left: 0.2rem;
    margin: 0.66rem 0 0.38rem;
  }
  .notebook-father {
    width: 100%;
    padding: 0 0.41rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .notebook {
      width: 30%;
      width: 1.96rem;
      height: 2.66rem;
      padding-top: 0.24rem;
      border: 1px solid #ccc;
      border-radius: 0.1rem;
      .notebook-img {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 1.48rem;
          height: 1.66rem;
        }
        p {
          font-size: 0.22rem;
          font-family: PingFang-SC-Regular;
          font-weight: bold;
          color: rgba(96, 96, 96, 1);
        }
      }
    }
  }
  .newPermission {
    padding: 0 0.42rem;
    .Permission {
      width: 6.6rem;
      height: 0.8rem;
      border: 0.01rem dashed #000;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
