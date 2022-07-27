<template>
  <div>
    <div class="flex justify-center py-3" @click="goSelect">
      <div class="flex justify-between w-90vw bg-gray-50 p-3 rounded-lg">
        <div class="flex items-center">
          <icon-park
            type="local-two"
            theme="filled"
            size="35"
            :spin="false"
            fill="#4a90e2"
            strokeLinecap="round"
            strokeLinejoin="round"
            :strokeWidth="2"
          />
        </div>
        <div>
          <div class="text-base">
            {{ data.province }}/ {{ data.city }}/ {{ data.county }}/
            {{ data.address }}
          </div>
          <div>
            <span class="pr-2">{{ data.name }}</span>
            <span>{{ data.tel }}</span>
          </div>
        </div>
        <div class="flex items-center">
          <icon-park
            type="right"
            theme="outline"
            size="24"
            :spin="false"
            fill="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            :strokeWidth="2"
          />
        </div>
      </div>
    </div>
    <!-- 显示地址编辑页 -->
    <div>
      <van-action-sheet v-model:show="show" title="选择地址">
        <myInfo
          @selectMyInfo="
            (aa) => {
              data = aa;
            }
          "
        ></myInfo>
      </van-action-sheet>
    </div>
  </div>
</template>
<script setup lang="ts">
import { http } from "@/util/http";
import { Cell, Toast, ActionSheet } from "vant";
import { onMounted, ref, watch } from "vue";
import myInfo from "./myInfo.vue";
import iconPark from "../../components/iconPark.vue";

let data = <any>ref({
  address: "",
  city: "",
  county: "",
  id: "",
  isDefault: true,
  name: "",
  postalCode: "",
  province: "",
  tel: "",
  user: "",
  _id: "",
});
let show = ref(false);
const emit = defineEmits(["selectInfo"]);
const selectInfo = () => {
  emit("selectInfo", data.value);
};
const goSelect = () => {
  show.value = true;
};
const fetch = async () => {
  const res = await http.post("user-info/find");
  for (let i in res) {
    if (res[i].isDefault) {
      data.value = res[i];

      return;
    }
  }
  Toast.fail("无数据~");
};
fetch();
watch(data, (newValue, oldValue) => {
  selectInfo();
});

// onMounted(() => {
//   fetch();
// });
</script>
