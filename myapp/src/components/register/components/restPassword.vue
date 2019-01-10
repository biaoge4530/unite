<template>
  <div class="regStat">
        <div class="register">
        <div>
          <ul>
            <li @click="handleGet()"><img src="../../../../static/img/wyc/lt.png"/></li>
            <li @click="handRegister()">重置密码</li>
          </ul>
        </div>
      </div>

      <div class="registerPhone">
        <div>
            <img src="../../../../static/img/wyc/phone_2.png"/>
            <input type="text" name="phoneNumber" v-model="phoneNumber" maxlength="11" :placeholder="phoneNum"/>
        </div>

        <div>
            <img src="../../../../static/img/wyc/encrypt_2.png"/>
            <input type="text" name="phoneyzm" placeholder="请输入验证码" :value="val" maxlength="6"/>
            <div class="obtainCode">
              <span v-show="show" @click="handleCode()">获取验证码</span>
              <span v-show="!show" class="count">{{count}}s 后重新获取</span>
            </div>
        </div>

        <div>
            <img src="../../../../static/img/wyc/yz.png"/>
            <!-- <input type="text" placeholder="请输入密码" v-model="phonePassword"/> -->
            <input type="text" :placeholder="phonePass" v-model="phonePassword" />
        </div>

      </div>


      <div class="bottom">
        <mt-button @click.native="handRegister()">重置密码</mt-button>
      </div>

  </div>
</template>
<script>
import Vue from "vue";
import {Toast} from "mint-ui";
import axios from 'axios';
import "mint-ui/lib/style.css";
export default {
  name:"reight",
  created(){
      /* axios({
        method:"forget", //修改
        url:"http://localhost:3000/data",
        data:{
          phoneNumber:"15535264455",
          password:"11111"
        }
      })
      .then((data)=>{
       console.log(data);

      }) */
  },
  data(){
    return{
      show:true,
      isReturn:true,
      count:"",
      time:null,
      val:"",
      phoneNumber:"",
      phonePassword:"",
      phoneyzm:"",
      phoneNum:"请输入手机号",
      phonePass:"请输入密码"
}
  },
  methods:{
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
    //点击判断表单验证
    handleGet(){
      this.$router.back();
    },
    handRegister(){
       let  flag =  null;
       let reg = /^1(3|5|8|6|7|4)\d{9}$/;
        if(this.phoneNumber === ""){
          this.phoneNum = "手机号不能为空";
          this.isReturn=true,
          flag = false;
        }else if(!reg.test(this.phoneNumber)){
            this.phoneNum = "手机号输入有误";
             this. isReturn=true;
             this.phoneNumber="";
             flag = false;
        }else{
          flag = true;
        }

        //验证密码
        let flagPwd = null;
        let regPwd = /^\w{6,}$/;
        if(this.phonePassword === ""){
          this.phonePass="密码不能为空";
           this.isReturn=true;
           flagPwd = false;
        }else if(!regPwd.test(this.phonePassword)){
          this.phonePass = "密码错误";
          this. isReturn=true;
          this.phonePassword = "";
          flagPwd = false;
        }else{
          flagPwd = true;
        }


       //提交
        if(flag && flagPwd === true){
          //jsonserover测试
          axios({     //查询
          method:"get",
          url:"http://localhost:3000/data?phoneNumber="+this.phoneNumber,
            data:{
              phoneNumber:this.phoneNumber,
              phonePassword:this.phonePassword
            }
        }).then(data=>{
          /* console.log(data.data[0].id);
          console.log(data); */
          if(data.data.length == 0){
                Toast({
                  message:"用户名不存在",
                  duration: 800,
              })
            }else{
              axios({
                method:"delete",
                url:"http://localhost:3000/data/"+data.data[0].id,
                data:{
                   phonePassword:this.phonePassword
                }
              }).then(data=>{
                console.log(data)
                  axios({
                  method:"post",
                  url:"http://localhost:3000/data?phoneNumber="+this.phoneNumber,
                    data:{
                      phoneNumber:this.phoneNumber,
                      phonePassword:this.phonePassword
                    }
                }).then(data=>{
                  Toast({
                    message:"修改成功",
                    duration: 800,
                    })
                    this.$router.push("/login")
                })
              })
            }

        })
        }else{
          Toast({
                message:"重置密码失败",
                duration: 2000,
                position:"middle"
              })
        }
    }
  }
}
</script>
 /* console.log(data.data[0].phoneNumber) */
          /* if( data.data[0].phoneNumber == this.phoneNumber ){
                Toast({
                  message:"用户名存在",
                  duration: 800,
            })
          } */
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
  width: 87%;
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
.mint-toast-text{
  font-size: .32rem;
}
</style>
