<template>
  <div>
    <div class="bg-gray-100 p-0 w-100vw h-100vh">
      <div class="flex justify-between items-center pt-2">
        <div class="mr-5 ml-2 flex justify-between items-center">
          <div></div>
        </div>
        <div class="pl-3">我的收货地址</div>
        <!-- 编辑 -->
        <div class="w-16 h-7">
          <button @click="editTwo">
            <icon-park
              type="edit-two"
              theme="outline"
              size="24"
              :spin="false"
              fill="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              :strokeWidth="2"
              v-if="isEditInfo"
            />
            <span v-if="!isEditInfo">完成</span>
          </button>
        </div>
      </div>
      <!-- 数据主体 -->
      <div class="rounded flex justify-center pb-20">
        <div class="w-full">
          <div v-for="i in data" class="py-1" @click="selectInfo(i)">
            <van-cell-group inset>
              <van-cell>
                <template #title>
                  <div class="flex justify-start items-center">
                    <div class="custom-title">
                      <span class="text-lg">{{ i.name }}</span>
                      <span>{{ i.tel }}</span>
                    </div>
                    <div v-if="i.isDefault">
                      <van-tag round type="danger">默认</van-tag>
                    </div>
                  </div>
                </template>
                <template #label>
                  <div>
                    {{ i.province }}/ {{ i.city }}/ {{ i.county }}/
                    {{ i.address }}
                  </div>
                </template>
                <template #right-icon>
                  <button @click.stop="editInfo(i)">
                    <icon-park
                      type="edit"
                      theme="outline"
                      size="20  "
                      :spin="false"
                      fill="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      :strokeWidth="2"
                      v-if="isEditInfo"
                    />
                  </button>
                </template>
              </van-cell>
              <van-cell v-if="!isEditInfo">
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <div>
                      <button @click.stop="setDefault(i._id)">
                        <icon-park
                          type="round"
                          theme="outline"
                          size="18"
                          :spin="false"
                          fill="#000000"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          :strokeWidth="2"
                        />
                      </button>
                    </div>
                    <div class="text-sm">默认地址</div>
                  </div>
                  <div>
                    <button @click.stop="deleteAdress(i._id)">
                      <div class="text-sm">删除</div>
                    </button>
                  </div>
                </div>
              </van-cell>
            </van-cell-group>
          </div>
        </div>
      </div>
      <div
        class="flex justify-between items-center pl-3 p-3 w-full fixed bottom-0 bg-white"
      >
        <van-button
          type="primary"
          size="large"
          icon="plus"
          round
          @click="showAddPopup"
        >
          添加地址
        </van-button>
      </div>
    </div>
    <!-- 新增或者修改 -->
    <div>
      <van-popup
        round
        :closeable="true"
        v-model:show="show"
        position="bottom"
        @close="fetch1()"
      >
        <div class="h-80vh" v-if="show">
          <address-edit
            :type="addressEditType"
            :addressObject="addressObject"
            @end="
              (aa) => {
                show = aa;
              }
            "
          />
        </div>
      </van-popup>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Curd } from "../../util/api/curd";
import { http } from "../../util//http";
import type { AnyTypeAnnotation } from "@babel/types";
import { Button, AddressList, Toast, Dialog, Cell, CellGroup } from "vant";
import { onMounted, ref } from "vue";
import iconPark from "../../components/iconPark.vue";
import AddressEdit from "./myInfo/addressEdit.vue";
//选择地址
const emit = defineEmits(["selectMyInfo"]);
const selectInfo = (temp: any) => {
  Toast.success("选择成功~");
  emit("selectMyInfo", temp);
};
let data = <any>ref([]);
const fetch = async () => {
  const res = await http.post("user-info/find");
  data.value = res;
  if (data.value.length === 0) Toast.fail("无数据~");
};
//查询地址
//编辑Info
let isEditInfo = ref(true);
const editTwo = () => {
  isEditInfo.value = !isEditInfo.value;
};
let model = ref({
  // name: "ccc",
  // address: "456",
  // tel: " 123",
  isDefault: true,
  // postalCode: "bbbpostalCode",
});
const addinfo = () => {
  http.put("user-info/62c6f234b3bdb3014b714020", model.value);
};

//设置为默认地址
const setDefault = async (temp: any) => {
  Toast.loading("~");
  setTimeout(async () => {
    await http.put(`user-info/${temp}`, { isDefault: true });
    fetch();
  }, 1000);
};
//删除地址
const deleteAdress = (temp: any) => {
  Dialog.confirm({
    title: "确定要删除该地址吗？",
    cancelButtonText: "我再想想",
  })
    .then(async () => {
      setTimeout(async () => {
        await http.delete(`user-info/${temp}`);
        fetch();
        Toast.success("已删除~");
      }, 1000);
    })
    .catch(() => {
      // on cancel
    });
};
//地址编辑框
let show = ref(false);
const showAddPopup = () => {
  show.value = !show.value;
  addressEditType.value = "add";
};
//地址编辑框组件参数
let addressObject = ref({});
let addressEditType = ref();

//修改
const editInfo = (i: any) => {
  show.value = !show.value;
  addressEditType.value = "edit";
  addressObject.value = i;
};

const fetch1 = () => {
  if (token) {
    fetch();
  }
};
let token = localStorage.getItem("token");
onMounted(() => {
  if (token) {
    fetch();
  }
});
</script>
