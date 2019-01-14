<template>
  <div>
    <ul class="head">
      <li class="back">
        <img src="static/img/edit/lg.png" alt>
      </li>
      <li class="prev">
        <img src="static/img/edit/zhiyuanfanhui3.png" alt>
      </li>
      <li @click="save()" class="close">
        <img src="static/img/edit/emichenggong.png" alt>
      </li>
    </ul>
    <div class="saveBox" v-if="flag">
      <p>
        <span>标题 ：</span>
        <input type="text" placeholder="好好写，标题很重要">
      </p>
      <p>
        <span>时间 ：</span>
        <input type="text" placeholder="当前时间">
      </p>
      <p>
        <span>手账本 ：</span>
      </p>
      <ul>
        <li>
          <img src alt>
          <span>草稿本</span>
        </li>
      </ul>
      <button>保存</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  methods: {
    save() {
      this.flag = !this.flag;
    }
  }
};
</script>


<style scoped lang="scss">
.head {
  height: 0.88rem;
  padding: 0 0.24rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .back img {
    width: 0.2rem;
    height: 0.34rem;
  }
  .prev img {
    width: 0.46rem;
    height: 0.36rem;
  }
  .close img {
    width: 0.36rem;
    height: 0.36rem;
  }
}
.saveBox {
  height: 7rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #ffffff;
  z-index: 15;
  padding: 0 0.49rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  p span {
    font-size: 0.3rem;
    font-family: PingFang-SC-Regular;
    font-weight: bold;
    color: rgba(93, 93, 93, 1);
    width: 1.06rem;
  }
  input {
    width: 3rem;
    height: 0.27rem;
    font-size: 0.26rem;
    font-family: PingFang-SC-Regular;
    font-weight: bold;
    color: rgba(152, 153, 153, 1);
    border: none;
  }
  ul {
    height: 2.4rem;
  }
  button {
    width: 3.6rem;
    height: 0.7rem;
    background: rgba(63, 181, 157, 1);
    border-radius: 0.1rem;
    align-self: center;
    font-size:.36rem;
    font-family: PingFang-SC-Regular;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }
}
</style>