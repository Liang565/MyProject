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
        <draggable v-model="home.components" group="people" item-key="id">
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

let home = ref<any>({}); //存需要改变
let index = ref(); //传回组件的索引
let homeId = ref(); //店铺id
let goods = ref(); //商品
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
          key: "public",
        },
      },
    },
  });
  Components.value = res.data;
};
// 获取信息
const fetch = async () => {
  const res = await http.post("build-home/findone", { name: "首页" });
  home.value = res;
};
/**
 * 添加组件
 * @param  temp组件名
 */
const addComponent = (temp: any) => {
  if (temp === "grid") {
    home.value.components.push({
      name: temp,
      option: { index: Date.now(), column: 4 },
      content: {},
      index: Date.now(),
    });
  } else {
    home.value.components.push({
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
  home.value.components.splice(home.value.components.indexOf(temp), 1);
};
const selectComponents = () => {};
const fetchGoods = async () => {
  const res = await http.get("commoditys", {
    params: {
      //展示条件
      query: { limit: 999 },
    },
  });

  goods.value = res.data;
};
const saveModel = async () => {
  const res = await http.put(`build-home/${home.value._id}`, {
    components: home.value.components,
  });
  if (res) {
    message.success("保存成功~");
  } else {
    message.success("保存失败~");
  }
};

onMounted(() => {
  fetchComponents();
  fetchGoods();

  fetch();
});
</script>
