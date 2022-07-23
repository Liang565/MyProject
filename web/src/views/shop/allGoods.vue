<template>
  <div>
    <div class="flex justify-between items-center mx-2">
      <div>
        <!-- 返回前一个页面 -->
        <!-- <button @click="$router.go(-1)"> -->
        <button @click="goBack">
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
      </div>
      <div class="ml-2">
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
      <!-- 搜索 -->
      <div class="w-5/6">
        <form action="/">
          <van-search
            :clearable="false"
            shape="round"
            v-model="SearchModel"
            placeholder="请输入搜索关键词"
            @cancel="clearSearch"
            @search="goSearch"
            show-action
          >
            <template #right-icon>
              <div
                @click="goSearch"
                class="border-2 border-red-400 rounded-lg bg-red-200 text-sm"
              >
                搜索
              </div>
            </template>
          </van-search>
        </form>
      </div>

      <!-- 切换竖直显示还是田子格显示 -->
      <div>
        <button @click="changeShow">
          <div v-show="upright">
            <icon-park
              type="list-one"
              theme="outline"
              size="24"
              :spin="false"
              fill="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              :strokeWidth="2"
            />
          </div>
          <div v-show="!upright">
            <icon-park
              type="waterfalls-h"
              theme="outline"
              size="24"
              :spin="false"
              fill="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              :strokeWidth="2"
            />
          </div>
        </button>
      </div>
    </div>

    <!-- 搜索结果展示 -->
    <!-- 竖直显示 -->
    <div v-show="upright">
      <div v-for="i in data" class="m-3" @click="goGoods(i)">
        <van-card>
          <!-- 标题 -->
          <template #title>
            <div
              class="text-lg h-8 w-full overflow-hidden text-ellipsis whitespace-nowrap"
            >
              {{ i.commodityName }}
            </div>
          </template>
          <!-- 描述信息 -->
          <template #desc>
            <div
              class="text-base h-6 w-full overflow-hidden text-ellipsis whitespace-nowrap"
            >
              {{ i.commodityIntroduce }}
            </div>
          </template>

          <!-- 价格 -->
          <template #price>
            <div class="text-lg text-red-600">￥{{ i.price }}</div>
          </template>
          <!-- 图片 -->
          <template #thumb>
            <div>
              <myimage :src="i.image" />
            </div>
          </template>
        </van-card>
      </div>
    </div>
    <!-- 田字展示 -->
    <div v-show="!upright">
      <van-grid :border="false" :column-num="2" :center="true">
        <van-grid-item v-for="i in data" @click="goGoods(i)">
          <div class="w-full h-full bg-gray-200">
            <!-- 图片 -->
            <div class="text-center">
              <myimage :src="i.image" height="80" radius="10" />
            </div>

            <!-- 标题 -->
            <div class="text-center text-lg">
              {{ i.commodityName }}
            </div>

            <!-- 描述信息 -->
            <div
              class="text-center text-base h-6 overflow-hidden text-ellipsis"
            >
              {{ i.commodityIntroduce }}
            </div>
            <div class="text-center text-lg text-red-600">￥{{ i.price }}</div>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import iconPark from "../../components/iconPark.vue";
import { http } from "../../util/http";
import { Card, Grid, GridItem, Toast } from "vant";
import myimage from "../../components/myimage.vue";
import { useRoute, useRouter } from "vue-router";
import { Curd } from "../../util/api/curd";

const { search, data, query, goGoods } = Curd("commoditys");
const props = defineProps({
  id: String,
});
//搜索关键词
let SearchModel = ref();
//搜索方法
const goSearch = async () => {
  if (SearchModel.value == "" || !SearchModel.value) {
    Toast.fail("请输入关键词");
    query.value.where = {
      shop: props.id,
    };
    search();
  } else {
    //$regex:模糊搜索
    query.value.where = {
      commodityName: { $regex: SearchModel.value },
      shop: props.id,
    };
    search();
  }
};

//清空搜索框
const clearModel = ref();
const clearSearch = () => {
  query.value.where = {
    shop: props.id,
  };
  search();
};
//改变搜索的视图
let upright = ref(true);
const changeShow = () => {
  upright.value = !upright.value;
  //JSON.stringify()转字符串
  sessionStorage.setItem("upright", JSON.stringify(upright.value));
};

const router = useRouter();

const goBack = () => {
  router.go(-1);
  // sessionStorage.removeItem("SearchArray");
};
const goHome = () => {
  router.push("/");
};
onMounted(() => {
  console.log("加载");
  if (useRoute().query.query1) {
    console.log("存在参数");
    const a = <any>useRoute().query.query1;
    query.value = JSON.parse(a);
    search();
  } else {
    goSearch();
  }
  //搜索结果的展示方法
  const item = sessionStorage.getItem("upright");
  if (item) {
    upright.value = JSON.parse(item);
  }
});
</script>
