<template>
  <div class="aaaaa">
    <!-- 鼠标悬停 -->
    <div @mouseenter="mOver" @mouseleave="mOut" class="fa">
      <img :src="prop.URL" class="imgimg" />
      <button class="aaa" v-if="!mouse" @click="look">
        <span>浏览</span>
      </button>
    </div>
  </div>

  <a-modal v-model:visible="visible" width="100%" style="top: 0px">
    <template #footer>
      <div></div>
    </template>
    <!-- 点击展开图库 -->

    <div class="tuku" v-if="true">
      <!-- 图片主体 -->
      <div class="main">
        <!-- 图片 -->

        <img :src="prop.URL" alt="" class="imgMain" />
      </div>
    </div>
  </a-modal>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const prop = defineProps({
  URL: String,
});
// 鼠标悬停
let mouse = ref(true);
const mOver = () => {
  mouse.value = false;
};
const mOut = () => {
  mouse.value = true;
};

let visible = ref(false);
//点击预览
const look = () => {
  // tuku.value = true;
  visible.value = true;
};

let tuku = ref(false);
</script>

<style>
.fa {
  width: 96px;
  height: 96px;
  /* position: absolute; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.imgimg {
  width: 96px;
  height: 96px;
}
.aaa {
  position: absolute;
  top: 0px;
  background-color: rgba(0, 119, 247, 0.535);
  color: aliceblue;
  width: 96px;
  height: 96px;
}

.tuku {
  /* position: absolute; */
  /* position: static; */

  left: 0;
  top: 0;
  width: 95vw;
  background-color: rgba(0, 0, 0, 0.356);
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
.leftSet {
  display: flex;
  justify-content: center;
}
.rightSet {
  display: flex;
  justify-content: center;
}
.imgMain {
  width: auto;
  height: 86vh;
}
</style>
