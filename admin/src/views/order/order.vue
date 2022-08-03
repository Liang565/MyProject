<template>
  <div>
    <div class="mb-2 flex justify-start">
      <div>
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
      <div>
        <a-form layout="inline">
          <a-form-item label="状态" class="w-44">
            <a-select
              :options="optionsState"
              v-model:value="where.state"
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
        rowKey="_id"
        :pagination="pagination"
        @change="pageChange"
      >
        <!-- <a-table-column title="id" dataIndex="_id" key="_id" class="w-40" /> -->
        <a-table-column
          title="订单号"
          dataIndex="_id"
          key="_id"
          align="center"
        />
        <a-table-column
          title="商品"
          dataIndex="commodity"
          key="commodity"
          align="center"
        >
          <template #="{ record }">
            <a-button type="link" @click="lookGood(record.commodity, '商品')">
              <div class="w-20 overflow-hidden text-ellipsis whitespace-nowrap">
                {{ record.commodity.commodityName }}
              </div>
            </a-button>
            <!-- {{ record.commodity.commodityName }} -->
          </template>
        </a-table-column>
        <a-table-column
          align="center"
          title="数量"
          dataIndex="goodsNum"
          key="goodsNum"
        />
        <a-table-column
          align="center"
          title="订单备注"
          dataIndex="remarks"
          key="remarks"
        >
          <template #="{ record }">
            <a-button type="link" @click="look(record.remarks, '订单备注')">
              <div
                class="w-20 overflow-hidden text-ellipsis whitespace-nowrap"
                v-if="record.remarks"
              >
                {{ record.remarks }}
              </div>
              <div v-else>无备注</div>
            </a-button>
          </template>
        </a-table-column>
        <a-table-column
          align="center"
          title="金额"
          dataIndex="money"
          key="money"
        />
        <a-table-column
          align="center"
          title="订单状态"
          dataIndex="state"
          key="state"
        />
        <a-table-column
          align="center"
          title="订单创建时间"
          dataIndex="createdAt"
          key="createdAt"
        />
        <a-table-column
          align="center"
          title="收货人信息"
          dataIndex="userInfo"
          key="userInfo"
        >
          <template #="{ record }">
            <div>
              {{ record.userInfo.name }}
            </div>
          </template>
        </a-table-column>
        <a-table-column
          align="center"
          title="快递"
          dataIndex="express"
          key="express"
        >
          <template #="{ record }">
            <div v-if="record.express">{{ record.express }}</div>
            <div v-else>无</div>
          </template>
        </a-table-column>
        <a-table-column
          align="center"
          title="操作备注"
          dataIndex="settingRemarks"
          key="settingRemarks"
        >
          <template #="{ record }">
            <a-button
              type="link"
              @click="look(record.settingRemarks, '操作备注')"
            >
              <div
                class="w-20 overflow-hidden text-ellipsis whitespace-nowrap"
                v-if="record.settingRemarks"
              >
                {{ record.settingRemarks }}
              </div>
              <div v-else>无备注</div>
            </a-button>
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
              <a-button
                type="link"
                @click="remove(record, record.commodityName)"
                >删除</a-button
              >
            </div>
          </template>
        </a-table-column>
      </a-table>
    </div>
    <!-- 编辑弹窗 -->
    <div>
      <a-modal
        v-model:visible="viss.edit"
        title="修改"
        @ok="editOk(editModel)"
        :afterClose="cancelModel"
        :centered="true"
        :destroyOnClose="true"
      >
        <!-- 选框里面的  :filter-Option="filterOption"用于搜索选项 -->

        <a-form :model="editModel">
          <a-form-item label="订单号">
            {{ editModel._id }}
          </a-form-item>
          <a-form-item label="商品">
            <a-form>
              <a-form-item label="商品名称">
                {{ editModel.commodity.commodityName }}
              </a-form-item>
              <a-form-item label="商品id">
                {{ editModel.commodity._id }}
              </a-form-item>
              <a-form-item label="商品价格">
                {{ editModel.commodity.price }}
              </a-form-item>
            </a-form>
          </a-form-item>
          <a-form-item label="数量">
            {{ editModel.goodsNum }}
          </a-form-item>
          <a-form-item label="订单备注">
            <div v-if="editModel.remarks && editModel.remark != ''">
              {{ editModel.remarks }}
            </div>
            <div v-else>无</div>
          </a-form-item>
          <a-form-item label="订单金额">
            {{ editModel.money }}
          </a-form-item>
          <a-form-item label="订单状态">
            <a-select
              :options="optionsState"
              v-model:value="orderTemp.state"
              :allowClear="true"
              :showSearch="true"
              :filter-Option="filterOption"
            ></a-select>
          </a-form-item>
          <a-form-item label="收货人信息">
            <a-form>
              <a-form-item label="姓名">
                {{ editModel.userInfo.name }}
              </a-form-item>
              <a-form-item label="姓名">
                {{ editModel.userInfo.name }}
              </a-form-item>
              <a-form-item label="地址">
                {{ editModel.userInfo.province }}\
                {{ editModel.userInfo.city }}\ {{ editModel.userInfo.county }}\
                {{ editModel.userInfo.address }}\
              </a-form-item>
              <a-form-item label="联系电话">
                {{ editModel.userInfo.tel }}
              </a-form-item>
              <a-form-item label="邮政编号">
                {{ editModel.userInfo.postalCode }}
              </a-form-item>
            </a-form>
          </a-form-item>
          <a-form-item label="快递号">
            <a-input v-model:value="orderTemp.express" />
          </a-form-item>
          <a-form-item label="操作备注">
            <a-textarea
              :row="4"
              v-model:value="orderTemp.settingRemarks"
              maxlength="200"
              :showCount="true"
            />
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
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

  addOk,
  fetch,
  data,
  query,
  where,
  search,
  pagination,
  pageChange,
} = CrudTest("orders");
let resetList = ref(true);
let visible = ref(false);
let imgUrl = ref("");
const Role = localStorage.getItem("role");
//切换店铺
let optionsShop = ref<any>([]);
const setOptionsShop = async () => {
  const res: Array<any> = await http.post(
    `/commoditys/Goods/${localStorage.userid}`
  );
  console.log(res.length);
  //如果没有商铺会提示无商铺
  if (!res || res.length == 0) {
    if (Role === "admin") {
      message.info("当前为管理员用户");
    } else message.info("该用户下无店铺");
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

let newModel = <any>ref({});
let editModel = <any>ref({});
const resetModel = () => {
  newModel.value = {};
  editModel.value = <any>{};
  orderTemp.value = {
    express: "",
    settingRemarks: "",
    state: "",
  };
};

//分类选框
let optionsState = ref<any>([
  {
    label: "未支付",
    value: "未支付",
  },
  {
    label: "待发货",
    value: "待发货",
  },
  {
    label: "待收货",
    value: "待收货",
  },
  {
    label: "待评价",
    value: "待评价",
  },
  {
    label: "已收货",
    value: "已收货",
  },
  {
    label: "退货申请",
    value: "退货申请",
  },
  {
    label: "已退货",
    value: "已退货",
  },
  {
    label: "取消订单",
    value: "取消订单",
  },
]);

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
let orderTemp = ref({
  express: "",
  settingRemarks: "",
  state: "",
});
const edit = (temp) => {
  editModel.value = temp;
  viss.value.edit = true;
  orderTemp.value.express = temp.express;
  orderTemp.value.settingRemarks = temp.settingRemarks;
  orderTemp.value.state = temp.state;
};
const editOk = async (temp: any) => {
  console.log("editOk");
  const res = await http.put(`orders/${temp._id}`, orderTemp.value);
  viss.value.edit = false;
  fetch();
};
watch(resetList, (newValue, oldValue) => {
  console.log("aaa侦听器");
  console.log(newValue);
  console.log(oldValue);
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
const lookGood = (temp: any, text) => {
  console.log(temp);
  //搞个商品插件
  Modal.info({
    title: `${text}`,
    content: h("text", {}, [
      h("p", `商品id:  ${temp._id}`),
      h("p", `商品名称:${temp.commodityName}`),
      h("p", `商品价格:${temp.price}`),
    ]),
    onOk() {
      console.log("ok");
    },
  });
};
onMounted(() => {
  setOptionsShop();
  if (Role == "admin") {
    fetch();
  }
});
</script>
