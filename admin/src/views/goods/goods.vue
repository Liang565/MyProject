<template>
  <!-- <div>{{ newModel }}</div> -->
  <div>
    <div class="mb-2 text-2xl">商品管理</div>
    <div class="mb-2 flex justify-start">
      <div>
        <a-button @click="addShop" type="primary"> 新增商品 </a-button>
      </div>
      <div class="ml-5">
        <a-form layout="inline">
          <a-form-item label="切换店铺" class="w-44">
            <a-select
              :options="optionsShop"
              v-model:value="where.shop"
              @change="selectChange"
            >
            </a-select>
          </a-form-item>
        </a-form>
      </div>
    </div>
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

    <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
      <img :src="imgUrl" />
    </a-modal>
    <div class="mt-5">
      <a-table
        :dataSource="data"
        rowKey="title"
        :pagination="pagination"
        @change="pageChange"
        :scroll="{ y: 390 }"
      >
        <a-table-column title="id" dataIndex="_id" key="_id" class="w-40" />
        <a-table-column
          title="商品名"
          dataIndex="commodityName"
          key="commodityName"
        />
        <a-table-column
          title="商品介绍"
          dataIndex="commodityIntroduce"
          key="commodityIntroduce"
        />
        <a-table-column title="参数" dataIndex="parameter" key="parameter">
          <template #="{ record }">
            <span>{{ record.parameter }}</span>
          </template>
        </a-table-column>
        <a-table-column
          title="数量"
          dataIndex="commodityNum"
          key="commodityNum"
        />

        <a-table-column title="分类" dataIndex="title" key="title">
          <template #="{ record }">
            <span>{{ record.title?.title }}</span>
          </template>
        </a-table-column>
        <a-table-column title="所属商铺" dataIndex="shop" key="shop">
          <template #="{ record }">
            <span>{{ record.shop?.title }}</span>
          </template>
        </a-table-column>

        <a-table-column title="图片" dataIndex="image" key="image">
          <template #="{ record }">
            <div v-if="record.image.length == 0">空</div>
            <div v-else>
              <myimg :URL="record.image" />
            </div>
          </template>
        </a-table-column>

        <a-table-column title="操作" dataIndex="operation" key="operation">
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
  <!-- 新增商品 -->
  <div>
    <a-modal
      v-model:visible="viss.add"
      title="新增商品"
      @ok="addOk(newModel)"
      :afterClose="cancelModel"
    >
      <!-- 选框里面的  :filter-Option="filterOption"用于搜索选项 -->
      <div>
        {{ newModel }}
      </div>
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
          <uploadList
            @on-success="
              (aa) => {
                newModel.image = aa;
              }
            "
          ></uploadList>
        </a-form-item>
        <a-form-item label="参数">
          <a-input v-model:value="newModel.parameter"></a-input>
        </a-form-item>
        <a-form-item label="数量">
          <a-input v-model:value="newModel.commodityNum"></a-input>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
  <!-- 修改商品 -->
  <div>
    <a-modal
      v-model:visible="viss.edit"
      title="修改商品信息"
      @ok="editOk(editId, newModel)"
      :afterClose="cancelModel"
    >
      <!-- 选框里面的  :filter-Option="filterOption"用于搜索选项 -->
      <div>
        {{ newModel }}
      </div>
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
          <uploadList
            :fileList1="newModel.image"
            @on-success="
              (aa) => {
                newModel.image = aa;
              }
            "
          ></uploadList>
        </a-form-item>
        <a-form-item label="参数">
          <a-input v-model:value="newModel.parameter"></a-input>
        </a-form-item>
        <a-form-item label="数量">
          <a-input v-model:value="newModel.commodityNum"></a-input>
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
import uploadList from "../../components/uploadList.vue";
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

let visible = ref(false);
let imgUrl = ref("");

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
    message.info("该用户下无店铺");
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
  shop: "", //所属店铺
});
const resetModel = () => {
  newModel.value = {
    commodityName: "", // "商品名",
    commodityIntroduce: "", // "商品介绍",
    image: newModel.value.image, //图片
    title: "", //分类
    parameter: [], //参数
    commodityNum: 0, //数量
    shop: newModel.value.shop,
  };
};

const addShop = () => {
  if (optionsShop.value.length === 0) {
    message.error("该用户下无店铺,不能新增商品");
  } else {
    viss.value.add = true;
  }
};

//分类选框
let optionsClass = ref<any>([]);
const findClassOptions = async () => {
  const res: any = await http.get("commodity-class", {
    params: { limit: 999 },
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
  console.log(temp);

  newModel.value.image = temp.image;
  newModel.value.commodityName = temp.commodityName;

  newModel.value.commodityIntroduce = temp.commodityIntroduce; // "商品介绍",
  newModel.value.title = temp.title._id; //分类
  newModel.value.parameter = temp.parameter; //参数
  newModel.value.commodityNum = temp.commodityNum; //数量
  // newModel.value.shop: "", //所属店铺
  editId.value = temp._id;
  viss.value.edit = true;
};
onMounted(() => {
  findClassOptions();
  setOptionsShop();
});
</script>
