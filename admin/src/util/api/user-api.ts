import { http } from "../http";
import { Crud } from "./crud";

export const user = {
  ...Crud("users"),
  /**
   *
   * @param model 新模型
   * @returns 修改名
   */
  add(model?) {
    return http.post("users/add", model);
  },
};
