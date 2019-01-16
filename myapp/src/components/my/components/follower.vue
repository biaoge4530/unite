<template>
  <div class="fllower">
    <div class="notlogin">
        <li><span>{{notlogin}}</span></li>
    </div>
      <div class="lists">
        <ul>
          <li><router-link to="">粉丝 {{loves}} |</router-link></li>
          <li><router-link to="">喜欢 {{likes}}</router-link></li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      notlogin:"未登录",
      likes:"--",
      loves:"-- "
    }
  },
  created(){
    let str = JSON.parse(localStorage.phoneData)
      this.notlogin = str.uNickname;
      this.likes = str.likes;
      this.loves = str.loves;
  },
  methods:{

  }
}
</script>

<style  lang="scss">
.notlogin{
  margin-top: .86rem;
  li{
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: .36rem;
    color: #5D5D5D;
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
  font-size: .22rem;
  }
  li:nth-child(2){
    height: .46rem;
    font-size: .22rem;
    }
  }
}
</style>
