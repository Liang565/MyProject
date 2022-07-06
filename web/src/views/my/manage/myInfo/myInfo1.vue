<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>
<script setup lang="ts">
import { AddressEdit, Toast, Popup, Area } from "vant";
import { areaList } from "@vant/area-data";
import { ref } from "vue";
import type {
  AddressEditInfo,
  AddressEditProps,
  AddressEditInstance,
  AddressEditSearchItem,
} from "vant";

const addressEditRef = ref<AddressEditInstance>();

addressEditRef.value?.setAddressDetail("");

let aaa = ref<AddressEditInfo>();
let searchResult = ref([]);
const onSave = (info) => {
  Toast("save");
  console.log(info);
};
const onDelete = () => Toast("delete");
const onChangeDetail = (val: any) => {
  if (val) {
    searchResult.value = [
      {
        name: "黄龙万科中心",
        address: "杭州市西湖区",
      },
    ];
  } else {
    searchResult.value = [];
  }
};
</script>
