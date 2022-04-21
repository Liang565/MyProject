import { http } from "../http";
import { Crud } from "./crud";

export const classApi = {
  ...Crud("/commodity-class"),
  /**
   *
   * @param model 模型
   * @returns 创建新分类
   */
  addClass(model) {
    return http.post("commodity-class/addClass", model);
  },
  /**
   *
   * @param id 用id寻找信息
   * @returns 信息
   */
  findOne(id) {
    return http.get(`commodity-class/${id}`);
  },
};
