<template>
  <div>
    <div>
      <!-- 搜索框 -->
      <form action="/">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
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
      <div>
        <van-grid square>
          <van-grid-item
            v-for="value in 8"
            :key="value"
            icon="photo-o"
            text="文字"
          />
        </van-grid>
      </div>
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
const images = [
  "https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
  "https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
];
</script>
<style scoped></style>
