<template>
  <div class="h-100vh">
    <van-tabs v-model:active="active" @change="tabChange" :swipeable="true">
      <van-tab v-for="i in tabName" :title="i" :name="i">
        <div class="h-100vh">
          <div v-for="i in COMPS2">
            <component
              :is="pushComponents(i.name)"
              :option="i.option"
              :content="i.content"
            />
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { http } from "../../util/http";
import { Tab, Tabs } from "vant";
import { defineAsyncComponent, onMounted, ref, watch } from "vue";
let active = ref("商品推荐");
const tabChange = async (name: any) => {
  console.log(name);
};
let COMPS1 = ref();
let data1 = ref();
let COMPS2 = ref();
let data2 = ref();
let tabName = ["商品推荐", "商铺推荐"];
/**添加组件 */
const pushComponents = (components: any) => {
  return defineAsyncComponent(
    () => import(`../../components/components/${components}.vue`)
  );
};
watch(
  active,
  async (newValue: any, oldValue) => {
    console.log(newValue);
    const res2 = await http.post("build-home/findone", { name: newValue });
    data2.value = res2;
    COMPS2.value = res2.components;
  },

  {
    immediate: true,
  }
);
// onMounted(() => {
//   fetch();
// });
</script>
