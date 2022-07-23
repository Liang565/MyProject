<template>
  <div>
    <div class="overflow-hidden" :style="{ height: option.height + 'px' }">
      <Swipe
        class="my-swipe"
        :autoplay="option.autoplay || 3000"
        :show-indicators="option.showIndicators"
        :loop="option.loop"
        indicator-color="white"
      >
        <SwipeItem v-for="list in content.image" @click="goUrl(list.url)">
          <div class="imgDiv">
            <van-image
              :src="list.image"
              fit="contain"
              :height="option.height"
            />
          </div>
        </SwipeItem>
        <SwipeItem v-for="list in 5" v-if="!content.image">{{
          list
        }}</SwipeItem>
      </Swipe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swipe, SwipeItem, Stepper, Image } from "vant";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const prop = defineProps({
  option: {
    type: Object,
    default: () => ({}),
  },
  content: {
    type: Object,
    default: () => ({}),
  },
  index: {
    type: String,
    default: "",
  },
});

const goUrl = (temp: any) => {
  window.location.href = `https:\\${temp}`;
};
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}

.imgDiv {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}
</style>
