<template>
  <div class="regStat">
    <div class="register">
      <div>
        <ul>
          <li @click="handleGet()">
            <img src="../../../static/img/wyc/lt.png">
          </li>
          <li @click="handRegister()">注册</li>
        </ul>
      </div>
    </div>

    <div class="registerPhone">
      <div>
        <img src="../../../static/img/wyc/phone_2.png">
        <input
          type="text"
          name="phoneNumber"
          v-model="phoneNumber"
          maxlength="11"
          placeholder="请输入手机号"
          @blur="phoneBlur"
        >
      </div>

      <div>
        <img src="../../../static/img/wyc/encrypt_2.png">
        <input type="text" name="phoneyzm" placeholder="请输入验证码" maxlength="6">
        <div class="obtainCode">
          <span v-show="show" @click="handleCode()">获取验证码</span>
          <span v-show="!show" class="count">{{count}}s 后重新获取</span>
        </div>
      </div>

      <div>
        <img src="../../../static/img/wyc/yz.png">
        <!-- <input type="text" placeholder="请输入密码" v-model="phonePassword"/> -->
        <input type="text" placeholder="请输入密码" v-model="phonePassword" minlength="8" maxlength="16">
      </div>
    </div>

    <div class="bottom">
      <mt-button @click.native="handRegister()">注册</mt-button>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Toast } from "mint-ui";
import axios from "axios";
import "mint-ui/lib/style.css";
export default {
  name: "reight",
  created() {
    /* axios({
       url:"http://39.96.74.48:8080/lha1/updatePassword",
        method:"post",

        data:{
          phoneNumber:"15535264455",
        }
      })
      .then((data)=>{
       console.log(data);

      }) */
  },
  data() {
    return {
      show: true,
      isReturn: true,
      count: "",
      time: null,
      phoneNumber: "",
      phonePassword: "",
      phoneyzm: ""
    };
  },
  methods: {
    handleCode() {
      //获取验证码
      const timeCount = 10; //倒计时
      if (!this.timer) {
        this.count = timeCount;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= timeCount) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
            alert("5d5gg5");
          }
        }, 1000);
      }
    },

    handleGet() {
      this.$router.back();
    },
    phoneBlur() {
      //手机号失去焦点事件
      let flag = null;
      let reg = /^1(3|5|8|6|7|4)\d{9}$/;
      if (this.phoneNumber === "") {
        Toast({
          message: "手机号不能为空",
          duration: 800
        });
        (this.isReturn = true), (flag = false);
      } else if (!reg.test(this.phoneNumber)) {
        Toast({
          message: "请输入正确的手机号",
          duration: 800
        });
      } else {
        flag = true;
      }
    },

    //点击判断表单验证
    handRegister() {
      let flag = null;
      let reg = /^1(3|5|8|6|7|4)\d{9}$/;
      if (this.phoneNumber === "") {
        Toast({
          message: "手机号不能为空",
          duration: 800
        });
        (this.isReturn = true), (flag = false);
      } else if (!reg.test(this.phoneNumber)) {
        this.isReturn = true;
        this.phoneNumber = "";
        flag = false;
      } else {
        flag = true;
      }

      //验证密码
      let flagPwd = null;
      let regPwd = /^\w{6,}$/;
      if (this.phonePassword === "") {
        Toast({
          message: "密码不能为空",
          duration: 800
        });
        this.isReturn = true;
        flagPwd = false;
      } else if (!regPwd.test(this.phonePassword)) {
        Toast({
          message: "密码错误",
          duration: 800
        });
        this.isReturn = true;
        this.phonePassword = "";
        flagPwd = false;
      } else {
        flagPwd = true;
      }

      //提交
      if (flag && flagPwd === true) {
        //jsonserover测试
        axios({
          //查询
          method: "get",
          url: "http://localhost:3000/data?phoneNumber=" + this.phoneNumber,
          data: {
            phoneNumber: this.phoneNumber,
            phonePassword: this.phonePassword
          }
        }).then(data => {
          console.log(data.data.length);
          if (data.data.length == 0) {
            axios({
              method: "post",
              url: "http://localhost:3000/data?phoneNumber=" + this.phoneNumber,
              data: {
                phoneNumber: this.phoneNumber,
                phonePassword: this.phonePassword
              }
            }).then(data => {
              Toast({
                message: "注册成功",
                duration: 800
              });
              this.$router.push("/login");
            });
          } else {
            Toast({
              message: "用户名已存在"
            });
          }
        });
      } else {
        Toast({
          message: "注册失败",
          duration: 1000,
          position: "middle"
        });
      }
    }
  }
};
</script>

<style>
.register {
  width: 100%;
  height: 100%;
}
.register > div > ul {
  display: flex;
  height: 0.72rem;
  align-items: center;
  color: #5d5d5d;
  font-size: 0.34rem;
  margin-bottom: 1.56rem;
}
.register > div > ul > li:nth-child(1) {
  font-family: PingFang-SC-Regular;
  margin-left: 0.24rem;
}
.register > div > ul > li:nth-child(2) {
  width: 87%;
  text-align: center;
  font-family: PingFang-SC-Regular;
  color: #5d5d5d;
}
.register > div > ul > li > img:nth-child(1) {
  width: 0.19rem;
  height: 0.32rem;
}

.registerPhone {
  width: 100%;
  height: 100%;
}
.registerPhone > div {
  margin-left: 14%;
  display: flex;
  width: 5.4rem;
  height: 0.89rem;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
}
.registerPhone > div > img {
  width: 0.4rem;
  height: 0.38rem;
  margin-right: 0.1rem;
}
.registerPhone > div > input {
  font-size: 0.3rem;
  margin-left: 0.21rem;
  width: 2.3rem;
  height: 0.4rem;
  border: none;
  outline: medium;
}
.obtainCode > span:nth-child(1) {
  color: #3fb59d;
  font-size: 0.24rem;
  margin-left: 1.1rem;
}
.obtainCode > span:nth-child(2) {
  font-size: 0.24rem;
  margin-left: 0.71rem;
  color: #3fb59d;
}
.bottom {
  width: 100%;
  height: 100%;
}
.bottom > button {
  width: 5.4rem;
  height: 0.7rem;
  border: none;
  background: #3fb59d;
  color: #fff;
  font-size: 0.32rem;
  margin-left: 14%;
  margin-top: 1rem;
}
.mint-toast-text {
  font-size: 0.32rem;
}
.registerPhone > div:nth-child(3) input {
  width: 100%;
}
</style>
