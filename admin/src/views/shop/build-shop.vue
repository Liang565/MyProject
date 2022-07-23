<template>
  <div>
    <div>
      <a-form layout="inline">
        <a-form-item label="切换店铺" class="w-44">
          <a-select
            :options="optionsShop"
            v-model:value="shopId"
            @change="changeShop"
          />
        </a-form-item>
      </a-form>
    </div>
    <div class="mt-5 flex justify-between">
      <div>
        <div>添加组件</div>
        <div v-for="i in Components">
          <a-button
            type="primary"
            class="w-20 my-2"
            @click="addComponent(i.title)"
            >{{ i.name }}</a-button
          >
        </div>
        <div class="fixed bottom-50vh">
          <a-button type="primary" class="w-20 my-2" @click="saveModel"
            >保存</a-button
          >
        </div>
      </div>
      <div class="w-500 h-70vh bg-white overflow-y-auto">
        <draggable v-model="myShop.components" group="people" item-key="id">
          <template #item="{ element }">
            <div>
              <component
                :is="pushComponents(element.name)"
                :option="element.option"
                :content="element.content"
                :index="index"
                :goods="goods"
                @click="config(element)"
                @removeComponent="remove(element)"
              ></component>
            </div>
          </template>
        </draggable>
      </div>
      <div>
        <div id="option">设置</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { message } from "ant-design-vue";
import { defineAsyncComponent, onMounted, ref } from "vue";
import { http } from "../../util/http";
import draggable from "vuedraggable";

/**添加组件 */
const pushComponents = (components: any) => {
  return defineAsyncComponent(
    () => import(`../../components/components/${components}.vue`)
  );
};
//设置组件名
let Components = ref();
let data = ref(); //存当前用户下的所有商铺信息
let myShop = ref<any>({}); //存需要改变
let myModel = ref(); //暂存组件信息
let optionsShop = ref<any>([]); //店铺
let index = ref(); //传回组件的索引
const userid = localStorage.getItem("userid");
const Role = localStorage.getItem("role");
let shopId = ref(); //店铺id
let goods = ref(); //商品
const config = (element) => {
  index.value = element.index;
};
/**
 * 切换店铺方法：
 */
const changeShop = () => {
  for (let i in data.value) {
    if (data.value[i]._id === shopId.value) {
      myShop.value = data.value[i];
      break;
    }
  }
  fetchGoods();
};
/**
 * 获取组件
 */
const fetchComponents = async () => {
  const res = await http.get("components", {
    params: {
      //展示条件
      query: {
        limit: 999,
        where: {
          key: "user",
        },
      },
    },
  });
  Components.value = res.data;
};
// 获取店铺信息
const fetchMyShop = async () => {
  const res = await http.get("shops", {
    params: {
      //展示条件
      query: { limit: 999, where: { user: userid } },
    },
  });
  //如果没有商铺会提示无商铺
  if (res.length === 0) {
    if (Role === "admin") {
      message.info("当前为管理员用户");
    } else message.info("该用户下无店铺");
  } else {
    optionsShop.value = res.data.map((v: { title: any; _id: any }) => ({
      label: v.title,
      value: v._id,
    }));
    //默认用商铺来查询商铺
    if (optionsShop.value[0].value) {
      shopId.value = optionsShop.value[0].value;
      myShop.value = res.data[0];
      fetchGoods();
    }
    data.value = res.data;
  }
};
/**
 * 添加组件
 * @param  temp组件名
 */
const addComponent = (temp: any) => {
  if (temp === "grid") {
    myShop.value.components.push({
      name: temp,
      option: { index: Date.now(), column: 4 },
      content: {},
      index: Date.now(),
    });
  } else {
    myShop.value.components.push({
      name: temp,
      option: { index: Date.now(), height: 356, autoplay: 3000 },
      content: {},
      index: Date.now(),
    });
  }
};
/**
 * 删除
 * @param temp 组件对象
 */
const remove = async (temp: any) => {
  myShop.value.components.splice(myShop.value.components.indexOf(temp), 1);
};
const selectComponents = () => {};
const fetchGoods = async () => {
  const res = await http.get("commoditys", {
    params: {
      //展示条件
      query: { where: { shop: shopId.value }, limit: 999 },
    },
  });
  goods.value = res.data;
};
const saveModel = async () => {
  const res = await http.put(`shops/${shopId.value}`, {
    components: myShop.value.components,
  });
  if (res) {
    message.success("保存成功~");
  } else {
    message.success("保存失败~");
  }
};

onMounted(() => {
  if (Role === "admin") {
    message.info("当前用户为管理员用户~");
  } else {
    fetchComponents();
    fetchMyShop();
  }
});
</script>
