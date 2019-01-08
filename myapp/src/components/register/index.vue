<template>
  <div class="regStat">
        <div class="register">
        <div>
          <ul>
            <li @click="handleGet()">后退</li>
            <li>注册</li>
          </ul>
        </div>
      </div>

      <div class="registerPhone">
        <div>
            <img src="../../../static/img/wyc/phone_2.png"/>
            <input type="text" placeholder="请输入手机号"/>
        </div>

        <div>
            <img src="../../../static/img/wyc/encrypt_2.png"/>
            <input type="text" placeholder="请输入验证码" maxlength="6"/>
            <div class="obtainCode">
              <span v-show="show" @click="handleCode()">获取验证码</span>
              <span v-show="!show" class="count">{{count}}s 后重新获取</span>
            </div>
        </div>

        <div>
            <img src="../../../static/img/wyc/yz.png"/>
            <input type="text" placeholder="请输入密码"/>
        </div>

      </div>


      <div class="bottom">
        <button @click="hand()">注册</button>
      </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      show:true,
      count:"",
      time:null,
    }
  },
  methods:{
    handleCode(){
      const timeCount = 60;
      if(!this.timer){
        this.count = timeCount;
        this.show = false;
        this.timer = setInterval(()=>{
          if(this.count > 0 && this.count <= timeCount ){
            this.count--;
          }else{
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
             alert()
          }
        },1000)
      }
    },
    handleGet(){
      this.$router.back();
    }
  }
}
</script>

<style>
.register{
  width: 100%;
  height: 100%;
}
.register>div>ul{
  display: flex;
  height: .72rem;
  align-items: center;
  color: #5D5D5D;
  font-size: .34rem;
  margin-bottom: 1.56rem;

}
.register>div>ul>li:nth-child(1){
  font-family: PingFang-SC-Regular;

  margin-left: .24rem;
}
.register>div>ul>li:nth-child(2){
  width: 80%;
  text-align: center;
  font-family: PingFang-SC-Regular;
  color: #5D5D5D;

}

.registerPhone{
  width: 100%;
  height: 100%;
}
.registerPhone>div{
  margin-left: 14%;
  display: flex;
  width: 5.4rem;
  height: .89rem;
  align-items: center;
  border-bottom: 1px solid #EEEEEE;
}
.registerPhone>div>img{

  width: .4rem;
  height: .38rem;
  margin-right: .1rem;
}
.registerPhone>div>input{
  font-size: .3rem;
  margin-left: .21rem;
  width: 2.3rem;
  height: .40rem;
  border: none;
  outline: medium;
}
.obtainCode>span:nth-child(1){
  color: #3FB59D;
  font-size: .24rem;
  margin-left:1.1rem;
}
.obtainCode>span:nth-child(2){
  font-size: .24rem;
  margin-left: .71rem;
  color: #3FB59D;
}
.bottom{
  width: 100%;
  height: 100%;
}
.bottom>button{
  width: 5.4rem;
  height: .7rem;
  border: none;
  background: #3fb59d;
  color: #fff;
  font-size: .32rem;
  margin-left: 14%;
  margin-top: 1rem;
}
</style>
