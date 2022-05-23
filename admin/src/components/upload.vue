<template>
  <a-upload
    name="file"
    list-type="picture-card"
    :show-upload-list="false"
    :action="httpURL + '/upload'"
    @change="handleChange"
    :before-upload="beforeUpload"
  >
    <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
    <div v-else>
      <loading-outlined v-if="loading"></loading-outlined>
      <plus-outlined v-else></plus-outlined>
      <div class="ant-upload-text">点击上传</div>
    </div>
  </a-upload>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { RAndLogin } from "../util/register-and-login";
const { httpURL } = RAndLogin();
const emit = defineEmits(["on-success"]);
const handleChange = (file, fileList, e) => {
  emit("on-success", file.file.response.url); //父组件的事件on-success
};
const props = defineProps({
  imageUrl: String,
});
const beforeUpload = () => {
  return true;
};
</script>
