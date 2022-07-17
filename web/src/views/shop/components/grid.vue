<template>
  <div>
    <Grid :column-num="option.column" :gutter="option.gutter">
      <!-- 默认 -->
      <GridItem
        v-if="!content.menu || content.menu.length == 0"
        text="文字"
        v-for="item in 8"
      >
        <div>
          <IconPark type="home" theme="outline"></IconPark>
          <div>{{ item }}内容为空</div>
        </div>
      </GridItem>
      <!-- 商品 -->
      <GridItem icon="photo-o" v-for="item in content.menu" v-if="showAddGoods">
        <div @click="goGoods(item.id)">
          <van-image :src="item.image" fit="contain" />
          <div class="price">
            <div>{{ item.title }}</div>
            <div>{{ item.price }}</div>
          </div>
        </div>
      </GridItem>
      <!-- 图片 -->
      <GridItem v-if="showAddImg" icon="photo-o" v-for="item in content.menu">
        <div @click="goUrl(item.url)">
          <van-image :src="item.image" fit="contain" />
        </div>
      </GridItem>
    </Grid>
  </div>
</template>

<script setup lang="ts">
import IconPark from "../../../components/iconPark.vue";
import { Grid, GridItem, Slider, Toast, Stepper } from "vant";
import { defineProps, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const prop = defineProps({
  option: {
    //设置列数和位置
    type: Object,
    default: () => ({}),
  },
  content: {
    //内容，类型可以是商品+商品id，图片+连接
    type: Object,
    default: () => ({}),
  },
  index: {
    //组件索引，判断点击的是哪个组件
    type: String,
    default: "",
  },
  goods: {
    type: Object,
    default: () => [],
  },
});
let showAddGoods = ref(true);
let showAddImg = ref(true);
let optionsGoods = ref();

const emit = defineEmits(["removeComponent"]);

const removeComponent = () => {
  emit("removeComponent");
};

//转到商品详情页
const goGoods = (temp: any) => {
  router.push(`/goods/${temp}`);
};
const goUrl = (temp: any) => {
  console.log(temp);
};
onMounted(() => {
  if (!prop.content.type) {
    showAddGoods.value = true;
    showAddImg.value = true;
  } else {
    if (prop.content.type === "goods") {
      showAddGoods.value = true;
      showAddImg.value = false;
    } else {
      showAddGoods.value = false;
      showAddImg.value = true;
    }
  }
});
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.price {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
</style>
