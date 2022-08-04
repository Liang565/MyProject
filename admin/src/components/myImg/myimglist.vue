<template>
  <div class="aaaaa">
    <!-- 鼠标悬停 -->
    <div @mouseenter="mOver" @mouseleave="mOut" class="fa">
      <img :src="prop.URL[0].url" />
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
        <!-- 上一张 -->
        <div class="leftSet">
          <button @click="letSet" :disabled="num == 0">
            <svg
              width="40"
              height="40"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" fill="white" fill-opacity="0.01" />
              <path
                d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                fill="none"
                stroke="#333"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M32.4917 24.5H14.4917"
                stroke="#333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23.4917 15.5L14.4917 24.5L23.4917 33.5"
                stroke="#333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div style="width: 50px">
            <span v-if="num == 0" style="font-size: 20px">已经是第一张了</span>
          </div>
        </div>
        <!-- 图片 -->

        <img :src="prop.URL[num].url" alt="" class="imgMain" />

        <!-- 下一张 -->
        <div class="rightSet">
          <div style="width: 50px">
            <span v-if="num == prop.URL.length - 1" style="font-size: 20px">
              已经是最后一张了
            </span>
          </div>
          <button @click="rightSet" :disabled="num == prop.URL.length - 1">
            <svg
              width="40"
              height="40"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" fill="white" fill-opacity="0.01" />
              <path
                d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                fill="none"
                stroke="#333"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M14.4917 24.5H32.4917"
                stroke="#333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23.4917 15.5L32.4917 24.5L23.4917 33.5"
                stroke="#333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </a-modal>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const prop = defineProps({
  URL: Object,
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

//放大
const bigLook = () => {};
//缩小
const smLook = () => {};
let num = ref(0);
let letSetDis = true;
//上一张
const letSet = () => {
  if (num.value == 0) console.log("无上一张");
  else num.value = num.value - 1;
};
//下一张
const rightSet = () => {
  if (num.value == prop.URL.length - 1) console.log("无下一张");
  else num.value = num.value + 1;
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
  justify-content: space-between;
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
