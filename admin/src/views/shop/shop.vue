<template>
  <div>
    <div class="mb-2 flex justify-start">
      <div>
        <a-button @click="addShop" type="primary"> 新增商铺 </a-button>
      </div>
      <div class="w-full ml-8">
        <a-form layout="inline">
          <a-form-item label="店铺名：" class="w-52">
            <a-input v-model:value="where.title"></a-input>
          </a-form-item>
          <a-form-item label="所属用户名" class="w-44">
            <a-select
              :options="options"
              v-model:value="where.user"
              :allowClear="allowClear"
            >
            </a-select>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" @click="search">搜索</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>

    <div class="mt-5 h-70vh overflow-y-auto">
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
          align="center"
        />
        <a-table-column title="id" dataIndex="_id" key="_id" align="center" />
        <a-table-column
          title="所属用户"
          dataIndex="user"
          key="user"
          align="center"
        >
          <template #="{ record }">
            <span>{{ record.user?.username }}</span>
          </template>
        </a-table-column>
        <a-table-column
          title="商铺简介"
          dataIndex="description"
          key="description"
          align="center"
        />
        <a-table-column
          title="商铺头像"
          dataIndex="images"
          key="images"
          align="center"
        >
          <template #="{ record }">
            <myimage :URL="record.images" />
            <!-- {{ record.images }} -->
          </template>
        </a-table-column>
        <a-table-column
          title="商铺地址"
          dataIndex="address"
          key="address"
          align="center"
        />
        <a-table-column
          title="商铺电话"
          dataIndex="phone"
          key="phone"
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
      :centered="true"
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
        <a-form-item label="商铺头像">
          <upload
            :imageUrl="newModel.images"
            @on-success="
              (imageUrl) => {
                newModel.images = imageUrl;
              }
            "
          />
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
      :centered="true"
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
        <a-form-item label="商铺头像">
          <upload
            v-model:imageUrl="newModel.images"
            @on-success="
              (imageUrl) => {
                newModel.images = imageUrl;
              }
            "
          />
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
import upload from "../../components/upload.vue";
import myimage from "../../components/myImg/myimage.vue";
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
where.value = {
  title: "",
  user: "",
};
const Role = localStorage.getItem("role");
const userid = localStorage.getItem("userid");
//搜索
if (Role === "admin")
  where.value = {
    title: "",
    user: "",
  };
else {
  where.value = {
    title: "",
    user: userid,
  };
}

let newModel = ref({
  title: "",
  user: userid,
  description: "",
  images: "",
  address: "",
  phone: "",
});
const resetModel = () => {
  newModel.value = {
    title: "",
    user: newModel.value.user,
    description: "",
    images: "",
    address: "",
    phone: "",
  };
};

const addShop = () => {
  viss.value.add = true;
};

//搜索选框
let allowClear = ref(false);
let options = ref<any>([]);
const findUserOptions = async () => {
  // map foreach for
  if (Role === "admin") {
    const res: any = await api.user.find({ limit: 999 });
    options.value = res.data.map((v) => ({
      label: v.username,
      value: v._id,
    }));
    allowClear.value = true;
  } else {
    //不是admin时只展示当前用户的用户名和id
    options.value = [
      {
        label: localStorage.getItem("username"),
        value: userid,
      },
    ];
  }
};

const cancelModel = () => {
  resetModel();
};

//修改
let editId = ref("");
const edit = (temp) => {
  for (let i in newModel.value) newModel.value[i] = temp[i];
  newModel.value.user = temp.user._id;
  editId.value = temp._id;
  viss.value.edit = true;
};

onMounted(() => {
  search();
  findUserOptions();
  if (Role == "admin") message.info("当前为管理员用户");
});
</script>
