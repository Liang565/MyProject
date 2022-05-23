<template>
  <div>home</div>
  <my-img :URL="uurl"></my-img>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import myImg from "../../components/myImg/myimg.vue";
let uurl = ref([
  {
    url: "http://liangeronline.oss-cn-shenzhen.aliyuncs.com/5d66bea8f033be14ecf421451f3319cd.jpeg",
  },
  {
    url: "http://liangeronline.oss-cn-shenzhen.aliyuncs.com/fc6451b9196a6b2e03a9060e4a877b2f.jpeg",
  },
  {
    url: "http://liangeronline.oss-cn-shenzhen.aliyuncs.com/8d52d7cbd687c21d7054dea0cd62c389.jpeg",
  },
  {
    url: "http://liangeronline.oss-cn-shenzhen.aliyuncs.com/5050e5cafb74e4073ff7a939c962b424.jpeg",
  },
  {
    url: "http://liangeronline.oss-cn-shenzhen.aliyuncs.com/dd015f1b8aee807a0c3a23c5b59997d8.jpeg",
  },
]);
</script>
