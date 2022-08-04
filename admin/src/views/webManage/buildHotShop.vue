<template>
  <div>
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
        <draggable v-model="shops.components" group="people" item-key="id">
          <template #item="{ element }">
            <div>
              <component
                :is="pushComponents(element.name)"
                :option="element.option"
                :content="element.content"
                :index="index"
                :allshops="allshops"
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

let shops = ref<any>({}); //存需要改变
let index = ref(); //传回组件的索引
let homeId = ref(); //店铺id
let allshops = ref(); //商铺
const config = (element) => {
  index.value = element.index;
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
          key: "admin",
        },
      },
    },
  });
  Components.value = res.data;
};
// 获取信息
const fetch = async () => {
  const res = await http.post("build-home/findone", { name: "商铺推荐" });
  shops.value = res;
};
/**
 * 添加组件
 * @param  temp组件名
 */
const addComponent = (temp: any) => {
  shops.value.components.push({
    name: temp,
    option: { index: Date.now() },
    content: {},
    index: Date.now(),
  });
};
/**
 * 删除
 * @param temp 组件对象
 */
const remove = async (temp: any) => {
  shops.value.components.splice(shops.value.components.indexOf(temp), 1);
};
const selectComponents = () => {};
const fetchShops = async () => {
  const res = await http.get("shops", {
    params: {
      //展示条件
      query: { limit: 999 },
    },
  });

  allshops.value = res.data;
};
const saveModel = async () => {
  const res = await http.put(`build-home/${shops.value._id}`, {
    components: shops.value.components,
  });
  if (res) {
    message.success("保存成功~");
  } else {
    message.success("保存失败~");
  }
};

onMounted(() => {
  fetchComponents();
  fetchShops();

  fetch();
});
</script>
