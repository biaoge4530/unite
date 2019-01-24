<template>
  <div class="canvas">
    <div class="bgImg">
      <img :src="bgList[imgIndex].imgUrl" alt>
    </div>
    <ul class="bigImgBox">
      <li v-for="(item,index) in addSimgbig">
        <img
          :src="item.imgUrl"
          @mousedown="down(index)"
          @touchstart="down(index)"
          @mousemove="move(index)"
          @touchmove="move(index)"
          @mouseup="end"
          @touchend="end"
          ref="moves"
          :style="style[index]"
        >
      </li>
    </ul>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  data() {
    return {
      flags: false,
      position: { x: 0, y: 0 },
      nx: "",
      ny: "",
      dx: "",
      dy: "",
      xPum: "",
      yPum: "",
      style: []
    };
  },
  computed: {
    ...Vuex.mapState({
      bgList: state => state.edit.bgList,
      imgIndex: state => state.edit.imgIndex,
      addSimgbig: state => state.edit.addSimgbig
    })
  },
  methods: {
    ...Vuex.mapMutations({
				setStyle:"edit/setStyle"
			}),
    down(index) {
      this.flags = true;
      var touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      this.position.x = touch.clientX;
      this.position.y = touch.clientY;
      this.dx = this.$refs.moves[index].offsetLeft;
      this.dy = this.$refs.moves[index].offsetTop;
    },
    move(index) {
      if (this.flags) {
        var touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        this.nx = touch.clientX - this.position.x;
        this.ny = touch.clientY - this.position.y;
        this.xPum = this.dx + this.nx;
        this.yPum = this.dy + this.ny;
        this.style[index] = `left:${this.xPum}px;top:${this.yPum}px`;
        this.$forceUpdate();
      }
    },
    //鼠标释放时候的函数
    end() {
      this.flags = false;
      this.setStyle(this.style)
    }
  }
};
</script>


<style scoped lang="scss">
.canvas {
  height: 10rem;
  width: 100%;
  position: relative;
  .bgImg > img {
    width: 100%;
    height: 10rem;
    position: absolute;
  }
  .bigImgBox img,
  p {
    position: absolute;
    z-index: 10;
  }
}
</style>