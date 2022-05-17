import { reactive, readonly } from "vue";

// 全局的用户名
const state = reactive({
  admin: {},
});
const setAdmin = (admin?: any) => {
  state.admin = admin;
};
export default { state: readonly(state), setAdmin };
