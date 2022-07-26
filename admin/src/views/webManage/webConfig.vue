<template>
  <div>
    <div>
      <div class="my-2">
        <a-button @click="addCom" type="primary">新增配置</a-button>
      </div>
      <div>
        <a-alert message="不可随意修改配置名称！" banner />
      </div>
      <div class="h-70vh overflow-y-auto">
        <a-table
          :dataSource="data"
          rowKey="_id"
          :pagination="pagination"
          @change="pageChange"
        >
          <a-table-column
            title="id"
            dataIndex="_id"
            key="_id"
            align="center"
            width="30%"
          />
          <a-table-column
            title="name"
            dataIndex="name"
            key="name"
            align="center"
            width="20%"
          />
          <a-table-column
            key="setting"
            title="setting"
            align="center"
            width="30%"
          >
            <template #="{ record }">
              <div class="flex justify-center">
                <a-button @click="editCom(record)" type="link">修改</a-button>
                <!-- 修改用户 -->
              </div>
            </template>
          </a-table-column>
        </a-table>
      </div>
    </div>
    <!-- 新增 -->
    <div>
      <a-modal
        v-model:visible="viss.add"
        title="新增"
        @ok="addOk(newModel, addUrl)"
        :afterClose="cancelModel"
        :centered="true"
      >
        <a-form :model="newModel">
          <a-form-item label="配置name" name="name">
            <a-input v-model:value="newModel.name"> </a-input>
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
    <!-- 修改 -->
    <!-- 新增 -->
    <div>
      <a-modal
        v-model:visible="viss.edit"
        title="修改"
        @ok="editOk1(editId, newModel)"
        :afterClose="cancelModel"
        :centered="true"
      >
        <a-form :model="newModel">
          <a-form-item label="配置name" name="name">
            <a-input v-model:value="newModel.name"> </a-input>
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { CrudTest } from "../../util/api/crud-api";
import { onMounted, ref } from "vue";
import { http } from "../../util/http";
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
} = CrudTest("build-home");
let addUrl = ref("create");

//新增组件
const addCom = () => {
  viss.value.add = true;
};
let editId = ref("");
const editCom = (temp) => {
  viss.value.edit = true;
  newModel.value.name = temp.name;
  editId.value = temp._id;
};

const editOk1 = (editId, model) => {
  for (let i in model) {
    if (model[i] == "") {
      delete model[i];
    }
  }
  editOk(editId, model);
};
let newModel = ref({
  name: "",
});

const resetModel = () => {
  newModel.value = {
    name: "",
  };
  editId.value = "";
};
const cancelModel = () => {
  resetModel();
  console.log("cancel");
};

onMounted(() => {
  fetch();
});
</script>
