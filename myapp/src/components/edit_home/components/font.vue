<template>
  <div class="font">
    <div id="editor"></div>
  </div>
</template>

<script>
import Editor from "wangeditor";
import "wangeditor/release/wangEditor.min.css";
export default {
  mounted() {
    this.editor = new Editor("#editor");
    this.editor.create();
  }
};
</script>

<style lang="scss" scoped>
.font {
  position: absolute;
  width: 100%;
  bottom: 0.98rem;
  left: 0;
  background: #ffffff;
  z-index: 10;
}
</style>
