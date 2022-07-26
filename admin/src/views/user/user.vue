<template>
  <div>
    <div>
      <div class="my-2">
        <a-button @click="addUser" type="primary">新增用户</a-button>
      </div>
      <!-- //搜索 -->
      <div class="mb-5">
        <a-form layout="inline">
          <a-form-item label="id" class="w-52">
            <a-input v-model:value="where._id"></a-input>
          </a-form-item>
          <a-form-item label="用户名" class="w-44">
            <a-input v-model:value="where.username"></a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" @click="search">搜索</a-button>
          </a-form-item>
        </a-form>
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
            title="username"
            dataIndex="username"
            key="username"
            align="center"
            width="20%"
          />
          <a-table-column
            title="role"
            dataIndex="role"
            key="role"
            align="center"
            width="10%"
          />

          <a-table-column
            title="state"
            dataIndex="STATE"
            key="STATE"
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
                <a-button @click="editUser(record)" type="link">修改</a-button>
                <!-- 修改用户 -->

                <a-button @click="remove(record, record.username)" type="link"
                  >删除</a-button
                >
                <a-button @click="adminLogin(record)" type="link"
                  >一键登录该用户</a-button
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
        @ok="addOk(newModel, addUrl)"
        :ok-button-props="{ disabled: disabled }"
        :afterClose="cancelModel"
        :centered="true"
      >
        <a-form :model="newModel">
          <a-form-item
            label="username"
            name="username"
            :rules="[
              { required: true, message: '请输入用户名', trigger: 'blur' },
              {
                min: 3,
                max: 10,
                message: '用户名长度3-10',
              },
              {},
            ]"
          >
            <a-input v-model:value="newModel.username">
              <!-- 加一个图标 -->
              <template #prefix>
                <UserOutlined class="site-form-item-icon" />
              </template>
            </a-input>
          </a-form-item>

          <a-form-item
            label="输入密码"
            name="pass"
            :rules="[
              { required: true, message: '请输入密码', trigger: 'blur' },
              {
                min: 3,
                max: 10,
                message: '密码长度3-10',
              },
            ]"
          >
            <a-input-password v-model:value="newModel.pass">
              <!-- 加一个图标 -->
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item
            label="再次输入密码"
            name="password"
            :rules="[
              {
                required: true,
                validator: passAgain,
                trigger: 'blur',
              },
            ]"
          >
            <a-input-password v-model:value="newModel.password">
              <!-- 加一个图标 -->
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>

          <a-form-item label="身份角色">
            <a-radio-group v-model:value="newModel.role">
              <a-radio-button value="admin">ADMIN</a-radio-button>
              <a-radio-button value="user">USER</a-radio-button>
            </a-radio-group>
          </a-form-item>
          <a-form-item label="状态">
            <a-radio-group @change="selectState" v-model:value="selectM">
              <a-radio-button value="true">启用</a-radio-button>
              <a-radio-button value="false">禁用</a-radio-button>
            </a-radio-group>
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
    <!-- 修改 -->
    <div>
      <a-modal
        v-model:visible="viss.edit"
        title="修改用户信息"
        @ok="editOK1(editId, newModel)"
        :afterClose="cancelModel"
        :ok-button-props="{ disabled: disabled }"
        :centered="true"
      >
        <a-form :model="newModel">
          <a-form-item
            label="username"
            name="username"
            :rules="[
              {
                min: 3,
                max: 10,
                message: '用户名长度3-10',
              },
              {},
            ]"
          >
            <a-input v-model:value="newModel.username">
              <!-- 加一个图标 -->
              <template #prefix>
                <UserOutlined class="site-form-item-icon" />
              </template>
            </a-input>
          </a-form-item>

          <a-form-item
            label="输入密码"
            name="pass"
            :rules="[
              {
                min: 3,
                max: 10,
                message: '密码长度3-10',
              },
            ]"
          >
            <a-input-password v-model:value="newModel.pass">
              <!-- 加一个图标 -->
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item
            label="再次输入密码"
            name="password"
            :rules="[
              {
                validator: passAgain,
                trigger: 'blur',
              },
            ]"
          >
            <a-input-password v-model:value="newModel.password">
              <!-- 加一个图标 -->
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>

          <a-form-item label="身份角色">
            <a-radio-group v-model:value="newModel.role">
              <a-radio-button value="admin">ADMIN</a-radio-button>
              <a-radio-button value="user">USER</a-radio-button>
            </a-radio-group>
          </a-form-item>
          <a-form-item label="状态">
            <a-radio-group @change="selectState" v-model:value="selectM">
              <a-radio-button value="true">启用</a-radio-button>
              <a-radio-button value="false">禁用</a-radio-button>
            </a-radio-group>
          </a-form-item>
          <a-form-item>
            <a-checkbox-group
              v-model:value="newModel.promiss"
              style="width: 100%"
              :options="promiss"
            >
            </a-checkbox-group>
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";
import { http } from "../../util/http";
import { message } from "ant-design-vue";
import { api } from "../../util/api/api";
import { LockOutlined, UserOutlined } from "@ant-design/icons-vue";
import { check } from "../../util/base";
import { CrudTest } from "../../util/api/crud-api";
import router from "../../../../web/src/router";

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
} = CrudTest("users");
let addUrl = ref("add");

let newModel = ref({
  username: "",
  password: "",
  pass: "", //提交时需要把这个删掉
  role: "user", //身份，默认是2 User
  state: true, //默认是true
  promiss: [],
});

const resetModel = () => {
  newModel.value = {
    username: "",
    password: "",
    pass: "", //提交时需要把这个删掉
    role: "user", //身份，默认是2 User
    state: true, //默认是true
    promiss: [],
  };
};

const cancelModel = () => {
  resetModel();
  console.log("cancel");
};

//单选框改变时回调函数
let selectM = ref();
const selectState = () => {
  if (viss.value.add) {
    if (selectM.value == "false") {
      newModel.value.state = false;
    } else {
      newModel.value.state = true;
    }
  } else {
    if (selectM.value == "false") {
      newModel.value.state = false;
    } else {
      newModel.value.state = true;
    }
  }
};

let disabled = ref(true); //注册确认键是否失效
//注册用户验证规则
var passAgain = (rule, value, callback) => {
  if (!value && !viss.value.edit) {
    // return Promise.reject(new Error("请输入密码"));
    return Promise.reject("请输入密码");
  } else if (value != newModel.value.pass) {
    // return Promise.reject(new Error("两次输入密码不一致!"));
    disabled.value = true;
    return Promise.reject("两次输入密码不一致");
  } else {
    disabled.value = false;
    return Promise.resolve();
  }
};

const test = async () => {
  const res = api.user.add();
};

const addUser = () => {
  viss.value.add = true;
  console.log("newUser");
  selectM.value = "true";
};

const editUser = (temp) => {
  selectM.value = temp.state.toString();
  disabled.value = false;
  newModel.value.username = temp.username;
  newModel.value.role = temp.role;
  newModel.value.promiss = temp.promiss;
  viss.value.edit = true;
  editId.value = temp._id;
};
let editId = ref("");
const editOK1 = (Id, model) => {
  for (let i in model) {
    if (model[i] == "" && i != "promiss") {
      delete model[i];
    }
  }

  editOk(Id, model);
};
where.value = {
  _id: "",
  username: "",
};
let promiss = ref<any>([]);
const fetchPromiss = async () => {
  const res: any = await api.promiss.find();
  promiss.value = res.data.map((v) => ({
    label: v.name,
    value: v._id,
  }));
};

//admin一键登录
const adminLogin = async (temp) => {
  console.log("一键登录");
  let uId = localStorage.getItem("userid");
  let uName = localStorage.getItem("username");
  let rO = localStorage.getItem("role");
  localStorage.setItem("adminId", uId != null ? uId : "");
  localStorage.setItem("adminname", uName != null ? uName : "");
  localStorage.setItem("adminrole", rO != null ? rO : "");
  localStorage.setItem("userid", temp._id);
  localStorage.setItem("role", temp.role);
  localStorage.setItem("username", temp.username);
  setTimeout(() => {
    router.go(0);
  }, 1000);
  message.success(`管理员登录用户${temp.username}`);

  router.push("/");
};

onMounted(() => {
  fetch();
  fetchPromiss();
});
</script>
