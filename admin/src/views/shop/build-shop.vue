<template>
  <div>
    <div>testteestte</div>
  </div>
  <div>111111111</div>
  <div id="option"></div>
  <div>111111111</div>
  <div>
    <Grid></Grid>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { CrudTest } from "../../util/api/crud-api";
import { http } from "../../util/http";
import Grid from "./components/grid.vue";
const {
  remove,
  viss,
  editOk,
  addOk,
  fetch,
  data,
  query,
  where,
  search,
  pagination,
  pageChange,
} = CrudTest("commoditys");
//获取商品图片和商品id
let imgg = ref([]);
const aaaa = async () => {
  const res = await http.get("commoditys", {
    params: { query: { limit: 999 } },
  });
  imgg.value = res.data
    .map((v) => ({
      imgs: v.image,
      id: v._id,
      length: v.image.length,
      img: v.image[0],
    }))
    .filter((imgg) => {
      //筛选掉children
      if (imgg.length == 0) {
        return false;
      } else {
        return true;
      }
    });
};
onMounted(() => {
  fetch();
  aaaa();
});
</script>
