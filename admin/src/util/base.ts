/**
 *
 * @param promiss 权限名称
 * @returns 判断是否拥有该权限
 */
import adminStore from "@/stores/admin-store";

export const check = (promiss: string) => {
  const userPrmoss: Array<any> = adminStore.state.admin.promiss?.map((v) => {
    return v.name;
  });
  return userPrmoss?.includes(promiss); //判断userxxx里面有没有promiss
};
