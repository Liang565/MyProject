<template>
  <div>{{ fileList }}</div>
  <div>
    <div>
      <a-upload
        v-model:file-list="fileList1"
        action="http://localhost:3001/admin/api/upload"
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
        一键清空
      </a-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { UploadOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import type { UploadProps } from "ant-design-vue";
const fileList1 = ref([]);
//传出调用的地方
const emit = defineEmits(["on-success"]);
const handleChange = (file, fileList, e) => {
  // emit("on-success", file.file.response.url); //父组件的事件on-success
  emit(
    "on-success",
    fileList1.value.map((v) => ({
      url: v.response.url,
    }))
  );
};

// //调用的地方传回来的
const props = defineProps({});

const allDelete = () => {
  fileList1.value = [];
  emit(
    "on-success",
    fileList1.value.map((v) => ({
      url: v.response.url,
    }))
  );
};
</script>
