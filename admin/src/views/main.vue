<template>
  <div>{{ getUser_name }}</div>
  <div>
    <a-layout>
      <a-layout-header class="bg-red-500 text-white"> Header </a-layout-header>
      <a-layout-content>Content </a-layout-content>
      <a-layout-footer class="bg-white">Footer</a-layout-footer>
    </a-layout>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { RAndLogin } from "../util/register-and-login";

const { getUser_name, getUser } = RAndLogin();

onMounted(() => {
  getUser();
});
</script>
