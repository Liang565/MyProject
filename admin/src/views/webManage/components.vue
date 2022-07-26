<template>
  <div>
    <div>
      <div class="my-2">
        <a-button @click="addCom" type="primary">新增组件</a-button>
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
            title="title"
            dataIndex="title"
            key="title"
            align="center"
            width="10%"
          />

          <a-table-column
            title="key"
            dataIndex="key"
            key="key"
            align="center"
            width="10%"
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

                <a-button @click="remove(record, record.name)" type="link"
                  >删除</a-button
                >
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
        title="新增用户"
        @ok="addOk(newModel)"
        :afterClose="cancelModel"
        :centered="true"
      >
        <a-form :model="newModel">
          <a-form-item label="组件name" name="name">
            <a-input v-model:value="newModel.name"> </a-input>
          </a-form-item>

          <a-form-item label="组件title" name="title">
            <a-input v-model:value="newModel.title"> </a-input>
          </a-form-item>
          <a-form-item label="key">
            <a-radio-group v-model:value="newModel.key">
              <a-radio-button value="admin">admin</a-radio-button>
              <a-radio-button value="public">public</a-radio-button>
            </a-radio-group>
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
    <!-- 修改 -->
    <!-- 新增 -->
    <div>
      <a-modal
        v-model:visible="viss.edit"
        title="新增用户"
        @ok="editOk1(editId, newModel)"
        :afterClose="cancelModel"
        :centered="true"
      >
        <a-form :model="newModel">
          <a-form-item label="组件name" name="name">
            <a-input v-model:value="newModel.name"> </a-input>
          </a-form-item>

          <a-form-item label="组件title" name="title">
            <a-input v-model:value="newModel.title"> </a-input>
          </a-form-item>
          <a-form-item label="key">
            <a-radio-group v-model:value="newModel.key">
              <a-radio-button value="admin">admin</a-radio-button>
              <a-radio-button value="public">public</a-radio-button>
            </a-radio-group>
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
} = CrudTest("components");
//新增组件
const addCom = () => {
  viss.value.add = true;
};
let editId = ref("");
const editCom = (temp) => {
  viss.value.edit = true;
  newModel.value.name = temp.name;
  newModel.value.title = temp.title;
  newModel.value.key = temp.key;
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
  title: "",
  key: "public",
});

const resetModel = () => {
  newModel.value = {
    name: "",
    title: "",
    key: "public",
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
