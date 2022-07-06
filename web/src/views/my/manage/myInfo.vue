<template>
  <div>
    <van-area title="标题" :area-list="areaList" />
  </div>
</template>
<script setup lang="ts">
import { AddressEdit, Toast, Popup, Area } from "vant";
import { areaList } from "@vant/area-data";
import { ref } from "vue";
</script>
