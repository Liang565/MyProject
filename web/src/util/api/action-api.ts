import { http } from "../http";

export const Action = () => {
  //收藏
  /**
   *
   * @param type 模型
   * @param goodsid id
   */
  const Collect = async (goodsid: string) => {
    const res = await http.get(`/action/collect/Commodity/${goodsid}/like`);
    return res;
  };

  const getCollect = async (goodsid: string) => {
    const res = await http.get(`/action/getCollect/Commodity/${goodsid}/like`);
    return res;
  };
  const getMyAction = async (action: string) => {
    const res = await http.get(`/action/getMyAction/${action}`);
    console.log("执行getMyAction");

    return res;
  };
  /**
   *
   * @param action like
   * @param body commodityName
   * @returns
   */
  const searchMyAction = async (action: string, body: string) => {
    const model = {
      commodityName: body,
    };
    const res = await http.post(`/action/searchMyAction/${action}`, model);
    return res;
  };
  return {
    Collect,
    getCollect,
    getMyAction,
    searchMyAction,
  };
};
