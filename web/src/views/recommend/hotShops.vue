<template>
  <div class="h-100vh">
    <div v-for="i in COMPS">
      <component
        :is="pushComponents(i.name)"
        :option="i.option"
        :content="i.content"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { http } from "../../util/http";
import { defineAsyncComponent, onMounted, ref } from "vue";
let COMPS = ref();
let data = ref();

/**添加组件 */
const pushComponents = (components: any) => {
  return defineAsyncComponent(
    () => import(`../../components/components/${components}.vue`)
  );
};
const fetch = async () => {
  const res = await http.post("build-home/findone", { name: "商铺推荐" });

  data.value = res;
  COMPS.value = res.components;
};
onMounted(() => {
  fetch();
});
</script>
