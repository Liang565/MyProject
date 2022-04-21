<template>
  <div>
    <div>{{ newModel }}</div>
    <div>商铺管理</div>
    <div>
      <a-button @click="addShop" class=""> 新增商铺 </a-button>
    </div>
    <div class="m-5">
      <a-table :dataSource="data" rowKey="title">
        <a-table-column
          title="商铺名"
          dataIndex="title"
          key="title"
          class="w-60"
        />
        <a-table-column title="id" dataIndex="_id" key="_id" />
        <a-table-column title="所属用户" dataIndex="user" key="user">
        </a-table-column>
        <a-table-column
          title="商铺简介"
          dataIndex="description"
          key="description"
        />
        <a-table-column title="商铺图片" dataIndex="images" key="images" />
        <a-table-column title="商铺地址" dataIndex="address" key="address" />
        <a-table-column title="商铺电话" dataIndex="phone" key="phone" />
        <a-table-column title="组件" dataIndex="components" key="components" />
        <a-table-column title="操作" dataIndex="operation" key="operation">
          <template #="{ record }">
            <div>
              <a-button type="link" @click="addSon(record)">新增子类</a-button>
              <a-button type="link" @click="editClass(record)">修改</a-button>
              <a-button type="link" @click="remove(record)">删除</a-button>
            </div>
          </template>
        </a-table-column>
      </a-table>
    </div>
  </div>
  <!-- 新增商铺 -->
  <div>
    <a-modal
      v-model:visible="viss.add"
      title="新增商铺"
      @cancel="cancelModel"
      @ok="addOk"
    >
      <a-form :model="newModel">
        <a-form-item label="商店名">
          <a-input v-model:value="newModel.title"></a-input>
        </a-form-item>

        <a-form-item label="所属用户名">
          <a-input v-model:value="newModel.user"></a-input>
        </a-form-item>
        <a-form-item label="商铺简介">
          <a-input v-model:value="newModel.description"></a-input>
        </a-form-item>
        <a-form-item label="商铺图片">
          <a-input v-model:value="newModel.images"></a-input>
        </a-form-item>
        <a-form-item label="商铺地址">
          <a-input v-model:value="newModel.address"></a-input>
        </a-form-item>
        <a-form-item label="商铺电话">
          <a-input v-model:value="newModel.phone"></a-input>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
  <!-- 修改商品 -->
</template>
<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";
import { http } from "../../util/http";

//
let viss = ref({ add: false, edit: false });

let data = ref();
const fetch = async () => {
  let res = await http.get("shops");
  data.value = res.data;
};
let newModel = ref({
  title: "",
  user: "",
  description: "",
  images: "",
  address: "",
  phone: "",
});
const resetModel = () => {
  newModel.value = {
    title: "",
    user: "",
    description: "",
    images: "",
    address: "",
    phone: "",
  };
};

const addShop = () => {
  viss.value.add = true;
};

const cancelModel = () => {
  resetModel();
  console.log("cancel");
};
onMounted(() => {
  fetch();
});
</script>
