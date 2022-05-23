<template>
  <div>
    <div>
      <a-upload
        v-model:file-list="fileList1"
        :action="httpURL + '/upload'"
        list-type="picture-card"
        :remove="removeImg"
        @change="handleChange"
      >
        <a-button type="primary">
          <upload-outlined />
          上传
        </a-button>
      </a-upload>
    </div>
    <div>
      <a-button type="danger" @click="allDelete">
        <delete-outlined />
        清空图片
      </a-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { UploadOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import { RAndLogin } from "../util/register-and-login";
const { httpURL } = RAndLogin();

let fileList1 = ref([]);
let testList = ref([]);

//传出调用的地方
const emit = defineEmits(["on-success"]);
const handleChange = (file, fileList, e) => {
  emit(
    "on-success",
    // testList //这里是传出去的
    (testList.value = fileList1.value.map((v) => ({
      url: v.response.url,
    })))
  );
};

const allDelete = () => {
  testList.value = [];
  fileList1.value = [];
  emit("on-success", []);
};
</script>
