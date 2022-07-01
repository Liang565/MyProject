<template>
  <!-- <div>{{ newModel }}</div> -->
  <div>
    <div class="mb-2 text-2xl">权限管理</div>
    <div class="mb-2">
      <a-button @click="addShop" type="primary"> 新增权限 </a-button>
    </div>
    <div class="mb-2">
      <a-form layout="inline">
        <a-form-item label="权限名：" class="w-52">
          <a-input v-model:value="where.name"></a-input>
        </a-form-item>
        <a-form-item label="分类" class="w-44">
          <a-select
            :options="options"
            v-model:value="where.category"
            :allowClear="true"
          >
          </a-select>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" @click="search">搜索</a-button>
        </a-form-item>
      </a-form>
    </div>
    <div class="mt-5">
      <a-table
        :dataSource="data"
        rowKey="title"
        :pagination="pagination"
        @change="pageChange"
        :scroll="{ y: 390 }"
      >
        <a-table-column
          title="id"
          dataIndex="_id"
          key="_id"
          class="w-40"
          align="center"
        />
        <a-table-column
          title="分类"
          dataIndex="category"
          key="name"
          align="center"
        />
        <a-table-column
          title="权限"
          dataIndex="name"
          key="name"
          align="center"
        />
        <a-table-column
          title="操作"
          dataIndex="operation"
          key="operation"
          align="center"
        >
          <template #="{ record }">
            <div>
              <a-button type="link" @click="remove(record, record.name)"
                >删除</a-button
              >
            </div>
          </template>
        </a-table-column>
      </a-table>
    </div>
  </div>
  <!-- 新增商品 -->
  <div>
    <a-modal
      v-model:visible="viss.add"
      title="新增权限"
      @ok="addOk(newModel)"
      :afterClose="cancelModel"
      :centered="true"
    >
      <!-- 选框里面的  :filter-Option="filterOption"用于搜索选项 -->

      <a-form :model="newModel">
        <a-form-item label="权限">
          <a-input v-model:value="newModel.name"></a-input>
        </a-form-item>
        <a-form-item label="分类">
          <a-select
            v-model:value="newModel.category"
            style="width: 100%"
            :options="options"
          ></a-select>
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
import adminStore from "../../stores/admin-store";

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
} = CrudTest("promiss");

let newModel = ref({
  name: "",
});
where.value = {};
const options = ref([
  {
    value: "user",
    label: "user",
  },
  {
    value: "order",
    label: "order",
  },
  {
    value: "class",
    label: "class",
  },
  {
    value: "goods",
    label: "goods",
  },
  {
    value: "shop",
    label: "shop",
  },
]);
const addShop = () => {
  viss.value.add = true;
};
const cancelModel = () => {
  console.log("cancelModel");
};
onMounted(() => {
  fetch();
});
</script>
