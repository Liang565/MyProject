<template>
  <div>
    <div v-if="show" class="flex items-center justify-center w-full my-2">
      <div class="flex justify-between bg-pink-100 h-20 w-3/4 rounded-2xl">
        <div class="flex items-center ml-3">
          <van-image
            round
            width="4rem"
            height="4rem"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
          <div>
            <div>商铺名称</div>
            <div>商铺简介</div>
          </div>
        </div>
        <div class="mr-5">
          <van-tag round size="medium" :plain="true" type="warning"
            >进店</van-tag
          >
        </div>
      </div>
    </div>
    <div
      v-if="!show"
      v-for="item in content.menu"
      class="flex items-center justify-center w-full my-2"
    >
      <div class="flex justify-between bg-pink-100 h-20 w-3/4 rounded-2xl">
        <div class="flex items-center ml-3">
          <van-image round width="4rem" height="4rem" :src="item.images" />
          <div>
            <div>{{ item.title }}</div>
            <div>{{ item.description }}</div>
          </div>
        </div>
        <div class="mr-5">
          <van-tag round size="medium" :plain="true" type="warning"
            >进店</van-tag
          >
        </div>
      </div>
    </div>

    <div>
      <Teleport to="#option">
        <div v-if="index == option.index">
          <a-tabs v-model:activeKey="activeKey" class="w-56">
            <a-tab-pane key="1" tab="设置内容">
              <a-button type="link" @click="addGoods"> 添加商铺 </a-button>

              <a-form>
                <!-- 商品 -->
                <div v-for="item in content.menu" class="mb-3">
                  <a-form-item label="选择商铺">
                    <a-select
                      v-model:value="item.id"
                      :allowClear="true"
                      :showSearch="true"
                      :options="optionsShops"
                      :filter-Option="filterOption"
                      @change="selectShops(item)"
                    />
                  </a-form-item>
                  <div class="mt-3">
                    <a-button type="primary" size="small" @click="remove(item)">
                      删除
                    </a-button>
                  </div>
                </div>
              </a-form>
            </a-tab-pane>
            <a-tab-pane key="2" tab="编辑">
              <a-button type="link" @click="removeComponent">
                移除组件</a-button
              >
            </a-tab-pane>
          </a-tabs>
        </div>
      </Teleport>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconPark from "../icon.vue";
import { Grid, GridItem, Slider, Toast, Stepper, Tag } from "vant";
import { defineProps, onMounted, ref, watch } from "vue";
import type { SelectProps } from "ant-design-vue";
import upload from "../upload.vue";

let activeKey = ref("1");
const prop = defineProps({
  option: {
    //设置列数和位置
    type: Object,
    default: () => ({}),
  },
  content: {
    // 这里的内容是店铺名称，头像等
    type: Object,
    default: () => ({}),
  },
  index: {
    //组件索引，判断点击的是哪个组件
    type: String,
    default: "",
  },
  allshops: {
    type: Object,
    default: () => [],
  },
});

let optionsShops = ref();
if (prop.allshops !== []) {
  optionsShops.value = prop.allshops.map((v) => ({
    label: v.title, //店铺名
    value: v._id,
    Img: v.images, //头像
    description: v.description, //店铺简介
    address: v.address, //地址
    phone: v.phone, //电话
  }));
}
const addGoods = () => {
  show.value = false;
  if (!prop.content.menu) {
    prop.content.menu = []; //内容
    prop.content.menu.push({});
    return;
  }

  prop.content.menu.push({});
};

const remove = (item) => {
  prop.content.menu.splice(prop.content.menu.indexOf(item), 1);
};

const emit = defineEmits(["removeComponent"]);

const removeComponent = () => {
  emit("removeComponent");
};
let show = ref(false);
//分类选框搜索选项
const filterOption = (input: string, optionsClass: any) => {
  //可以用这个进行模糊搜索
  return optionsClass.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const selectShops = (item) => {
  for (let a in optionsShops.value) {
    if (optionsShops.value[a].value === item.id) {
      item.title = optionsShops.value[a].label;
      item.images = optionsShops.value[a].Img;
      item.description = optionsShops.value[a].description;
      item.address = optionsShops.value[a].address;
      item.phone = optionsShops.value[a].phone;
    }
  }
};
onMounted(() => {
  if (!prop.content.menu || prop.content.menu.length == 0) {
    show.value = true;
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
