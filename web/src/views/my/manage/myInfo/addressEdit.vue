<template>
  <div class="w-90vw">
    <div class="flex justify-center items-center pt-5">
      <div v-if="props.type == 'add'">新增地址</div>
      <div v-if="props.type == 'edit'">修改地址</div>
    </div>
    <div>
      <van-address-edit
        :address-info="addressInfo"
        :area-list="areaList"
        show-postal
        show-set-default
        show-search-result
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { AddressEdit, Toast, Popup, Area } from "vant";
import { areaList } from "@vant/area-data";
import { onMounted, ref } from "vue";
import type {
  AddressEditInfo,
  AddressEditProps,
  AddressEditInstance,
  AddressEditSearchItem,
} from "vant";
import { http } from "@/util/http";
const props = defineProps({ type: String, addressObject: Object });

let addressInfo = ref({});
const emit = defineEmits(["end"]);

const onSave = async (info: AddressEditInfo) => {
  console.log(info);
  const model = ref({
    name: info.name,
    province: info.province,
    city: info.city,
    county: info.county,
    address: info.addressDetail,
    tel: info.tel,
    postalCode: info.areaCode,
    isDefault: info.isDefault,
  });
  if (props.type == "add") {
    console.log(model.value);
    await http.post("user-info", model.value);
    Toast.success("新增成功~");
    emit("end", false); //控制弹出层
  } else if (props.type == "edit" && props.addressObject) {
    await http.put(`user-info/${props.addressObject._id}`, model.value);
    Toast.success("修改成功~");
    emit("end", false);
  }
};

onMounted(() => {
  if (props.type === "edit" && props.addressObject) {
    console.log(props.addressObject);

    addressInfo.value = {
      name: props.addressObject.name,
      province: props.addressObject.province,
      city: props.addressObject.city,
      county: props.addressObject.county,
      addressDetail: props.addressObject.address,
      tel: props.addressObject.tel,
      postalCode: props.addressObject.postalCode,
      areaCode: props.addressObject.postalCode,
      isDefault: props.addressObject.isDefault,
    };
  }
});
</script>
