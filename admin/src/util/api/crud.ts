import { http } from "../http";

interface Query {
  limit?: number;
  page?: number;
  where?: {
    [key: string]: any;
  };
  [key: string]: any;
}
export const Crud = (url: string) => ({
  /**
   *
   * @param query 查询条件
   * @returns 查询所有
   */
  find(query?: Query) {
    return http.get(url, { params: { query } });
  },
  /**
   *
   * @param id id
   * @returns  删除
   */
  delete(id) {
    return http.delete(`${url}/${id}`);
  },
  /**
   *
   * @param id id
   * @returns 查询单个
   */
  findOne(id) {
    return http.get(`${url}/${id}`);
  },

  /**
   *
   * @param model 新增或修改的数据
   * @returns  新增
   */
  create(model) {
    return http.post(url, model);
  },
  /**
   *
   * @param id  id
   * @param model 修改模型
   * @returns  修改
   */
  findByUpdata(id, model) {
    return http.put(`${url}/${id}`, model);
  },
});
