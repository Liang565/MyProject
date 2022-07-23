<template>
  <div>
    <div>
      <!-- 搜索框 -->
      <form action="/">
        <van-search
          @click-input="goSearch"
          placeholder="请输入搜索关键词"
          shape="round"
        />
      </form>
    </div>
    <div class="mb-20">
      <div v-for="i in COMPS">
        <component
          :is="pushComponents(i.name)"
          :option="i.option"
          :content="i.content"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { http } from "../../util/http";
import { defineAsyncComponent, onMounted, ref } from "vue";
let COMPS = ref();
let data = ref();

//轮播图，存入商品对象
const router = useRouter();
const goSearch = () => {
  // 这里要跳转到搜索页
  console.log("点击搜索条");
  router.push("/search");
};
/**添加组件 */
const pushComponents = (components: any) => {
  return defineAsyncComponent(
    () => import(`../../components/components/${components}.vue`)
  );
};
const fetch = async () => {
  const res = await http.post("build-home/findone", { name: "首页" });
  console.log(res);
  data.value = res;
  COMPS.value = res.components;
};
onMounted(() => {
  fetch();
});
</script>
