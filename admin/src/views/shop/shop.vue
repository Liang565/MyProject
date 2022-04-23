<template>
  <div>
    <div class="mb-2 text-2xl">商铺管理</div>
    <div class="mb-2">
      <a-button @click="addShop" type="primary"> 新增商铺 </a-button>
    </div>
    <div class="w-full">
      <a-form layout="inline">
        <a-form-item label="店铺名：" class="w-52">
          <a-input v-model:value="where.title"></a-input>
        </a-form-item>
        <a-form-item label="所属用户名" class="w-44">
          <a-select
            :options="options"
            v-model:value="where.user"
            :allowClear="true"
          >
          </a-select>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" @click="search">搜索</a-button>
        </a-form-item>
      </a-form>
    </div>
    <div class="my-5">
      <a-table
        :dataSource="data"
        rowKey="title"
        :pagination="pagination"
        @change="pageChange"
      >
        <a-table-column
          title="商铺名"
          dataIndex="title"
          key="title"
          class="w-60"
        />
        <a-table-column title="id" dataIndex="_id" key="_id" />
        <a-table-column title="所属用户" dataIndex="user" key="user">
          <template #="{ record }">
            <span>{{ record.user?.username }}</span>
          </template>
        </a-table-column>
        <a-table-column
          title="商铺简介"
          dataIndex="description"
          key="description"
        />
        <a-table-column title="商铺图片" dataIndex="images" key="images" />
        <a-table-column title="商铺地址" dataIndex="address" key="address" />
        <a-table-column title="商铺电话" dataIndex="phone" key="phone" />

        <a-table-column title="操作" dataIndex="operation" key="operation">
          <template #="{ record }">
            <div>
              <a-button type="link" @click="edit(record)">修改</a-button>
              <a-button type="link" @click="remove(record, record.title)"
                >删除</a-button
              >
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
      @ok="addOk(newModel, addUrl)"
      :afterClose="cancelModel"
    >
      <a-form :model="newModel">
        <a-form-item label="商店名">
          <a-input v-model:value="newModel.title"></a-input>
        </a-form-item>
        <a-form-item label="所属用户名">
          <a-select :options="options" v-model:value="newModel.user">
          </a-select>
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
  <div>
    <a-modal
      v-model:visible="viss.edit"
      title="修改信息"
      :afterClose="cancelModel"
      @ok="editOk(editId, newModel)"
    >
      <a-form :model="newModel">
        <a-form-item label="商店名">
          <a-input v-model:value="newModel.title"></a-input>
        </a-form-item>
        <a-form-item label="所属用户名">
          <a-select :options="options" v-model:value="newModel.user">
          </a-select>
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
</template>
<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import { message, Modal } from "ant-design-vue";
import { ref } from "vue";
import { api } from "../../util/api/api";
import { http } from "../../util/http";
import { CrudTest } from "../../util/api/crud-api";
const {
  remove,
  viss,
  editOk,
  addOk,
  fetch,
  data,
  query,
  where,
  search,
  pagination,
  pageChange,
} = CrudTest("shops");

//新增接口路径
let addUrl = ref("addShop");

//搜索
where.value = {
  title: "",
  user: "",
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
let options = ref<any>([]);
const findUserOptions = async () => {
  const res: any = await api.user.find({ limit: 999 });
  // map foreach for
  options.value = res.data.map((v) => ({
    label: v.username,
    value: v._id,
  }));
};

const cancelModel = () => {
  resetModel();
  console.log("cancel");
};

//修改
let editId = ref("");
const edit = (temp) => {
  editId.value = temp._id;
  viss.value.edit = true;
};

onMounted(() => {
  fetch();
  findUserOptions();
});
</script>
