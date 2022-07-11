<template>
  <div>
    <div class="text-2xl">分类</div>
    <!-- 搜索 -->
    <div class="">
      <a-form layout="inline">
        <a-form-item label="搜索" class="w-44">
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
    <div class="mt-4">
      <a-table
        :dataSource="data"
        rowKey="_id"
        :scroll="{ y: 400 }"
        class="h-400"
      >
        <a-table-column
          title="类别"
          dataIndex="title"
          key="title"
          class="w-60"
        />

        <!-- <a-table-column title="id" dataIndex="_id" key="_id" />
        <a-table-column title="id" dataIndex="parent" key="parent" /> -->
      </a-table>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { message } from "ant-design-vue";
import { onMounted, ref } from "vue";
import { CrudTest } from "../../util/api/crud-api";
import { http } from "../../util/http";
let data = ref();
//展示条件
let query = ref({
  limit: 999, //一页展示多少条,默认0时会全部展示，
  page: 1, //展示页码
  // where: ref({}),
  where: { parent: { $exists: false } },
  // where: ref(wheres) //展示筛选条件 where 别加s
  // populate: "user", //展示关联表的内容
});

const fetch = async () => {
  let res: any = await http.get("/commodity-class/", {
    params: {
      query: query.value,
    },
  });
  data.value = res.data;
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
  let id = Classwhere.value._id;
  if (id == "") {
    message.warn("未选择");
  } else if (typeof id === "undefined") {
    query.value.where = { parent: { $exists: false } };
    fetch();
  } else {
    //删除了parent。
    delete query.value.where.parent;
    query.value.where = <any>Classwhere.value;

    fetch();
  }
};
onMounted(() => {
  fetch();
  setOptions();
});
</script>
