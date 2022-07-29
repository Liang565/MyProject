<template>
  <div>
    <div>
      <div>
        <a-form layout="inline">
          <a-form-item label="商品名：" class="w-52">
            <a-input v-model:value="where.commodityName"></a-input>
          </a-form-item>
          <a-form-item label="所属分类" class="w-44">
            <a-select
              :options="optionsClass"
              v-model:value="where.title"
              :allowClear="true"
              :showSearch="true"
              :filter-Option="filterOption"
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
          title="id"
          dataIndex="_id"
          key="_id"
          class="w-40"
          align="center"
        />
        <a-table-column
          align="center"
          title="商品名"
          dataIndex="commodityName"
          key="commodityName"
        />
        <a-table-column
          title="商品介绍"
          dataIndex="commodityIntroduce"
          key="commodityIntroduce"
          align="center"
        >
          <template #="{ record }">
            <a-button
              type="link"
              @click="look(record.commodityIntroduce, '商品介绍')"
              >查看</a-button
            >
          </template>
        </a-table-column>
        <a-table-column
          title="参数"
          dataIndex="parameter"
          key="parameter"
          align="center"
        >
          <template #="{ record }">
            <a-button type="link" @click="look(record.parameter, '参数')"
              >查看</a-button
            >
          </template>
        </a-table-column>
        <a-table-column
          align="center"
          title="数量"
          dataIndex="commodityNum"
          key="commodityNum"
        />
        <a-table-column
          title="价格"
          dataIndex="price"
          key="price"
          align="center"
        />

        <a-table-column
          title="分类"
          dataIndex="title"
          key="title"
          align="center"
        >
          <template #="{ record }">
            <span>{{ record.title?.title }}</span>
          </template>
        </a-table-column>
        <a-table-column
          title="所属商铺"
          dataIndex="shop"
          key="shop"
          align="center"
        >
          <template #="{ record }">
            <span>{{ record.shop?.title }}</span>
          </template>
        </a-table-column>

        <a-table-column
          title="图片"
          dataIndex="image"
          key="image"
          align="center"
        >
          <template #="{ record }">
            <div v-if="record.image.length == 0">空</div>
            <div v-else>
              <myimg :URL="record.image" />
            </div>
          </template>
        </a-table-column>

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

  <div>
    <a-modal
      v-model:visible="viss.edit"
      title="修改商品信息"
      @ok="editOk(editId, newModel)"
      :afterClose="cancelModel"
      :centered="true"
    >
      <!-- 选框里面的  :filter-Option="filterOption"用于搜索选项 -->

      <a-form :model="newModel">
        <a-form-item label="商品名">
          <a-input v-model:value="newModel.commodityName"></a-input>
        </a-form-item>
        <a-form-item label="分类">
          <a-select
            :allowClear="true"
            :showSearch="true"
            :options="optionsClass"
            v-model:value="newModel.title"
            :filter-Option="filterOption"
          >
          </a-select>
        </a-form-item>
        <a-form-item label="商品简介">
          <a-input v-model:value="newModel.commodityIntroduce"></a-input>
        </a-form-item>
        <a-form-item label="商品图片">
          <!-- 这里要搞一个图片列表 -->
          <list-upload
            :imgList="newModel.image"
            :resetList="resetList"
            @on-success="
              (aa) => {
                newModel.image = aa;
              }
            "
          />
        </a-form-item>
        <a-form-item label="参数">
          <a-input v-model:value="newModel.parameter"></a-input>
        </a-form-item>
        <a-form-item label="数量">
          <a-input v-model:value="newModel.commodityNum"></a-input>
        </a-form-item>
        <a-form-item label="价格">
          <a-input v-model:value="newModel.price"></a-input>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "@vue/runtime-core";
import { message, Modal } from "ant-design-vue";
import { ref, watch, h } from "vue";
import { api } from "../../util/api/api";
import { http } from "../../util/http";
import { CrudTest } from "../../util/api/crud-api";

import ListUpload from "../../components/ListUpload.vue";

import adminStore from "../../stores/admin-store";
import myimg from "../../components/myImg/myimglist.vue";

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
} = CrudTest("commoditys");
let resetList = ref(true);
let visible = ref(false);
let imgUrl = ref("");

const Role = localStorage.getItem("role");
const changeUrl = (url) => {
  imgUrl.value = url;
  visible.value = true;
};

//切换店铺
let optionsShop = ref<any>([]);
const setOptionsShop = async () => {
  const res: Array<any> = await http.post(
    `/commoditys/Goods/${localStorage.userid}`
  );
  //如果没有商铺会提示无商铺
  if (res.length === 0) {
    if (Role === "admin") {
      message.info("当前为管理员用户");
    } else message.error("该用户下无店铺,不能新增商品");
  } else {
    optionsShop.value = res.map((v) => ({
      label: v.title,
      value: v.id,
    }));
    //默认用商铺来查询商品信息
    if (optionsShop.value[0].value) {
      where.value.shop = optionsShop.value[0].value;
      newModel.value.shop = where.value.shop;
      search();
    }
  }
};
//切换店铺方法：
const selectChange = () => {
  newModel.value.shop = where.value.shop;
  search();
};
//新增接口路径
let addUrl = ref("addShop");

//搜索
where.value = {
  commodityName: "", //商品名
  title: "", //分类名
  //所属店铺，设一个默认值
  shop: "",
};

let newModel = ref({
  commodityName: "", // "商品名",
  commodityIntroduce: "", // "商品介绍",
  image: [], //图片
  title: "", //分类
  parameter: [], //参数
  commodityNum: 0, //数量
  price: 0, //价格
  shop: "", //所属店铺
});
const resetModel = () => {
  newModel.value = {
    commodityName: "", // "商品名",
    commodityIntroduce: "", // "商品介绍",
    // image: newModel.value.image, //图片
    image: [],
    title: "", //分类
    parameter: [], //参数
    commodityNum: 0, //数量
    price: 0, //价格

    shop: newModel.value.shop,
  };
};

const addShop = () => {
  if (optionsShop.value.length === 0) {
    if (Role === "admin") {
      message.info("当前为管理员用户");
    } else message.error("该用户下无店铺,不能新增商品");
  } else {
    viss.value.add = true;
    //组件Listupload 的属性，要求有变化就行
    resetList.value = !resetList.value;
  }
};

//分类选框
let optionsClass = ref<any>([]);
const findClassOptions = async () => {
  const res: any = await http.get("commodity-class", {
    params: { query: { limit: 999 } },
  });
  optionsClass.value = res.data.map((v) => ({
    label: v.title,
    value: v._id,
  }));
};
//分类选框搜索选项
const filterOption = (input: string, optionsClass: any) => {
  //可以用这个进行模糊搜索
  return optionsClass.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
const cancelModel = () => {
  resetModel();

  console.log("cancel");
};

//修改
let editId = ref("");
const edit = (temp) => {
  newModel.value.image = temp.image;
  newModel.value.commodityName = temp.commodityName;
  newModel.value.price = temp.price;
  newModel.value.commodityIntroduce = temp.commodityIntroduce; // "商品介绍",
  newModel.value.title = temp.title._id; //分类
  newModel.value.parameter = temp.parameter; //参数
  newModel.value.commodityNum = temp.commodityNum; //数量
  newModel.value.shop = temp.shop;
  // newModel.value.shop: "", //所属店铺
  editId.value = temp._id;
  viss.value.edit = true;
  //组件Listupload 的属性，要求有变化就行
  resetList.value = !resetList.value;
};
watch(resetList, (newValue, oldValue) => {
  console.log("aaa侦听器");
});

const look = (temp, text) => {
  console.log(temp);
  Modal.info({
    title: `${text}`,
    content: h("div", {}, `${temp}`),
    onOk() {
      console.log("ok");
    },
  });
};
onMounted(() => {
  findClassOptions();
  setOptionsShop();
  if (Role == "admin") {
    fetch();
  }
});
</script>
