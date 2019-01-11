<template>
  <!-- 内容区 -->
  <div class="notebook-body">
    <!-- 两个一个框 -->
    <div class="notebook-father">
      <!-- 手账 -->
      <div class="notebook">
        <div class="notebook-img" id="notebook-img">
          <img src="static/img/word-mdn/tu1@2x.png">
          <p class="notebook-page" id="notebook-page">/手账篇数/</p>
          <p class="notebook-num" id="notebook-nums">1</p> 
        </div>
         <!-- 类别 -->
        <div class="genre">论.喜</div>
      </div>
      <!-- 手账 -->
      <div class="notebook">
        <div class="notebook-img">
          <img src="static/img/word-mdn/tu2@2x.png">
          <p class="notebook-page">/手账篇数/</p>
          <p class="notebook-num">11</p>
        </div>
        <!-- 类别 -->
        <div class="genre">生活</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss"  scoped>
* {
  margin: 0;
  padding: 0;
}
.notebook-body {
  width: 7.6rem;
  margin: 0 auto;
  min-height: 6rem;
  margin-top: 0.2rem;
  .notebook-father {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.2rem;
    .notebook {
      width: 2.56rem;
      height: 3.7rem;
      text-align: center;
      .notebook-img {
        width: 100%;
        height: 3.52rem;
       background: #fff;
        box-shadow: .05rem .05rem  .2rem #eeeeee ;
        & > img {
          width: 2.28rem;
          height: 2.54rem;
          margin:.16rem .12rem .17rem .16rem;
        }
       & > p{
          height: .4rem;
          line-height: .4rem;
          color: #949494;
          font-size:.24rem;
        } 
      }
      // 类型
      .genre{
          color: #949494;
          font-size: .26rem;
          width: 100%;
          height: .66rem;
          line-height: .66rem;
        }
    }
  }
}
</style>

