<template>
  <div>home</div>
  <div>
    {{ adminStore.state.admin.role }}
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import adminStore from "../../stores/admin-store";
let newModel = ref();
</script>
