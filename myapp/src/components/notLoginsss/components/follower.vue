<template>
  <div class="fllower">
    <div class="notlogin">
        <li><span>未登录</span></li>
    </div>
      <div class="lists">
        <ul>
          <li><router-link to="">粉丝&nbsp; -- |</router-link></li>
          <li><router-link to="">喜欢 --</router-link></li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style  lang="scss">
.notlogin{
  margin-top: .86rem;
  li{
    font-size: .36rem;
    color: #5D5D5D;
    margin-left: 42%;
  }
}
.lists{
  width: 100%;
  height: 100%;
  ul{
    display: flex;
    width: 100%;
    height: .46rem;
    font-size: .2rem;
    justify-content: center;
    margin-top: .13rem;
  li:nth-child(1){
  margin-right: .15rem;
  height: .46rem;
  font-size: .2rem;
  }
  li:nth-child(2){
    height: .46rem;
    font-size: .2rem;
    }
  }
}
</style>
