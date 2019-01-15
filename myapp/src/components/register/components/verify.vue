<template>
  <div class="login">
    <div class="banner_nav" slot="name1">
      <div class="nav">
           <ul>
            <li @click="handleback()"><img src="../../../../static/img/wyc/lt.png"/></li>
            <li>登录</li>
            <li><router-link class="router" to="/register">注册</router-link></li>
           </ul>
          <div class="handphoto"><router-link to=""><img src="../../../../static/img/wyc/head.png"/></router-link></div>
      </div>
    </div>

    <div class="slogan" slot="name2">
      <label>记录生活, 记录你</label>
    </div>

      <!-- 表单验证 -->
    <div class="inputNumber" slot="name3">
        <div>
          <img src="../../../../static/img/wyc/phone.png"/>
          <input type="text" placeholder="请输入手机号码" maxlength="11"/>
        </div>
        <div class="inputPassword" id="inputPassword">
          <img src="../../../../static/img/wyc/encrypt.png"/>
          <input :type="pwdType" placeholder="请输入验证码" />
             <div id="verifyed">
                <span v-show="show" @click="handleCode()">获取验证码</span>
                <span v-show="!show" class="count">{{count}}s 后重新获取</span>
             </div>
        </div>
             <div id="btn">
                <button>登录</button>
              </div>
        <div id="Authentication">
          <li><router-link to="/login">密码登录</router-link></li>
          <li><router-link to="/restPassword">忘记密码</router-link></li>
        </div>

      <!-- 第三方账号登录 -->
      <div id="party">
          <span class="line"></span>
          <span class="txt">第三方账号登录</span>
          <span class="line"></span>
      </div>
      <div id="ountNumber">
        <ul>
          <li><router-link to=""><img src="../../../../static/img/wyc/wx.png"/></router-link></li>
          <li><router-link to=""><img src="../../../../static/img/wyc/qq.png"/></router-link></li>
          <li><router-link to=""><img src="../../../../static/img/wyc/xl.png"/></router-link></li>
        </ul>
      </div>
    </div>



  </div>
</template>
<script>
import axios from 'axios';
export default {

  data(){
    return{
      show:true,
      count:"",
      pwdType:"password",
    }

  },
  methods:{
    handleback(){
      this.$router.back();
    },
    handleCode(){//获取验证码
      const timeCount = 10;  //倒计时
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
             alert("5d5gg5");
          }
        },1000)
      }
    },


  }
}
</script>

<style scoped>

.login{
  width: 100%;
  height: 100%;
}
.banner_nav{
  width: 100%;
  height: 4rem;
  background:url("../../../../static/img/wyc/banner_nav.png") no-repeat;
  background-size: 100%;
}
.nav{
  width: 100%;
  height: .88rem;

}
.nav>ul{
  width: 100%;
  height: .88rem;
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 0 .23rem;
}
.nav>ul>li{
  font-size:.34rem;
  font-family:PingFang-SC-Regular;
  color:#5D5D5D;
}
.nav>ul>li:nth-child(2){
  margin-left: .30rem
}
.nav>ul>li>img:nth-child(1){
  width: .19rem;
  height: .32rem;
}
.router{
  font-size: .32rem;
  color:rgba(63,181,157,1);
}
.nav>span{
  width: .19rem;
  height: .32rem;
}
.nav>div{
  width: 100%;
  height: 100%;
  margin-left: 37%;
  margin-top: 28%;
}
.handphoto img{
  width: 1.8rem;
  height: 1.8rem;
}
.slogan{
  margin-top: .94rem;
  text-align: center;
  font-size: .34rem;
  font-weight: bold;
  color: #5D5D5D;
}
.inputNumber{
  width: 100%;
  height: 100%;
  padding: 0 1.05rem;
  margin-top: .69rem;
}
.inputNumber>div{
  display: flex;
  width: 5.4rem;
  height: .89rem;
  align-items: center;
  border-bottom: 2px solid #EEEEEE;

}
.inputNumber>div>img{
  width: .3rem;
  height: .29rem;
  margin-right: .1rem;
}
.inputNumber>div>input{
  font-size: .24rem;
  margin-left: .21rem;
  width: 2.3rem;
  height: .40rem;
  border: none;
  outline: medium;
}
#inputPassword{
    width: 100%;
    height: .89rem;
}
.eye{
  margin-left: 40%;
}
#btn{
  border: none;
  width: 5.4rem;
  height: .7rem;
  border-bottom: none;
  margin-top: .4rem;
}
#btn>button{
  width: 5.4rem;
  height: .7rem;
  border: none;
  background: #3fb59d;
  color: #fff;
  font-size: .32rem;
}
#Authentication{
  border: none;
  display: flex;
  justify-content: space-between;
  font-size: .2rem;

}
#party{
  width: 100%;
  height: .4rem;
  line-height: .4rem;
  border: none;
  margin-top: 1.8rem;
  display: flex;
  justify-content: space-around;
}
.line{
  display: inline-block;
  width: 1.26rem;
  border-top: 1px solid #ccc;

}
.txt{
  color: #686868;
  vertical-align: middle;
}
#ountNumber{
  width: 100%;
  height: auto;
  border:none;
}
#ountNumber>ul{
  width: 100%;
  height: 1.2rem;
  display: flex;
  justify-content:space-around;
  align-items: center;
}
#verifyed>span{
  color: #3FB59D;
  margin-left: .80rem;
}
</style>

