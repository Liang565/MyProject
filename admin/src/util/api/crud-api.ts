import { message, Modal } from "ant-design-vue";
import { createVNode, onMounted, ref } from "vue";
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
import { http } from "../http";
import { getTransitionProps } from "ant-design-vue/lib/_util/transition";
export const CrudTest = (
  url: string
  // good?: { default: false; type: boolean },
  // userid?: String
) => {
  //分页器
  let pagination = ref({
    total: 0, //数据总数
    current: 1, //当前页面
    pageSize: 5, //数据量
  });
  const pageChange = (page: any) => {
    query.value.page = page.current;
    pagination.value.current = page.current;
    // console.log("执行pageChange" + pagination.value.current);
    // console.log("执行pageChange" + query.value.page);
    // console.log("执行pageChange" + page.current);
    // console.log(query.value.page);
    fetch();
  };
  //查询条件
  let query = ref({
    limit: pagination.value.pageSize, //一页展示多少条,默认0时会全部展示，
    page: 1, //展示页码
    where: ref({}),
    // where: ref(wheres) //展示筛选条件 where 别加s
    // populate: "user", //展示关联表的内容
  });
  let data = ref();

  const fetch = async () => {
    console.log("fetch");
    let res = await http.get(`${url}`, {
      params: {
        query: query.value,
      },
    });
    if (res.total === 0) {
      message.info("数据为空");
    }
    data.value = res.data;
    pagination.value.total = res.total;
    if (data.value.length == 0 && res.total != 0) {
      query.value.page = query.value.page - 1;
      pagination.value.current = pagination.value.current - 1;
      fetch();
    }
  };
  let viss = ref({ add: false, edit: false, addSon: false });
  const addOk = async (model, url1?: string) => {
    if (url1) {
      await http.post(`${url}/${url1}`, model);
    } else {
      await http.post(`${url}`, model);
    }
    message.success("添加成功");

    //当前页面满，且总数除以页码展示数余数不为0,跳转到新增的位置
    if (
      data.value.length == query.value.limit &&
      (pagination.value.total + 1) % query.value.limit != 0
    ) {
      console.log("空白得地方新增了一个数据");
      query.value.page =
        Math.floor(pagination.value.total / query.value.limit) + 1;
      pagination.value.current = query.value.page;
    }

    viss.value.add = false;
    fetch();
  };
  /**
   *
   * @param temp 删除的对象，主要是要获取id
   * @param temp1 别的需要展示的属性
   */
  const remove = (temp, temp1?) => {
    Modal.confirm({
      title: "是否确认删除？",
      icon: createVNode(ExclamationCircleOutlined),
      content: createVNode(
        "div",
        { style: "color:red" },
        `是否删除:${temp1} 数据？`
      ),
      async onOk() {
        await http.delete(`${url}/${temp._id}`);
        message.success("已删除");
        fetch();
      },
      onCancel() {
        console.log("Cancel");
        fetch();
      },
    });
  };
  //修改
  /**
   *
   * @param Id 要修改的Id
   * @param model 更新的对象
   */
  const editOk = async (Id, model) => {
    await http.put(`${url}/${Id}`, model);
    message.success("已修改");
    fetch();
    viss.value.edit = false;
  };
  //搜索
  let where = <any>ref({});
  const search = () => {
    for (let i in where.value) {
      if (where.value[i] == "") delete where.value[i];
    }
    if (query.value.page < 1) query.value.page = 1; //防止page为0，导致数据查询报错
    query.value.where = where.value;
    fetch();
  };

  return {
    remove,
    viss,
    editOk,
    addOk,
    fetch,
    data,
    query,
    where,
    search,
    pagination,
    pageChange,
  };
};
