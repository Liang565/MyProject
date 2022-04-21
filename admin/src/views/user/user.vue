<template>
  <div>
    <div>用户管理</div>
    <div>
      <div>
        <a-modal
          v-model:visible="modalVisible.add"
          title="新增用户"
          @ok="newUserOk"
          okText="submit"
          okType="primary"
          :ok-button-props="{ disabled: disabled }"
          cencelText="取消"
          @cancel="cancelModel"
        >
          <a-form :model="addModel">
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
              <a-input v-model:value="addModel.username">
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
              <a-input-password v-model:value="addModel.pass">
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
              <a-input-password v-model:value="addModel.password">
                <!-- 加一个图标 -->
                <template #prefix>
                  <LockOutlined class="site-form-item-icon" />
                </template>
              </a-input-password>
            </a-form-item>

            <a-form-item label="身份角色">
              <a-radio-group v-model:value="addModel.role">
                <a-radio-button value="1">ADMIN</a-radio-button>
                <a-radio-button value="2">USER</a-radio-button>
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

      <div class="my-5">
        <a-button @click="newUser">新增用户</a-button>
      </div>

      <div>
        <a-table
          :dataSource="curdData"
          rowKey="_id"
          :pagination="pagination"
          @change="pageChange"
        >
          <a-table-column title="id" dataIndex="_id" key="_id" />
          <a-table-column
            title="username"
            dataIndex="username"
            key="username"
          />
          <a-table-column title="role" dataIndex="role" key="role" />

          <a-table-column title="state" dataIndex="STATE" key="STATE" />

          <a-table-column key="setting" title="setting">
            <template #="{ record }">
              <div>
                <a-button @click="editUser(record)">修改</a-button>
                <!-- 修改用户 -->
                <a-modal
                  v-model:visible="modalVisible.edit"
                  title="修改用户"
                  @ok="editUserOk"
                  okText="submit"
                  okType="primary"
                  :ok-button-props="{ disabled: disabled }"
                  cencelText="取消"
                  @cancel="cancelModel"
                >
                  <a-form :model="editModel">
                    <a-form-item
                      label="username"
                      name="username"
                      :rules="[
                        {
                          required: true,
                          message: '请输入用户名',
                          trigger: 'blur',
                        },
                        {
                          min: 3,
                          max: 10,
                          message: '用户名长度3-10',
                        },
                        {},
                      ]"
                    >
                      <a-input v-model:value="editModel.username">
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
                          required: true,
                          message: '请输入密码',
                          trigger: 'blur',
                        },
                        {
                          min: 3,
                          max: 10,
                          message: '密码长度3-10',
                        },
                      ]"
                    >
                      <a-input-password v-model:value="editModel.pass">
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
                      <a-input-password v-model:value="editModel.password">
                        <!-- 加一个图标 -->
                        <template #prefix>
                          <LockOutlined class="site-form-item-icon" />
                        </template>
                      </a-input-password>
                    </a-form-item>

                    <a-form-item label="状态">
                      <a-radio-group
                        @change="selectState"
                        v-model:value="selectM"
                      >
                        <a-radio-button value="true">启用</a-radio-button>
                        <a-radio-button value="false">禁用</a-radio-button>
                      </a-radio-group>
                    </a-form-item>
                  </a-form>
                </a-modal>
                <a-button @click="removeUser(record)">删除</a-button>
              </div>
            </template>
          </a-table-column>
        </a-table>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";
import { http } from "../../util/http";
import { Curd } from "../../util/curd";
import { message } from "ant-design-vue";
import { api } from "../../util/api/api";
import { LockOutlined, UserOutlined } from "@ant-design/icons-vue";
const {
  query,
  fetch,
  curdData,
  findOne,
  AorE,
  addEdit,
  selectM,
  pagination,
  pageChange,
  modalVisible,
  addModel,
  passAgain,
  disabled,
  editModel,
  cancelModel,
  remove,
  selectState,
} = Curd("users");
const test = async () => {
  const res = api.user.add();
};

//新建用户AorE默认是true
const newUser = () => {
  modalVisible.value.add = true;
  console.log("newUser");
  selectM.value = "true";
};
const newUserOk = () => {
  addEdit();
};
const removeUser = (temp) => {
  remove(temp);
};
const editUser = (temp) => {
  console.log("editUser");
  modalVisible.value.edit = true;
  AorE.value = false;
  findOne(temp); //这里拿到用户信息
  // editModel.value.username = curdModel.value.username;
};
const editUserOk = () => {
  delete editModel.pass;
  addEdit();
};

onMounted(() => {
  fetch();
});
</script>
