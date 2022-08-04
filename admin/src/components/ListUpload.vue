<template>
  <div class="clearfix">
    <a-upload
      v-model:file-list="fileList"
      :action="httpURL + '/upload'"
      list-type="picture-card"
      :multiple="true"
      @preview="handlePreview"
      @change="uploadChange"
      @remove="uploadRemove"
    >
      <div v-if="fileList.length < 8">
        <plus-outlined />
        <div style="margin-top: 8px">Upload</div>
      </div>
    </a-upload>
    <a-modal
      :visible="previewVisible"
      :title="previewTitle"
      :footer="null"
      @cancel="handleCancel"
      :centered="true"
    >
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import { PlusOutlined } from "@ant-design/icons-vue";
import { ImageFiles } from "@icon-park/vue-next/es/map";
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import userStore from "../../../web/src/stores/user-store";
// import { message, UploadChangeParam, UploadProps } from "ant-design-vue";
import { RAndLogin } from "../util/register-and-login";
const { httpURL } = RAndLogin();
function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const previewVisible = ref(false);
const previewImage = ref("");
const previewTitle = ref("");

// const fileList = ref<UploadProps["fileList"]>([]);
let fileList = ref([]);
//这玩意要传出去的。
let getOther = ref([]);
const handleCancel = () => {
  previewVisible.value = false;
  previewTitle.value = "";
};
// const handlePreview = async (file: UploadProps["fileList"][number]) => {
const handlePreview = async (file) => {
  if (!file.url && !file.preview) {
    file.preview = (await getBase64(file.originFileObj)) as string;
  }
  previewImage.value = file.url || file.preview;
  previewVisible.value = true;
  previewTitle.value =
    file.name || file.url.substring(file.url.lastIndexOf("/") + 1);
};
//上传文件改变时的状态
const uploadChange = (file, fileList, e) => {
  if (file.file.status === "error") {
    // message.error("上传失败");
  }
  if (file.file.status === "done") {
    getOther.value = file.fileList.map((v: any) => ({
      url: v.response.url,
    }));
    emit("on-success", getOther.value);
  }
  if (file.file.status === "removed") {
    getOther.value = file.fileList.map((v: any) => ({
      url: v.response.url,
    }));
    emit("on-success", getOther.value);
  }
};
const emit = defineEmits(["on-success"]);
//删除文件时
const uploadRemove = () => {};
const props = defineProps({
  imgList: {
    type: Object,
    default: [],
  },
  //这个要有变化
  resetList: {
    type: Boolean,
    default: false,
  },
});
///编辑时照片墙和数据源数据保持一致
const abc = () => {
  fileList.value = props.imgList.map((v) => ({
    url: v.url,
    status: "done",
    response: v,
  }));
};

//单独侦听props里面的某个属性
//监听resetList,来执行照片墙清空和 编辑时照片墙和数据源数据保持一致
watch(
  () => props.resetList,
  (newValue, oldValue) => {
    fileList.value = [];
    abc();
  }
);

// let user = computed(() => userStore.state.user)

onMounted(() => {
  abc();
});
</script>
<style>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
