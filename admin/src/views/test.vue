<template>
  <div>
    <div>{{ data }}</div>
    <div>分类管理</div>
    <div>
      <a-button @click="dataChange">111</a-button>
    </div>
    <div>{{ classData }}</div>
  </div>
</template>
<script lang="ts" setup>
import { message } from "ant-design-vue";
import { onMounted, ref } from "vue";
import { classApi } from "../util/api/class-api";
let data = ref([]);
let classData = ref();
const fetch = () => {
  classApi.find().then((res) => {
    //返回Promise正确信息
    console.log(res);
    classData.value = res.data;
  });
  // .catch((err) => {
  //   //返回Promise错误信息
  //   console.log(err);
  // });
};

//处理一下数据,筛选出一级分类
const dataChange = () => {
  let j = 0;
  for (let i in classData.value) {
    if (!classData.value[i].parent) {
      //没有parent
      data.value[j] = classData.value[i];
      console.log(data.value[j]);

      j++;
    }
  }
};
onMounted(() => {
  fetch();
  setTimeout(() => {
    dataChange();
    console.log(data.value);
  }, 1000);
});
</script>
