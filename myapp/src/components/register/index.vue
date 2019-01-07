<template>
  <div class="regStat">
        <div class="register">
        <div>
          <ul>
            <li>后退</li>
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
            <img src="../../../static/img/wycencrypt_2.png"/>
            <input type="text" placeholder="请输入验证码"/>
        </div>

        <div>
            <img src="../../../static/img/wycyz.png"/>
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
