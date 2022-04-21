<template>
  <div>
    <div>
      分类管理
      {{ newModel }}
    </div>
    <div>
      <a-button type="primary" class="text-black" @click="addClass"
        >新增</a-button
      >
      <a-modal
        v-model:visible="viss.add"
        title="新增父类"
        @cancel="cancelModel"
        @ok="addClassOk"
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
    <div class="m-5">
      <a-table :dataSource="data" rowKey="title">
        <a-table-column
          title="类别"
          dataIndex="title"
          key="title"
          class="w-60"
        />
        <a-table-column title="id" dataIndex="_id" key="_id" />
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
    <div>{{ classData }}</div>
  </div>
  <!-- 修改信息 -->
  <div>
    <a-modal
      v-model:visible="viss.edit"
      title="更改信息"
      @cancel="cancelModel"
      @ok="editClassOk"
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
          <a-input v-model:value="newModel.parent"></a-input>
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
import { message } from "ant-design-vue";
import api from "ant-design-vue/lib/notification";
import { onMounted, ref } from "vue";
import { classApi } from "../../util/api/class-api";
import { http } from "../../util/http";

let classData = ref();
let data = ref([{}]);

//分页器
let pagination = ref({
  total: 0, //数据总数
  current: 1, //当前页面
  pageSize: 0, //数据量
});
//展示条件
let query = ref({
  limit: pagination.value.pageSize, //一页展示多少条,默认0时会全部展示，
  page: 1, //展示页码
  where: ref({}),
  // where: ref(wheres) //展示筛选条件 where 别加s
  // populate: "user", //展示关联表的内容
});

const fetch = async () => {
  let res = await http.get("/commodity-class/", {
    params: {
      query: query.value,
    },
  });
  classData.value = res.data;
  pagination.value.total = res.total;
  pagination.value.pageSize = res.total;
  data.value = [{}];
  dataChange();
};

//处理一下数据,筛选出一级分类
const dataChange = () => {
  let j = 0;
  for (let i in classData.value) {
    if (!classData.value[i].parent) {
      //没有parent
      data.value[j] = classData.value[i];
      j++;
    }
  }
};
//根据名字找id
const findId = (nameTemp) => {
  for (let i in classData.value) {
    if (classData.value[i].title == nameTemp) {
      console.log(classData.value[i]._id);
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
  console.log(newModel.value);
  await http.post("commodity-class/addClass", newModel.value);
  message.success("添加成功");
  fetch();
  viss.value.addSon = false;
};
//新增分类,传进来的父类需要用名字搜索id
const addClassOk = async () => {
  if (newModel.value.parent == "") {
    delete newModel.value.parent;
  } else {
    newModel.value.parent = findId(newModel.value.parent);
  }
  console.log(newModel.value);
  await http.post("commodity-class/addClass", newModel.value);
  message.success("添加成功");
  fetch();
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
const remove = async (temp) => {
  isParent(temp);
  await http.delete(`commodity-class/${temp._id}`);
  fetch();
  message.success("成功");
};
//如果删除的是父类，那需要把子类里面的parent 给delete掉,使用更新
const isParent = async (temp) => {
  if (temp.children[0]) {
    let model1 = ref({
      title: temp.children[0].title,
    });
    console.log(temp.children[0]);
    await http.post(
      `commodity-class/updata/${temp.children[0]._id}`,
      model1.value
    );
  } else console.log("my");
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
    findName(temp.parent).then((res) => {
      showParent.value = res.title;
    });
};
const editClassOk = async () => {
  console.log(newModel.value);
  if (newModel.value.parent && newModel.value.parent != "") {
    newModel.value.parent = findId(newModel.value.parent);
  }
  await http.post(`commodity-class/updata/${showId.value}`, newModel.value);
  viss.value.edit = false;
  resetModel();
  fetch();
};
onMounted(() => {
  fetch();
});
</script>
