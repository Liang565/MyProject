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
        <!-- <van-swipe :autoplay="3000" lazy-render>
          <van-swipe-item v-for="image in data" :key="image">
            <myimage :src="image.image" />

            {{ image.image[0].url }}
          </van-swipe-item>
        </van-swipe> -->
      </div>
      <!-- 推荐 随机抽取 -->
      <div></div>
      <div>
        <!-- 商品随机抽取 -->

        <van-grid direction="horizontal" :column-num="2">
          <van-grid-item v-for="i in data">
            <myimage :src="i.image" />
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { Grid, Swipe } from "vant";
import { Curd } from "../../util/api/curd";
import { onMounted, ref } from "vue";
import myimage from "../../components/myimage.vue";
//轮播图，存入商品对象
const { fetch, search, data, query, goGoods, total } = Curd("commoditys");
const router = useRouter();
const goSearch = () => {
  // 这里要跳转到搜索页
  console.log("点击搜索条");
  router.push("/search");
};

onMounted(() => {
  fetch();
});
</script>
