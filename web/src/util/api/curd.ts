import { toNumber } from "@vue/shared";
import { Toast, Popup, Dialog } from "vant";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { http } from "../http";

export const Curd = (url: string) => {
  const router = useRouter();

  //导出的数据
  let data = ref();
  let total = ref();
  //查询条件
  let query = ref({
    limit: 0, //一页展示多少条,默认0时会全部展示，
    page: 1, //展示页码
    where: ref(),
    // where: ref(wheres) //展示筛选条件 where 别加s
    // populate: "user", //展示关联表的内容
  });
  const fetch = async () => {
    const res = <any>await http.get(`/${url}`, {
      params: {
        query: query.value,
      },
    });
    if (res.total == 0) {
      Toast.fail("无数据~");
      data.value = [];
    } else {
      const query1 = JSON.stringify(query.value);
      router.push({ query: { query1 } }); //把搜索信息传到路由去。
      data.value = res.data;
      total.value = res.total;
    }
  };
  //查询
  const search = async () => {
    console.log(query);

    fetch();
  };

  //转到商品详情页
  const goGoods = (temp: { _id: any }) => {
    //这里是防止搜索后清除搜索框后又进入商品页导致回退失败。
    router.push(`/goods/${temp._id}`);
  };

  //计算总金额
  const totalSum = async (temp: any) => {
    let totalSum = 0;
    let goodsOrder = <any>[];
    for (let i in temp) {
      //返回购物车信息
      const res = await http.put(`/${url}/${temp[i]}`);
      //res.goodsNum当前商品的数量
      //res.commodity商品id
      //返回商品信息
      const good = await http.put(`commoditys/${res.commodity}`);

      goodsOrder.push({
        goodsNum: res.goodsNum, //数量
        commodity: res.commodity, //商品id
        // price: good.price, //商品单价
        // totalMoney: res.goodsNum * good.price, //价格
        cartId: temp[i], //购物车id
      });
      totalSum = totalSum + res.goodsNum * good.price;
    }
    return { totalSum, goodsOrder };
  };

  //删除
  const removeCart = (temp: any, userId: any) => {
    let num = temp.length;
    if (num === 0) {
      Toast.fail("您还没有选择商品~");
    } else
      Dialog.confirm({
        title: `已选择${num}个商品`,
        message: "确定要删除吗？",
        cancelButtonText: "我再想想",
      })
        .then(async () => {
          for (let i in temp) {
            console.log(temp[i]);
            await http.delete(`${url}/${temp[i]}`);
          }
          query.value.where = { user: userId };
          fetch();
          Toast.success("已删除~");
        })
        .catch(() => {
          // on cancel
        });
  };
  return {
    fetch,
    search,
    data,
    query,
    goGoods,
    total,
    totalSum,
    removeCart,
  };
};
