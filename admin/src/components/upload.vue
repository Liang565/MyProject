<template>
  <a-upload
    name="file"
    list-type="picture-card"
    :show-upload-list="false"
    :action="httpURL + '/upload'"
    @change="handleChange"
    :before-upload="beforeUpload"
  >
    <div v-if="imageUrl">
      <img :src="imageUrl" alt="avatar" class="image" />
    </div>
    <div v-else>
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
  emit("on-success", file.file.response?.url); //父组件的事件on-success
};
const props = defineProps({
  imageUrl: String,
});
const beforeUpload = () => {
  return true;
};
</script>
<style>
.image {
  height: 102px;
  width: 102px;
}
</style>
