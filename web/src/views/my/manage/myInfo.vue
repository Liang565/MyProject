<template>
  <div>
    <div class="bg-gray-100 p-0 w-100vw h-100vh">
      <div class="flex justify-between items-center pt-2">
        <div class="mr-5 ml-2 flex justify-between items-center">
          <div>
            <!-- 返回前一个页面 -->
            <button @click="$router.go(-2)">
              <icon-park
                type="back"
                theme="outline"
                size="24"
                :spin="false"
                fill="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                :strokeWidth="2"
              />
            </button>
          </div>
        </div>
        <div class="pl-3">我的收货地址</div>
        <!-- 编辑 -->
        <div class="w-16 h-7">
          <button @click="editCart">
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

      <div class="rounded">
        <!-- 自己重新写，#item-bottom不能获取每一条的信息 -->
        <van-address-list
          :list="data"
          default-tag-text="默认"
          :switchable="false"
          @add="addinfo"
          @edit="onEdit"
          @click-item="clickItem"
          add-button-text="添加收货地址"
        >
          <template #item-bottom>
            <!-- <div
              v-if="!isEditInfo"
              class="border-t-2 pt-2 flex justify-between items-center"
            >
              <div class="flex items-center">
                <div>
                  <button @click="setDefault">
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
                <button @click="deleteAdress">
                  <div class="text-sm">删除</div>
                </button>
              </div>
            </div> -->
          </template>
        </van-address-list>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Curd } from "@/util/api/curd";
import { http } from "@/util/http";
import { Button, AddressList, Toast, Dialog } from "vant";
import type { AddressListProps, AddressListAddress } from "vant";
import { onMounted, ref } from "vue";
import iconPark from "../../../components/iconPark.vue";
const { fetch, data } = Curd("user-info");
//查询地址
//编辑Info
let isEditInfo = ref(true);
const editCart = () => {
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

//存储地址的id
let addressId = ref("");
//设置为默认地址
const setDefault = async () => {
  Toast.loading("~");
  setTimeout(async () => {
    await http.put(`user-info/${addressId.value}`, { isDefault: true });
    fetch();
  }, 1000);
};
//删除地址
const deleteAdress = () => {
  Dialog.confirm({
    title: "确定要删除该地址吗？",
    cancelButtonText: "我再想想",
  })
    .then(async () => {
      setTimeout(async () => {
        await http.delete(`user-info/${addressId.value}`);
        fetch();
        Toast.success("已删除~");
      }, 1000);
    })
    .catch(() => {
      // on cancel
    });
};
//依靠这个获取地址的id
const clickItem = (i: any) => {
  addressId.value = i._id;
};
const aaa = (i) => {
  console.log(i);
};
onMounted(() => {
  fetch();
});
</script>
