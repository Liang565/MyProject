<template>
  <div>
    <div class="text-center pt-2">我的收藏({{ Data.length }})</div>
    <div class="flex justify-evenly items-center">
      <div class="">
        <!-- 返回前一个页面 -->
        <button @click="$router.go(-1)">
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
      <div class="">
        <!-- 返回首页 -->
        <button @click="$router.push('/')">
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
        <!-- 搜索 -->
        <div class="">
          <van-search
            clearable
            shape="round"
            v-model="SearchModel"
            placeholder="请输入搜索关键词"
            @click-right-icon="searchGoods"
            @clear="clearSearch"
          >
            <template #right-icon>
              <div
                class="border-2 border-red-400 rounded-lg bg-red-200 text-sm"
              >
                搜索
              </div>
            </template>
          </van-search>
        </div>
      </div>

      <div class="w-16">
        <!-- 管理 -->
        <button @click="edit">
          <icon-park
            v-if="!showEdit"
            type="edit-two"
            theme="outline"
            size="24"
            :spin="false"
            fill="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            :strokeWidth="2"
          />
          <span v-if="showEdit">完成</span>
        </button>
      </div>
    </div>
    <div class="m-2 pb-11">
      <van-checkbox-group v-model="checked" ref="checkboxGroup">
        <div v-for="i in data" class="flex justify-center">
          <van-checkbox :name="i.object._id" class="pr-3" v-if="showEdit" />
          <div class="w-90vw mb-2">
            <van-swipe-cell>
              <van-card
                :price="i.object.price"
                :desc="i.object._id"
                :thumb="i.object.image[0].url"
                @click="goGoods(i.object)"
              >
                <template #title>
                  <div class="text-xl">
                    {{ i.object.commodityName }}
                  </div>
                </template>
                <template #footer>
                  <div>
                    库存：
                    <span v-if="i.object.commodityNum < 10">低~</span>
                    <span v-else>充足</span>
                  </div>
                </template>
              </van-card>
              <template #right>
                <van-button
                  square
                  text="删除"
                  type="danger"
                  class="delete-button"
                  @click="removeCollect(i.object._id)"
                />
              </template>
            </van-swipe-cell>
          </div>
        </div>
      </van-checkbox-group>
    </div>
    <div
      v-if="showEdit"
      class="fixed bottom-0 bg-white w-full h-11 flex justify-between items-center px-5"
    >
      <div>
        <button @click="toggleAll">
          <div class="flex">
            <icon-park
              type="full-selection"
              theme="outline"
              size="24"
              :spin="false"
              fill="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              :strokeWidth="2"
              v-if="!isCheckAll"
            />
            <icon-park
              v-if="isCheckAll"
              type="full-selection"
              theme="filled"
              size="24"
              :spin="false"
              fill="#4a90e2"
              strokeLinecap="round"
              strokeLinejoin="round"
              :strokeWidth="2"
            />
            <div class="text-sm mt-1">全选</div>
          </div>
        </button>
      </div>
      <div class="flex items-center">
        <div>
          已选：<span>{{ checked.length }}</span>
        </div>
        <div class="mx-2">
          <van-button round type="primary" @click="removeCollect()"
            >删除</van-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Action } from "../../../util/api/action-api";
import { Curd } from "../../../util/api/curd";
import { http } from "../../../util/http";
import { onMounted, ref, watch } from "@vue/runtime-dom";
import iconPark from "../../../components/iconPark.vue";
import myimage from "../../../components/myimage.vue";
import {
  Card,
  Button,
  Toast,
  Search,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  Radio,
  SwipeCell,
} from "vant";
let Data = ref([]);
let data = ref();
const { goGoods } = Curd("commoditys");

const { Collect, getCollect, getMyAction, searchMyAction } = Action();
let showEdit = ref(false);
const edit = () => {
  showEdit.value = !showEdit.value;
};
//搜索
let SearchModel = ref();
const searchGoods = () => {
  if (SearchModel.value == "" || !SearchModel.value) {
    Toast.fail("请输入关键词");
  } else {
    setTimeout(() => {
      searchMyAction("like", SearchModel.value).then((t) => {
        data.value = t;
      });
    }, 500);
  }
};
const clearSearch = () => {
  getMyAction("like").then((t) => {
    data.value = t;
  });
};
//复选
let checked = ref([]);
let isCheckAll = ref(false);
const checkboxGroup = ref();
let TotalAmount = ref(0); //总金额
// 全选
const toggleAll = () => {
  isCheckAll.value = !isCheckAll.value;
  checkboxGroup.value.toggleAll(isCheckAll.value);
};
watch(checked, (newValue, oldValue) => {
  //改变全选图标
  if (checked.value.length == data.value.length) {
    isCheckAll.value = true;
  } else {
    isCheckAll.value = false;
  }
});
//删除
const removeCollect = (temp?: never) => {
  if (temp !== 0 && temp) {
    checked.value = [temp];
    console.log(temp);

    console.log("被执行");
  }
  console.log(checked);
  Toast.loading("...");
  for (let i in checked.value) {
    Collect(checked.value[i]);
  }
  setTimeout(() => {
    if (SearchModel.value && SearchModel.value != "") {
      searchMyAction("like", SearchModel.value).then((t) => {
        data.value = t;
      });
    } else {
      getMyAction("like").then((t) => {
        data.value = t;
      });
    }
    if (temp !== 0) {
      checked.value = [];
    }
  }, 500);
};
let a = ref({ a: "阿" });

onMounted(() => {
  //获取数据
  getMyAction("like").then((t) => {
    Data.value = t;
    data.value = t;
  });
});
</script>
<style>
.delete-button {
  height: 100%;
}
</style>
