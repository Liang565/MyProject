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
        <SwipeItem v-for="list in content.image">
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
    <div>
      <teleport to="#option">
        <div v-if="index == option.index">
          <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="设置内容">
              <a-button type="primary" size="small" @click="add">
                添加内容
              </a-button>
              <div class="pm-10">
                <a-form>
                  <div v-for="item in content.image">
                    <a-form-item label="上传图片">
                      <upload
                        @on-success="
                          (res) => {
                            item.image = res;
                          }
                        "
                        v-model:imageUrl="item.image"
                      />
                    </a-form-item>
                    <a-form-item label="地址">
                      <a-input v-model:value="item.url"></a-input>
                    </a-form-item>
                    <div class="mt-3">
                      <a-button
                        type="primary"
                        size="small"
                        @click="remove(item)"
                        >删除</a-button
                      >
                    </div>
                  </div>
                </a-form>
              </div>
            </a-tab-pane>
            <a-tab-pane key="2" tab="设置样式" force-render>
              <a-form>
                <a-form-item label="滑块高度">
                  <van-stepper
                    v-model="option.height"
                    step="3"
                    min="1"
                    max="999"
                  />
                </a-form-item>
                <a-form-item label="轮播时间">
                  <van-stepper
                    v-model="option.autoplay"
                    step="100"
                    min="100"
                    max="9999"
                  />
                </a-form-item>
                <a-form-item label="指示器">
                  <a-switch v-model:checked="option.showIndicators" />
                </a-form-item>
                <a-form-item label="循环播放">
                  <a-switch v-model:checked="option.loop" />
                </a-form-item>
              </a-form>
            </a-tab-pane>
            <a-tab-pane key="3" tab="编辑">
              <a-button type="primary" size="small" @click="removeComponent">
                移除组件
              </a-button>
            </a-tab-pane>
          </a-tabs>
        </div>
      </teleport>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swipe, SwipeItem, Stepper, Image } from "vant";
import { ref } from "vue";
import upload from "../../../components/upload.vue";
let activeKey = ref("1");

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

const add = () => {
  if (!prop.content.image) {
    prop.content.image = [];
    prop.content.image.push({});
    return;
  }
  prop.content.image.push({});
};

const emit = defineEmits(["removeComponent"]);

const removeComponent = () => {
  emit("removeComponent");
};

const remove = (item) => {
  prop.content.image.splice(prop.content.image.indexOf(item), 1);
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
