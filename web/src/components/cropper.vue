<template>
  <div>
    <el-upload
      ref="elUpload"
      action="/sys-file/upload"
      accept=".jpg,.png"
      :headers="headers"
      :auto-upload="false"
      :on-change="uploadChange"
      :http-request="httpRequest"
    >
      <el-button type="primary">点击上传</el-button>
    </el-upload>
    <img :src="url" />
    <el-dialog title="图片裁剪" v-model="showCopper" append-to-body>
      <vue-cropper ref="cropper" :src="imgSrc" preview=".preview" />
      <template #footer>
        <el-button type="primary" @click="confirmFn">确 定</el-button>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import store from "@/store";
import VueCropper from "vue-cropperjs";
import request from "@/utils/axios";
import "cropperjs/dist/cropper.css";
import { ref } from "vue";
export default {
  components: {
    VueCropper,
  },
  setup() {
    const cropper = ref(null);
    const elUpload = ref(null);
    const imgSrc = ref("");
    const url = ref("");
    const showCopper = ref(false);
    const headers = {
      Authorization: "Bearer " + store.getters.access_token,
    };
    const uploadChange = (file) => {
      const url = file.raw;
      const reader = new FileReader();
      reader.onload = (event) => {
        imgSrc.value = event.target.result;
        cropper.value.replace(event.target.result);
      };
      reader.readAsDataURL(url);
      showCopper.value = true;
    };
    const uploadFile = ref("");
    const httpRequest = (requestdata) => {
      let { action, headers, filename } = requestdata;
      action = action.substring(5);
      const formData = new FormData();
      formData.append(filename, uploadFile.value);
      request({
        headers: headers,
        url: action,
        method: "post",
        data: formData,
      }).then((res) => {
        //调用上传接口后的处理
        url.value = res.data.url;
      });
    };
    const confirmFn = () => {
      cropper.value.getCroppedCanvas().toBlob((blob) => {
        uploadFile.value = blob;
        elUpload.value.submit();
        showCopper.value = false;
      });
    };
    return {
      headers,
      cropper,
      elUpload,
      imgSrc,
      url,
      showCopper,
      uploadChange,
      httpRequest,
      confirmFn,
    };
  },
};
</script>
