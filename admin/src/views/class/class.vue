<template>
  <div>
    <div class="text-2xl">分类管理</div>
    <!-- 新增分类 -->
    <div class="mt-2 flex">
      <div>
        <a-button type="primary" class="text-black" @click="addClass"
          >新增</a-button
        >
        <a-modal
          v-model:visible="viss.add"
          title="新增父类"
          @cancel="cancelModel"
          @ok="addClassOk"
          :centered="true"
        >
          <a-form :model="newModel">
            <a-form-item
              label="分类名"
              name="title"
              :rules="[
                { required: true, message: '请输入分类名', trigger: 'blur' },
                {
                  min: 2,
                  max: 10,
                  message: '分类名长度2-10',
                },
                {},
              ]"
            >
              <a-input v-model:value="newModel.title"></a-input>
            </a-form-item>
          </a-form>
        </a-modal>
      </div>
      <!-- 搜索 -->
      <div class="ml-5">
        <a-form layout="inline">
          <a-form-item label="分类" class="w-44">
            <a-select
              :options="options"
              v-model:value="Classwhere._id"
              :allowClear="true"
              :showSearch="true"
              :filter-Option="filterOption"
            >
            </a-select>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" @click="searchClass">搜索</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
    <div class="mt-4">
      <a-table
        :dataSource="classData"
        rowKey="_id"
        :scroll="{ y: 400 }"
        class="h-400"
        :pagination="pagination"
      >
        <a-table-column
          title="类别"
          dataIndex="title"
          key="title"
          class="w-60"
          align="center"
        />
        <a-table-column title="id" dataIndex="_id" key="_id" align="center" />
        <a-table-column
          title="父级id"
          dataIndex="parent"
          key="parent"
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
              <a-button type="link" @click="addSon(record)">新增子类</a-button>
              <a-button type="link" @click="editClass(record)">修改</a-button>
              <a-button type="link" @click="remove(record, record.title)"
                >删除</a-button
              >
            </div>
          </template>
        </a-table-column>
      </a-table>
    </div>
  </div>
  <!-- 修改信息 -->
  <div>
    <a-modal
      v-model:visible="viss.edit"
      title="更改信息"
      @cancel="cancelModel"
      @ok="editClassOk"
      :centered="true"
    >
      <a-form-item label="当前分类名"> {{ showTitle }} </a-form-item>
      <a-form-item label="当前父类名">
        {{ showParent }}
      </a-form-item>

      <a-form :model="newModel">
        <a-form-item label="新分类名" name="title">
          <a-input v-model:value="newModel.title"></a-input>
        </a-form-item>
        <a-form-item label="新父级名" name="parent">
          <a-select
            :options="options"
            v-model:value="newModel.parent"
            :allowClear="true"
          >
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
  <!-- 新增子类 -->
  <div>
    <a-modal
      v-model:visible="viss.addSon"
      title="新增子类"
      @cancel="cancelModel"
      @ok="addSonOk"
      :centered="true"
    >
      <a-form :model="newModel">
        <a-form-item label="当前类">
          {{ showTitle }}
        </a-form-item>
        <a-form-item
          label="新增分类名"
          name="title"
          :rules="[
            { required: true, message: '请输入分类名', trigger: 'blur' },
            {
              min: 2,
              max: 10,
              message: '分类名长度2-10',
            },
            {},
          ]"
        >
          <a-input v-model:value="newModel.title"></a-input>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import { message, Modal } from "ant-design-vue";
import { ListGridType } from "ant-design-vue/lib/list";
import api from "ant-design-vue/lib/notification";
import { createVNode, onMounted, reactive, ref } from "vue";
import { classApi } from "../../util/api/class-api";
import { CrudTest } from "../../util/api/crud-api";
import { http } from "../../util/http";
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
let classData = ref();
let data1 = ref([{}]);

//分页器
let pagination = ref({
  total: 999, //数据总数
  current: 1, //当前页面
  pageSize: 999, //数据量
});
//展示条件
let query = ref({
  limit: pagination.value.pageSize, //一页展示多少条,默认0时会全部展示，
  page: 1, //展示页码
  // where: ref({}),
  where: { parent: { $exists: false } },
  // where: ref(wheres) //展示筛选条件 where 别加s
  // populate: "user", //展示关联表的内容
});

const fetch1 = async () => {
  let res: any = await http.get("/commodity-class/", {
    params: {
      query: query.value,
    },
  });

  classData.value = res.data;
  pagination.value.total = res.total;
  pagination.value.pageSize = res.total;
  // data1.value = [{}];
  // options.value = res.data.map((v) => ({
  //   label: v.title,
  //   value: v._id,
  // }));
  setOptions();
};
//更改选框选项

let options = ref([]);
const setOptions = async () => {
  let resop: any = await http.get("/commodity-class/", {
    params: {
      query: {
        limit: 999,
      },
    },
  });
  options.value = resop.data.map((v) => ({
    label: v.title,
    value: v._id,
  }));
};
//选框搜索使用
//分类选框搜索选项
const filterOption = (input: string, optionsClass: any) => {
  //可以用这个进行模糊搜索
  return optionsClass.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
//搜索
let Classwhere = ref({ _id: "" });
const searchClass = () => {
  //选框id空时不执行
  if (Classwhere.value._id == "") {
    message.warn("未选择");
  } else if (typeof Classwhere.value._id === "undefined") {
    query.value.where = { parent: { $exists: false } };
    fetch1();
  } else {
    //删除了parent。
    delete query.value.where.parent;
    query.value.where = <any>Classwhere.value;
    // console.log(query.value.where);
    // console.log(query);
    fetch1();
  }
};

//根据名字找id
const findId = (nameTemp) => {
  for (let i in classData.value) {
    if (classData.value[i].title == nameTemp) {
      // console.log(classData.value[i]._id);
      return classData.value[i]._id;
    }
  }
};
//根据id找名字
const findName = async (Id) => {
  let data = await http.get(`/commodity-class/${Id}`);
  return data;
};
let newModel = ref({
  title: "",
  parent: "",
});
let viss = ref({ add: false, edit: false, addSon: false });
//新增父类
const addClass = () => {
  viss.value.add = true;
};

//展示当前名字
let showTitle = ref("");
//新增子类
const addSon = (temp) => {
  viss.value.addSon = true;
  showTitle.value = temp.title;
  newModel.value.parent = temp._id;
};
const addSonOk = async () => {
  // console.log(newModel.value);
  await http.post("commodity-class/addClass", newModel.value);
  message.success("添加成功");
  fetch1();
  viss.value.addSon = false;
};
//新增分类,传进来的父类需要用名字搜索id
const addClassOk = async () => {
  if (newModel.value.parent == "") {
    delete newModel.value.parent;
  } else {
    newModel.value.parent = findId(newModel.value.parent);
  }

  await http.post("commodity-class/addClass", newModel.value);
  message.success("添加成功");
  fetch1();
  viss.value.add = false;
  resetModel();
};
const resetModel = () => {
  newModel.value = {
    title: "",
    parent: "",
  };
};
const cancelModel = () => {
  resetModel();
  console.log("cancel");
};

/**
 *
 * @param temp 删除的对象，主要是要获取id
 * @param tempfetch1 别的需要展示的属性,title
 */
const remove = (temp, tempfetch1?) => {
  Modal.confirm({
    title: "是否确认删除？",
    icon: createVNode(ExclamationCircleOutlined),
    content: createVNode(
      "div",
      { style: "color:red" },
      `是否删除:${tempfetch1} 数据？`
    ),
    async onOk() {
      await http.delete(`commodity-class/${temp._id}`);
      isParent(temp.children);
      message.success("已删除");
      fetch1();
    },
    onCancel() {
      console.log("Cancel");
      fetch1();
    },
  });
};
//如果删除的是父类，那需要把子类里面的parent 给delete掉,使用更新
//temp 是children。
const isParent = async (temp) => {
  if (temp) {
    for (let i in temp) {
      let model1 = ref({
        title: temp[i].title,
      });
      await http.post(`commodity-class/updata/${temp[i]._id}`, model1.value);
    }
  }
  fetch1();
};
//修改
const showId = ref("");
const showParent = ref("");
const editClass = async (temp) => {
  showParent.value = "";
  viss.value.edit = true;
  showTitle.value = temp.title;
  showId.value = temp._id;
  if (temp.parent)
    findName(temp.parent).then((res: any) => {
      showParent.value = res.title;
    });
};
const editClassOk = async () => {
  await http.post(`commodity-class/updata/${showId.value}`, newModel.value);
  viss.value.edit = false;
  resetModel();
  fetch1();
};
onMounted(() => {
  fetch1();
});
</script>
