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
    <div>
      <!-- 轮播图 -->
      <div>
        <van-swipe :autoplay="3000" lazy-render>
          <van-swipe-item v-for="image in images" :key="image">
            <img :src="image" class="" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 推荐 随机抽取 -->
      <div></div>
      <div>
        <!-- 商品随机抽取 -->
        <div>
          <van-grid direction="horizontal" :column-num="2">
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
          </van-grid>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { Grid, Swipe } from "vant";
import { Curd } from "../../util/api/curd";
import { onMounted } from "vue";
const router = useRouter();
const goSearch = () => {
  // 这里要跳转到搜索页
  console.log("点击搜索条");
  router.push("/search");
};
const { fetch, search, data, query, goGoods, total } = Curd("commoditys");

onMounted(() => {
  fetch();
});
</script>
<style scoped></style>
