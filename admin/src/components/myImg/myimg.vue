<template>
  <div class="aaaaa">
    <!-- 鼠标悬停 -->
    <div @mouseenter="mOver" @mouseleave="mOut" class="fa">
      <div>
        <img :src="prop.URL[0].url" />
      </div>
      <button class="aaa" v-if="!mouse" @click="look">
        <span>浏览</span>
      </button>
    </div>
    <!-- 点击展开图库 -->
    <transition name="fade">
      <div class="tuku" v-if="tuku">
        <!-- 顶部操作条 -->
        <div class="topSetting">
          <!-- 关闭 -->
          <div>
            <button @click="unLook">
              <svg
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" fill="white" fill-opacity="0.01" />
                <path
                  d="M9.85786 18C6.23858 21 4 24 4 24C4 24 12.9543 36 24 36C25.3699 36 26.7076 35.8154 28 35.4921M20.0318 12.5C21.3144 12.1816 22.6414 12 24 12C35.0457 12 44 24 44 24C44 24 41.7614 27 38.1421 30"
                  stroke="#333"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.3142 20.6213C19.4981 21.5112 19 22.6974 19 24C19 26.7614 21.2386 29 24 29C25.3627 29 26.5981 28.4548 27.5 27.5707"
                  stroke="#333"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M42 42L6 6"
                  stroke="#333"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <!-- 放大 -->
          <!-- <div @click="bigLook">
            <svg
              width="40"
              height="40"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" fill="white" fill-opacity="0.01" />
              <path
                d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"
                fill="none"
                stroke="#333"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M21 15L21 27"
                stroke="#333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 21L27 21"
                stroke="#333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M33.2218 33.2218L41.7071 41.7071"
                stroke="#333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div> -->
          <!-- 缩小 -->
          <!-- <div @click="smLook">
            <svg
              width="40"
              height="40"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" fill="white" fill-opacity="0.01" />
              <path
                d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"
                fill="none"
                stroke="#333"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M15 21L27 21"
                stroke="#333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M33.2218 33.2218L41.7071 41.7071"
                stroke="#333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div> -->
        </div>

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
              <span v-if="num == 0" style="font-size: 20px"
                >已经是第一张了</span
              >
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
        </div></div
    ></transition>
  </div>
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

//点击预览
const look = () => {
  console.log("looooook");
  tuku.value = true;
};
//关闭浏览
const unLook = () => {
  tuku.value = false;
};
//放大
const bigLook = () => {
  console.log("biggggg");
};
//缩小
const smLook = () => {
  console.log("smmmmm");
};
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
/*动画*/
/* .fade-enter-active,
.fade-leave-active { */
/* transition: all 0.5s linear; */
/* transform: translate3D(0, 0, 0); */
/* opacity: 0;
} */
/* .fade-enter,
.fade-leave-active { */
/* transform: translate3D(100%, 0, 0); */
/* opacity: 1;
} */
.fade-enter-from {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s ease;
}
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fa {
  background-color: rgb(252 165 165);
  width: 96px;
  height: auto;
  position: absolute;
}
.aaa {
  position: absolute;
  width: 96px;
  height: 100%;
  top: 0px;
  background-color: rgba(0, 119, 247, 0.535);
  color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tuku {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.356);
}
.topSetting {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  width: 15%;
  position: absolute;
  right: 0;
}
.main {
  display: flex;
  justify-content: space-between;
  height: 100%;
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
  height: 100%;
}
</style>
