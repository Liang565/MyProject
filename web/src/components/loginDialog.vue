<!-- 登录提示框 -->
<template>
  <div>
    <VanDialog
      v-model:show="props.showDialog"
      title="提示"
      theme="round-button"
      :show-cancel-button="true"
      confirmButtonText="立即登录"
      confirmButtonColor="rgb(96, 165, 250)"
      cancelButtonColor="rgb(248, 113, 113)"
      cancelButtonText="稍后登录"
      @confirm="DiaConfirm"
      @close="closeDialog"
    >
      <div class="text-center">当前为游客</div>
      <div class="text-center">请登录</div>
    </VanDialog>
  </div>
</template>
<script lang="ts" setup>
import { Dialog } from "vant";
import { useRouter } from "vue-router";
const router = useRouter();
const VanDialog = Dialog.Component;
const DiaConfirm = () => {
  router.push("/login");
};
const props = defineProps({
  showDialog: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["getShow"]);
const closeDialog = () => {
  emit("getShow", false);
};
</script>
