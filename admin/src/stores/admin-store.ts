import { reactive, readonly } from "vue";

// 全局的用户名
const state = reactive({
  admin: {} as any,
  shop: [],
});
const setAdmin = (admin?: any) => {
  state.admin = admin;
};
const setShop = (shop?: any) => {
  state.shop = shop;
};
export default { state: readonly(state), setAdmin, setShop };
