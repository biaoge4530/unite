<template>
  <div class="collect">
      <CheckoutList-com v-show="pullflag"/>
    <div class="head">
      <ul>
        <li>
          <img class="back" src="static/img/collect/back.png" alt>
        </li>
        <li class="pull">
          <span>{{collectName}}</span>
          <img src="static/img/collect/pull.png" @click="showPull()">
        </li>
        <li>
          <img class="del" src="static/img/collect/del.png" alt>
        </li>
      </ul>
    </div>
    <div class="none" v-show="!flag">
      <img src="static/img/collect/none.png" alt>
      <p>还木有手帐哦，快去编写吧</p>
    </div>
    <div class="ones" v-show="flag">
      <div class="collectDetail">
        <ul>
          <li>
            <h3>
              <span class="day">26</span>
              <span class="month">十二月</span>
            </h3>
            <div class="dayList">
              <div class="isOne">
                <img src="static/img/collect/cgb_icon_1@2x.png" alt v-show="!isOneFlag" class="no">
                <img src="static/img/collect/cgb_icon_2@2x.png" alt v-show="isOneFlag" class="is">
              </div>
              <div class="time">00:00</div>
              <div class="note">
                <div class="title">手账标题</div>
                <div class="thumb">
                  <img src alt>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="editBtn">
          <img src alt>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckoutList from "./checkoutList.vue"
export default {
components:{
"CheckoutList-com" : CheckoutList
},
  data() {
    return {
      collectName: "草稿本",
      flag: true,
      isOneFlag: false,
      pullflag:false
    };
  },
  methods:{
      showPull(){
          this.pullflag = true;
      }
  }
};
</script>
<style lang="scss" scoped>
.collect {
  width: 100%;
  height: 100%;
  background: #ffffff;
  .head ul {
    display: flex;
    padding: 0 0.24rem;
    justify-content: space-between;
    height: 0.82rem;
    align-items: center;
    .back {
      width: 0.23rem;
      height: 0.39rem;
    }
    .pull {
      width: 1.17rem;
      height: 0.33rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 0.33rem;
        font-family: PingFang-SC-Regular;
        font-weight: bold;
        color: rgba(93, 93, 93, 1);
      }

      img {
        width: 0.14rem;
        height: 0.12rem;
      }
    }
    .del {
      width: 0.42rem;
      height: 0.42rem;
    }
  }
  .none {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 4.04rem;
      height: 3.76rem;
      margin-bottom: 0.37rem;
    }
    p {
      height: 0.36rem;
      font-size: 0.36rem;
      font-family: PingFang-SC-Regular;
      font-weight: bold;
      color: rgba(152, 153, 153, 1);
      margin-top: 0.37rem;
    }
  }
  .ones {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .collectDetail {
      padding: 0 0.75rem 0 0.67rem;
      display: flex;
      justify-content: space-between;
      ul {
        width: 100%;
      }
      h3 {
        height: 1.15rem;
        display: flex;
        align-items: center;
        .month {
          font-size: 0.34rem;
          font-family: PingFang-SC-Regular;
          font-weight: bold;
          color: rgba(97, 97, 97, 1);
        }
        .day {
          font-size: 0.42rem;
          font-family: PingFang-SC-Regular;
          font-weight: bold;
          color: rgba(97, 97, 97, 1);
          margin-right: 0.34rem;
        }
      }
      .dayList {
        width: 100%;
        height: 1.28rem;
        padding-left: 0.12rem;
        display: flex;
        justify-content: space-between;
        .isOne {
          .is {
            width: 0.12rem;
            height: 1rem;
          }
          .no {
            width: 0.2rem;
            height: 1.28rem;
          }
        }
        .time {
          width: 0.69rem;
          height: 0.26rem;
          font-size: 0.26rem;
          font-family: PingFang-SC-Regular;
          font-weight: bold;
          color: rgba(134, 134, 134, 1);
        }
        .note {
          width: 4.34rem;
          height: 0.98rem;
          background: #ddaaaa;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .title {
            font-size: .26rem;
            font-family: PingFang-SC-Regular;
            font-weight: bold;
            color: rgba(97, 97, 97, 1);
            margin-left: .21rem;
          }
          .thumb {
            width: 0.98rem;
            height: 0.96rem;
          }
        }
      }
    }
  }
}
</style>
