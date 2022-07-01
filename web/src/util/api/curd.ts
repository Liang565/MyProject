import { Toast } from "vant";
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
      Toast.fail("内容为空");
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
    for (let i in temp) {
      const res = await http.put(`/${url}/${temp[i]}`);
      const good = await http.put(`commoditys/${res.commodity}`);
      totalSum = totalSum + res.goodsNum * good.price;
    }
    return totalSum;
  };
  return {
    fetch,
    search,
    data,
    query,
    goGoods,
    total,
    totalSum,
  };
};
