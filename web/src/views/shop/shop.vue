<template>
  <div>
    <div class="flex justify-between items-center m-2">
      <div>
        <!-- 返回前一个页面 -->
        <button @click="goBack" class="mx-2">
          <icon-park
            type="back"
            theme="outline"
            size="24"
            :spin="false"
            fill="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            :strokeWidth="2"
          />
        </button>
        <!-- 返回首页 -->
        <button @click="goHome">
          <icon-park
            type="home"
            theme="outline"
            size="24"
            :spin="false"
            fill="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            :strokeWidth="2"
          />
        </button>
      </div>
      <div>
        <div class="text-lg">{{ title }}</div>
      </div>
      <div>
        <!-- 分享 -->
        <button @click="share">
          <icon-park
            type="more"
            theme="outline"
            size="24"
            :spin="false"
            fill="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            :strokeWidth="2"
          />
        </button>
      </div>
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
<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from "vue";
import iconPark from "../../components/iconPark.vue";
import { http } from "../../util/http";
import { Toast, Search, Tabbar, TabbarItem } from "vant";
import { useRouter } from "vue-router";
const props = defineProps({
  id: String,
});
let data = ref();
let COMPS = ref();
let title = ref("");

/**添加组件 */
const pushComponents = (components: any) => {
  return defineAsyncComponent(
    () => import(`../../components/components/${components}.vue`)
  );
};
const router = useRouter();

const share = () => {
  // 这里展示分享页面
  console.log("分享");
};
const goBack = () => {
  router.go(-1);
};
const goHome = () => {
  router.push("/");
};

const fetch = async () => {
  const res = await http.get(`shops/${props.id}`);
  console.log(res.components);
  data.value = res;
  COMPS.value = res.components;
  title.value = data.value.title;
};
onMounted(() => {
  fetch();
});
</script>
