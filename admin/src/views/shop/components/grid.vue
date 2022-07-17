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
        <van-image :src="item.image" fit="contain" />
        <div class="price">
          <div>{{ item.title }}</div>
          <div>{{ item.price }}</div>
        </div>
      </GridItem>
      <!-- 图片 -->
      <GridItem v-if="showAddImg" icon="photo-o" v-for="item in content.menu">
        <div>
          <van-image :src="item.image" fit="contain" />
        </div>
      </GridItem>
    </Grid>
    <div>
      <Teleport to="#option">
        <div v-if="index == option.index">
          <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="设置内容">
              <a-button type="link" @click="addGoods" v-if="showAddGoods">
                添加商品
              </a-button>
              <a-button type="link" @click="addImg" v-if="showAddImg">
                添加图片和连接
              </a-button>
              <a-form>
                <!-- 商品 -->
                <div
                  v-for="item in content.menu"
                  class="mb-3"
                  v-if="showAddGoods"
                >
                  <a-form-item label="选择商品">
                    <a-select
                      v-model:value="item.id"
                      :allowClear="true"
                      :showSearch="true"
                      :options="optionsGoods"
                      :filter-Option="filterOption"
                      @change="selectGoods(item)"
                    />
                  </a-form-item>
                  <div class="mt-3">
                    <a-button type="primary" size="small" @click="remove(item)">
                      删除
                    </a-button>
                  </div>
                </div>

                <!--图片-->
                <div
                  v-for="item in content.menu"
                  class="mb-3"
                  v-if="showAddImg"
                >
                  <a-form-item label="上传图片">
                    <upload
                      v-model:imageUrl="item.image"
                      @on-success="
                        (imageUrl) => {
                          item.image = imageUrl;
                        }
                      "
                    />
                  </a-form-item>
                  <a-form-item label="添加连接">
                    <a-input v-model:value="item.url"></a-input>
                  </a-form-item>
                  <div class="mt-3">
                    <a-button type="primary" size="small" @click="remove(item)">
                      删除
                    </a-button>
                  </div>
                </div>
              </a-form>
            </a-tab-pane>
            <a-tab-pane key="2" tab="设置样式" force-render>
              <div>
                <a-form>
                  <a-form-item label="列数">
                    <van-stepper
                      v-model="option.column"
                      step="1"
                      min="1"
                      max="8"
                    />
                  </a-form-item>
                  <a-form-item label="间隔">
                    <van-stepper
                      v-model="option.gutter"
                      step="1"
                      min="1"
                      max="100"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-tab-pane>
            <a-tab-pane key="3" tab="编辑">
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
import IconPark from "../../../components/icon.vue";
import { Grid, GridItem, Slider, Toast, Stepper } from "vant";
import { defineProps, onMounted, ref, watch } from "vue";
import type { SelectProps } from "ant-design-vue";
import upload from "../../../components/upload.vue";

let activeKey = ref("1");
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

const addGoods = () => {
  console.log(prop.goods);
  showAddImg.value = false;
  if (!prop.content.type || prop.content.type === "")
    prop.content.type = "goods"; //类型
  if (!prop.content.menu) {
    prop.content.menu = []; //内容
    prop.content.menu.push({});
    return;
  }

  prop.content.menu.push({});
};
const addImg = () => {
  showAddGoods.value = false;
  if (!prop.content.type || prop.content.type === "")
    prop.content.type = "image"; //类型
  if (!prop.content.menu) {
    prop.content.menu = [];
    prop.content.menu.push({});
    return;
  }
  prop.content.menu.push({});
};
const remove = (item) => {
  prop.content.menu.splice(prop.content.menu.indexOf(item), 1);
  if (prop.content.menu.length === 0) {
    showAddGoods.value = true;
    showAddImg.value = true;
    prop.content.type = "";
  }
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

if (prop.goods !== []) {
  optionsGoods.value = prop.goods.map((v) => ({
    label: v.commodityName,
    value: v._id,
    Img: v.image[0].url,
    price: v.price,
  }));
}
const selectGoods = (item) => {
  console.log(item);
  for (let a in optionsGoods.value) {
    if (optionsGoods.value[a].value === item.id) {
      item.title = optionsGoods.value[a].label;
      item.image = optionsGoods.value[a].Img;
      item.price = optionsGoods.value[a].price;
    }
  }
};
onMounted(() => {
  show.value = true;
  if (!prop.content.type) {
    showAddGoods.value = true;
    showAddImg.value = true;
  } else if (prop.content.type === "goods") {
    showAddGoods.value = true;
    showAddImg.value = false;
  } else {
    showAddGoods.value = false;
    showAddImg.value = true;
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
