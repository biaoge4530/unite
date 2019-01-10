<template>
  <div class="bdPhone">
    <div class="phoneNav">
      <ul>
        <li>绑定手机</li>
        <li><router-link id="jusp" to="">跳过</router-link></li>
      </ul>
    </div>

  <div class="phNumber">
    <div>
        <img src="../../../../static/img/wyc/phone_2.png"/>
        <input type="text" placeholder="请输入手机号" maxlength="11"/>
    </div>

    <div>
            <img src="../../../../static/img/wyc/encrypt_2.png"/>
            <input type="text" name="phoneyzm" placeholder="请输入验证码"  maxlength="6"/>
            <div class="obtainCode">
              <span v-show="show" @click="handleCode()">获取验证码</span>
              <span v-show="!show" class="count">{{count}}s 后重新获取</span>
            </div>
    </div>

  </div>
      <div class="bind">
        <button>绑 定</button>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:true,
      count:"",
    }
  },
  methods:{
    handleCode(){
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
    }
  }

}
</script>

<style >
.bdPhone{
  width: 100%;
  height: 100%;
}
.phoneNav>ul{
  width: 7.49rem;
  height: .72rem;
  align-items: center;
  display: flex;
  color: #5D5D5D;
  font-size: .34rem;
    margin-bottom: 2.5rem;
}
.phoneNav>ul>li:nth-child(1){
  margin-left: 38%;
}
.phoneNav>ul>li:nth-child(2){
  font-size: .32rem;
  margin-left: 30%;
}
#jusp{
  color: #3FB59D;
}
.phNumber>div{
  width: 5.4rem;
  height: .95rem;

  display: flex;
  margin-left: 1rem;
  border-bottom: 1px solid #E1E1E1;
}
.phNumber>div>img{
  width: .5rem;
  height: .5rem;
  vertical-align: middle;
  margin-top: .2rem;
}
.phNumber>div>input{
  width: 100%;
  height: 100%;
  margin-left: .35rem;
  outline: medium;
  border: none;
  font-size: .3rem;
}
.phNumber>div:nth-child(2){
  line-height: .94rem;
}
.obtainCode>span:nth-child(1){
  color: #3FB59D;
  font-size: .24rem;
  margin-left:-1.5rem;
}
.obtainCode>span:nth-child(2){
  font-size: .24rem;
  margin-left: -1.5rem;
  color: #3FB59D;
}
.bind{
  width: 100%;
  height: 100%;
}
.bind>button{
  width: 5.4rem;
  height: .8rem;
  background: #3fb59d;
  margin-left: 14%;
  margin-top: 1rem;
  color: #fff;
  font-size: .32rem;
}
</style>
